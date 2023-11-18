import React, { useState, useEffect } from "react";

import { Button } from "primereact/button";
import { DataView } from "primereact/dataview";
import { Dropdown } from "primereact/dropdown";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { Image } from "primereact/image";
import { Tooltip } from "primereact/tooltip";
import { houses } from "./../../api/houses";
import { BookmarkCheck, BookmarkX } from "lucide-react";
import { Drama, School } from "lucide-react";
import { Fieldset } from "primereact/fieldset";
import { MultiSelect } from "primereact/multiselect";

export default function HousesDataView() {
  const [products, setProducts] = useState(houses);
  const [sortKey, setSortKey] = useState("");
  const [sortOrder, setSortOrder] = useState(0);
  const [sortField, setSortField] = useState("");
  const [filter, setFilter] = useState({
    school_rating: null,
    crime_rating: null,
    transportations: [],
    amenities: [],
  });

  const header = () => {
    return (
      <div className="flex gap-2 items-end justify-between ">
        <div className="flex gap-2 items-end w-full ">
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
            className="h-full w-1/5 !text-xs"
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
            className="h-full w-1/5 !text-xs"
            pt={{
              item: { className: "!text-xs" },
            }}
          />
        </div>
        <div className="text-right ">
          <Button
            label="Clear Filters"
            size="small"
            className="whitespace-pre"
            icon="pi pi-filter-slash"
            severity="danger"
          ></Button>
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (
      filter.school_rating === null &&
      filter.crime_rating === null &&
      filter.transportations.length === 0 &&
      filter.amenities.length === 0
    ) {
      // No filtering needed if all values are null or transportations array is empty
      setProducts(houses);
    } else {
      setProducts(
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
  }, [filter, houses]);
  const itemTemplate = (product) => {
    return (
      <div className="p-3.5  ">
        <div className="flex flex-col gap-1">
          <div className="flex gap-1 text-xs">
            {product.amenities.length > 0 ? (
              product.amenities.map((amenity, index) => {
                return (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-sm text-white px-1.5"
                  >
                    {amenity}
                  </span>
                );
              })
            ) : (
              <span className="bg-gray-500 rounded-sm text-white px-1.5">
                No amenity
              </span>
            )}
          </div>
          <div className="flex gap-1 text-xs">
            {product.transportations.length > 0 ? (
              product.transportations.map((transportation, index) => {
                return (
                  <span
                    key={index}
                    className="bg-accent rounded-sm text-white px-1.5"
                  >
                    {transportation}
                  </span>
                );
              })
            ) : (
              <span className="bg-gray-500 rounded-sm text-white px-1.5">
                No transportation option
              </span>
            )}
          </div>
          <Image
            src={`houses/${product.image}.jpg`}
            alt={`${product.image}`}
            preview
            imageClassName=" object-cover h-[300px] w-[300px]  rounded-lg  "
            className=" rounded-lg"
          />

          <div className="flex justify-between items-center ">
            <div className="font-bold text-gray-900">{product.address}</div>
            <BookmarkCheck className="cursor-pointer hover:text-green-500" />
          </div>
          <div className="flex flex-col gap-1">
            <Tooltip
              target={`.crime-icon-${product.id}`}
              mouseTrack
              mouseTrackLeft={10}
              className="!text-xs"
            />
            <Tooltip
              target={`.school-icon-${product.id}`}
              mouseTrack
              mouseTrackLeft={10}
              className="!text-xs"
            />

            <i
              className={`crime-icon-${product.id}  `}
              data-pr-tooltip="Crime Rating"
              data-pr-position="right"
              data-pr-at="right+5 top"
              data-pr-my="left center-2"
            >
              <Rating
                value={product.crime_rating}
                readOnly
                cancel={false}
                onIcon={<Drama className="h-4 w-4 text-red-500" />}
                offIcon={<Drama className="h-4 w-4 text-gray-300" />}
              />
            </i>

            <i
              className={`school-icon-${product.id}  `}
              data-pr-tooltip="School Rating"
              data-pr-position="right"
              data-pr-at="right+5 top"
              data-pr-my="left center-2"
            >
              <Rating
                value={product.school_rating}
                readOnly
                cancel={false}
                onIcon={<School className="h-4 w-4 text-green-500" />}
                offIcon={<School className="h-4 w-4 text-gray-300" />}
              />
            </i>
          </div>
        </div>
      </div>
    );
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
        value={products}
        itemTemplate={itemTemplate}
        header={header()}
        sortField={sortField}
        sortOrder={sortOrder}
        paginator
        rows={8}
        pt={{
          grid: {
            className: "grid md:grid-cols-4 sm:grid-cols-1 gap-1",
          },
        }}
      />
    </div>
  );
}
