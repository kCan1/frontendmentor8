import { image1, header, paragraph } from "../constants/data";
import Footer from "./card/Footer";
import { useState } from "react";

const Card = () => {
  const [showExtra, setShowExtra] = useState(false);

  return (
    <div className="md:w-[1000px] md:h-[350px] bg-white rounded-xl shadow-2xl flex flex-col md:flex-row relative md:overflow-visible">
      <div className="md:flex-2/5">
        <img
          src={image1}
          alt="drawer"
          className="md:rounded-l-2xl md:rounded-t-none rounded-t-2xl h-full"
        />
      </div>

      <div className="md:flex-3/5  md:py-7 font-primary flex flex-col relative">
        <h1 className="text-3xl font-bold text-slate-600 mb-6 mt-12 md:mt-0 px-12">
          {header}
        </h1>
        <p className="text-lg text-slate-500 md:mb-6 mb-4 flex-1 px-12">
          {paragraph}
        </p>

        <Footer
          isOpen={showExtra}
          onShareClick={() => setShowExtra((v) => !v)}
        />
      </div>
    </div>
  );
};

export default Card;
