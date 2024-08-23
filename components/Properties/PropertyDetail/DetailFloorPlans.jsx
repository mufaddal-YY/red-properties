import CustomTabs from "@/components/ui/customTabs";
import React from "react";

const DetailFloorPlans = ({ propertyDetail }) => {
  return (
    <>
      {propertyDetail.floorPlans ? (
        <div className="container mx-auto p-4">
          <div className="flex justify-center items-center px-4 mb-2">
            <h3
              className={`font-medium text-gray-800 py-2 border-b-2 border-[#BD9A68] text-4xl max-md:text-2xl text-center items-center`}>
              Floor Plans
            </h3>
          </div>
          <CustomTabs tabs={propertyDetail} />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default DetailFloorPlans;
