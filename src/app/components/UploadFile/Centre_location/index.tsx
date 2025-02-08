/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

interface place {
  recyclingCentre: any;
  centre: number;
}

const CentreLoccation: React.FC<place> = ({ recyclingCentre, centre }) => {
  return (
    <div>
      {centre === 2 && (
        <div>
          <h1 className="mt-8 p-2 text-white text-2xl font-serif font-normal capitalize shadow-inner shadow-black italic rounded-lg text-left">
            Recyclable Place Near You:
          </h1>
          {centre === 2 && (
            <div className="grid grid-cols-3  gap-10 mt-10">
              {recyclingCentre.map((data: any) => (
                <div
                  key={data.address}
                  className="w-[300px] h-[200px] border-2 flex justify-center items-center flex-col recycle_bg"
                >
                  <h1 className="text-black font-serif font-bold italic">
                    Name: {data.name ? data.name : "Recycling Cente"}
                  </h1>
                  <h3 className="text-gray-800 font-mono font-semibold">
                    Type: {data.type}
                  </h3>
                  <p className="text-gray-700 font-serif p-2 mt-2">
                    Address: {data.address}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CentreLoccation;
