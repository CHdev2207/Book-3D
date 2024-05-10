import React from "react";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { FaLine } from "react-icons/fa";
import { FaStore } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
const ServicesData = [
  {
    name: "Delivery",
    description: "Lineman, Grab.",
    icon: <MdOutlineDeliveryDining className="text-4xl" />,
    bgColor: "bg-green-700/70",
  },
  {
    name: "Contact channels",
    description: "Lorem ipsum dolor sit.",
    icon: <FaLine  className="text-4xl" />,
    bgColor: "bg-lime-500/90",
  },
  {
    name: "Storefront",
    description: "-สาขา หน้าม.มหิดล ประตู 4 และ -สาขา Groove Market ",
    icon: <FaStore className="text-4xl" />,
    bgColor: "bg-red-700/70",
  },
  {
    name: "Opening and closing ",
    description: "สาขา หน้าม.มหิดล 11:00-21:00 Groove Market 14:30-23.00",
    icon: <FaRegClock  className="text-4xl" />,
    bgColor: "bg-orange-600/70",
  },
];
const ServicesBox = () => {
  return (
    <div className="h-full mt-10 text-white">
      <div className="grid grid-cols-2 gap-6">
        {ServicesData.map(({ name, description, icon, bgColor }) => (
          <div className={`p-3 ${bgColor} min-h-[180px] rounded-xl`}>
            <div className="p-3 space-y-3">
              {icon}
              <h1>{name}</h1>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesBox;
