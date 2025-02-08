
"use client";

import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Loader from "../../loader";

interface Product {
  name: string;
  description: string;
  price: string;
}

interface User {
  name: string;
  waste_type: string;
  recommended_products: Product[];
  description: string;
  price: string;
}

const Alternattive = () => {
  const [product, setProducts] = useState<User>();
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtondisabled] = useState(false);
  const [step, setStep] = useState(1);

  const handleProducts = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    setButtondisabled(true);

    const itemId = localStorage.getItem("id");

    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/suggest_alternative/${itemId}`
      );
      setProducts(response.data);
      setStep(2);
      debugger
      toast.success("Successfully find alternative products");
      setButtondisabled(false);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Get Alternative product failed");
      setButtondisabled(false);
      setLoading(false);
      return;
    }
  };
  return (
    <div className="flex justify-center items-center flex-col mt-5">
      <h2 className="text-white mt-10  p-2 text-3xl font-serif font-bold   shadow-inner shadow-black  rounded-lg">
        Want Some Alternative Product To Save The Nature.Ask With Our Ai
      </h2>
      <button
        onClick={handleProducts}
        disabled={buttonDisabled === true}
        className={`mt-5 z-[5]`}
      >
        {loading ? <Loader /> : "Get Alternative Product"}
      </button>
      {step === 2 && (
        <div className="mt-5">
          <h2 className="text-white mt-10 text-left p-2 text-3xl font-serif font-bold   shadow-inner shadow-black  rounded-lg">
            Alternative Products:
          </h2>

          <h1 className="mt-2 mb-5 font-bold font-serif text-2xl capitalize">
            Waste_Type:{" "}
            <span className="text-black">{product?.waste_type}</span>
          </h1>
          <div className="grid grid-cols-2 gap-10">
            {product?.recommended_products.map((data) => (
              <div key={data.name} className="mt-3 p-2 border-2 alternative">
                <h1 className="mb-3 font-serif italic text-xl text-black">
                  {data.name}
                </h1>
                <h3 className="mb-2 font-mono italic text-black">
                  Description: {data.description}
                </h3>
                <p className="mt-2 text-red-800 text-2xl ">
                  Price: ${data.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Alternattive;
