import React from "react";
import { Tag } from "primereact/tag";
import { Image } from "primereact/image";
import { Tooltip } from "primereact/tooltip";
import { Dropdown } from "primereact/dropdown";
import { BookmarkCheck, BookmarkX } from "lucide-react";
import { Rating } from "primereact/rating";
import { Drama, School } from "lucide-react";
import { useHouses } from "../../contexts/HousesContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const HouseCardList = ({ house }) => {
  const { updateSavedValue } = useHouses();
  const navigate = useNavigate();
  return (
    <div className="p-3.5 flex gap-4 relative">
      <Image
        src={`houses/${house.image}.jpg`}
        alt={`${house.image}`}
        preview
        imageClassName=" w-[400px]  rounded-lg object-cover object-center mx-auto  shadow-[5px_5px_0_0_rgb(65,103,121)]"
        className=" rounded-lg"
      />
      {house?.id && (
        <div className="flex flex-col gap-1 w-full">
          <div className="flex justify-between items-center ">
            <div className="space-y-1">
              <div className="flex gap-1 text-lg">
                {house.amenities.length > 0 ? (
                  house.amenities.map((amenity, index) => {
                    return (
                      <span
                        key={index}
                        className="bg-gradient-to-b from-secondary to-primary rounded-sm text-white px-1.5 shadow-md"
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
              <div className="flex gap-1 text-lg">
                {house.transportations.length > 0 ? (
                  house.transportations.map((transportation, index) => {
                    return (
                      <span
                        key={index}
                        className="bg-gradient-to-b from-secondary to-primary rounded-sm text-white px-1.5 shadow-md"
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
            </div>

            <div>
              <BookmarkCheck
                className={`cursor-pointer h-8 w-8 ${
                  house.saved ? "text-green-500" : "hover:text-green-500"
                }`}
                onClick={(e) => {
                  updateSavedValue(house.id, !house.saved);

                  toast.success(
                    `${!house.saved == 0 ? "Unsaved " : "Saved "} ${
                      house.address
                    }`,
                    {
                      position: "bottom-left",
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    }
                  );
                }}
              />
            </div>
          </div>

          <div className="text-xs">ID: {house.id}</div>
          <div className="flex justify-between">
            <div
              className="font-bold text-gray-900 text-lg hover:underline hover:text-blue-500 cursor-pointer"
              onClick={(e) => {
                navigate(`/view/${house.id}`);
              }}
            >
              {house.address}
            </div>
          </div>
          <div className="flex flex-col gap-1 absolute bottom-0 mb-3.5">
            <Tooltip
              target={`.crime-icon-${house.id}`}
              mouseTrack
              mouseTrackLeft={10}
              className="!text-xs"
            />
            <Tooltip
              target={`.school-icon-${house.id}`}
              mouseTrack
              mouseTrackLeft={10}
              className="!text-xs"
            />

            <i
              className={`crime-icon-${house.id}  `}
              data-pr-tooltip="Crime Rating"
              data-pr-position="right"
              data-pr-at="right+5 top"
              data-pr-my="left center-2"
            >
              <Rating
                value={house.crime_rating}
                readOnly
                cancel={false}
                onIcon={<Drama className="h-8 w-8 text-red-500" />}
                offIcon={<Drama className="h-8 w-8 text-gray-300" />}
              />
            </i>

            <i
              className={`school-icon-${house.id}  `}
              data-pr-tooltip="School Rating"
              data-pr-position="right"
              data-pr-at="right+5 top"
              data-pr-my="left center-2"
            >
              <Rating
                value={house.school_rating}
                readOnly
                cancel={false}
                onIcon={<School className="h-8 w-8 text-green-500" />}
                offIcon={<School className="h-8 w-8 text-gray-300" />}
              />
            </i>
          </div>
        </div>
      )}
    </div>
  );
};

export default HouseCardList;
