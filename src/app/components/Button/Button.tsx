import { useRouter } from "next/navigation";
import React from "react";

interface Prop {
  title: string;
}

const Button: React.FC<Prop> = ({ title }) => {
  const router = useRouter();

  const handleClick = () => {
    if (title === "Get Started") {
      router.push("/upload");
    } else if (title === "How it Works") {
      router.push("/work");
    }
  };
  return (
    <div className="mt-8">
      <button
        onClick={handleClick}
        className={`${
          title === "Get Started"
            ? "bg-red-700 w-[300px] border-2 border-white z-[2] p-2 rounded-xl font-serif font-bold text-white text-container hover:bg-transparent transition-all"
            : " bg-emerald-800 w-[300px] border-2 border-blue-800 z-[2] p-2 rounded-xl font-serif font-bold text-white text-container hover:bg-transparent transition-all"
        }`}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
