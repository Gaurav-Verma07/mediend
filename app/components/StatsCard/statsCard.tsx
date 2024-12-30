import React from "react";

// Define the type for the StatCard props
export type StatCardProps = {
  title: string;
  description: string;
  icon: JSX.Element;
};

// The StatCard component accepts props of type StatCardProps
const StatCard: React.FC<StatCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div
      className="bg-[#F4F7FB] px-24 py-6 rounded-lg shadow-lg text-center flex justify-center items-center flex-col"
    >
      <div className="flex justify-center  items-center">
        {/* <div className="text-xl font-semibold text-[#FF990C]  mr-2">{icon}</div> */}
        <div className="text-4xl font-semibold text-[#0069f6]">{title}</div>
      </div>
      <div className="text-sm text-gray-700">{description}</div>
    </div>
  );
};

export default StatCard;