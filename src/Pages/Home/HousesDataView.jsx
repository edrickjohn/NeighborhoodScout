import React, { useState, useEffect } from "react";

import { Button } from "primereact/button";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";
import { Dropdown } from "primereact/dropdown";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { Image } from "primereact/image";
import { Tooltip } from "primereact/tooltip";

import { Drama, School } from "lucide-react";
import { Fieldset } from "primereact/fieldset";
import { MultiSelect } from "primereact/multiselect";
import HouseCard from "./HouseCard";
import { useHouses } from "../../contexts/HousesContext";
import HouseCardList from "./HouseCardList";
export default function HousesDataView({ api_houses }) {
  const [layout, setLayout] = useState("grid");
  const [houses, setHouses] = useState(api_houses);
  const [sortOrder, setSortOrder] = useState(0);
  const [sortField, setSortField] = useState("");
  const defaultFilter = {
    school_rating: null,
    crime_rating: null,
    transportations: [],
    amenities: [],
  };

  const [filter, setFilter] = useState(defaultFilter);

  const header = () => {
    return (
      <div>
        <div className="flex md:flex-nowrap flex-wrap gap-2 items-end justify-between ">
          <div className="flex flex-wrap gap-2 items-end w-full ">
            <Fieldset
              legend="School Rating"
              pt={{
                legendTitle: { className: "text-xs" },
                content: {
                  className: "!p-0 !px-2 !py-1",
                },
              }}
            >
              <Rating
                value={filter.school_rating}
                onIcon={<School className="h-4 w-4 text-green-500" />}
                offIcon={<School className="h-4 w-4 text-gray-300" />}
                onChange={(e) => {
                  setFilter({
                    ...filter,
                    school_rating: e.value,
                  });
                }}
              />
            </Fieldset>
            <Fieldset
              legend="Crime Rating"
              pt={{
                legendTitle: { className: "!text-xs" },
                content: {
                  className: "!p-0 !px-2 !py-1",
                },
              }}
            >
              <Rating
                value={filter.crime_rating}
                onIcon={<Drama className="h-4 w-4 text-red-500" />}
                offIcon={<Drama className="h-4 w-4 text-gray-300" />}
                onChange={(e) => {
                  setFilter({
                    ...filter,
                    crime_rating: e.value,
                  });
                }}
              />
            </Fieldset>
            <MultiSelect
              value={filter.transportations}
              onChange={(e) => {
                setFilter({
                  ...filter,
                  transportations: e.value,
                });
              }}
              options={[
                { name: "Bus", value: "Bus" },
                { name: "Tricycle", value: "Tricycle" },
                { name: "Grab", value: "Grab" },
                { name: "Subway", value: "Subway" },
              ]}
              optionLabel="name"
              optionValue="value"
              placeholder="Select Transporations"
              className="h-full w-full md:w-1/5 !text-xs"
              pt={{
                item: { className: "!text-xs" },
              }}
            />
            <MultiSelect
              value={filter.amenities}
              onChange={(e) => {
                setFilter({
                  ...filter,
                  amenities: e.value,
                });
              }}
              options={[
                { name: "Gym", value: "Gym" },
                { name: "Swimming Pool", value: "Swimming Pool" },
              ]}
              optionLabel="name"
              optionValue="value"
              placeholder="Select Amenities"
              className="h-full w-full md:w-1/5 !text-xs"
              pt={{
                item: { className: "!text-xs" },
              }}
            />
          </div>
          <div className=" flex gap-2  ">
            <div>
              <Button
                label="Clear Filters"
                size="small"
                className="whitespace-pre"
                icon="pi pi-filter-slash"
                severity="danger"
                onClick={(e) => {
                  setFilter(defaultFilter);
                }}
              ></Button>
            </div>

            <div className="flex justify-content-end">
              <DataViewLayoutOptions
                layout={layout}
                onChange={(e) => setLayout(e.value)}
                className="whitespace-pre"
              />
            </div>
          </div>
        </div>
        <span className="font-bold text-sm ">
          ({houses.length}) results found.
        </span>
      </div>
    );
  };
  useEffect(() => {
    setHouses(api_houses);
  }, [api_houses]);

  useEffect(() => {
    if (
      filter.school_rating === null &&
      filter.crime_rating === null &&
      filter.transportations.length === 0 &&
      filter.amenities.length === 0
    ) {
      // No filtering needed if all values are null or transportations array is empty
      setHouses(api_houses);
    } else {
      setHouses(
        houses.filter(function (item) {
          for (var key in filter) {
            if (key === "transportations") {
              // Check if all transportation values are present in the item's transportations array
              if (
                filter.transportations.length > 0 &&
                !filter.transportations.every((value) =>
                  item.transportations.includes(value)
                )
              ) {
                return false;
              }
            } else if (key === "amenities") {
              // Check if all transportation values are present in the item's transportations array
              if (
                filter.amenities.length > 0 &&
                !filter.amenities.every((value) =>
                  item.amenities.includes(value)
                )
              ) {
                return false;
              }
            } else {
              if (filter[key] !== null && item[key] !== filter[key]) {
                return false;
              }
            }
          }
          return true;
        })
      );
    }
  }, [filter, api_houses]);
  const itemTemplate = (house, layout) => {
    if (!house) {
      return;
    }

    if (layout === "list") return <HouseCardList house={house} />;
    else if (layout === "grid") return <HouseCard house={house} />;
  };

  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  return (
    <div className="">
      <DataView
        value={houses}
        itemTemplate={itemTemplate}
        header={header()}
        sortField={sortField}
        sortOrder={sortOrder}
        paginator
        rows={8}
        pt={{
          grid: {
            className: `text-gray-800 bg-gray-100 dark:bg-slate-950 dark:text-white gap-4  ${
              layout == "grid" && "grid md:grid-cols-4 sm:grid-cols-1 "
            }`,
          },
        }}
        layout={layout}
      />
    </div>
  );
}
