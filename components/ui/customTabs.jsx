"use client";

import React, { useState } from "react";
import Image from "next/image";

const CustomTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0); // Initially, the first tab is active

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      {/* Tab Headers */}
      <div className="flex w-full justify-center border-b overflow-x-auto">
        <div className="flex flex-nowrap">
          {tabs?.floorPlans?.map((tab, index) => (
            <button
              key={index}
              className={`py-2 px-4 text-sm font-medium whitespace-nowrap ${
                activeTab === index
                  ? "border-b-2 border-[#BD9A68] text-red-500"
                  : "text-gray-500 hover:text-[#BD9A68]"
              }`}
              onClick={() => handleTabClick(index)}>
              {tab?.floor}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="flex justify-center p-4">
        {tabs?.floorPlans[activeTab] && (
          <Image
            key={activeTab} // Force re-render when activeTab changes
            src={tabs.floorPlans[activeTab].image}
            alt={`Floor ${tabs.floorPlans[activeTab].floor}`}
            width={600} // Set appropriate width
            height={400} // Set appropriate height
            objectFit="contain" // Adjust as necessary
          />
        )}
      </div>
    </div>
  );
};

export default CustomTabs;
