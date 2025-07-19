import { image1, header, paragraph } from "../constants/data";
import Footer from "./card/Footer";
import { useState } from "react";

const Card = () => {
  const [showExtra, setShowExtra] = useState(false);

  return (
    <div
      className="
        w-full max-w-[1000px]
        bg-white rounded-xl shadow-2xl
        flex flex-col md:flex-row
      "
    >
      {/* Image */}
      <div className="md:basis-2/5">
        <img
          src={image1}
          alt="Drawer with decor items"
          className="w-full h-full object-cover md:rounded-l-xl md:rounded-tr-none rounded-t-xl md:rounded-t-none"
          loading="lazy"
        />
      </div>

      {/* Content + Footer */}
      <article className="md:basis-3/5 flex flex-col">
        <div
          className="
            flex-1 flex flex-col
            px-6 sm:px-8 md:px-10 lg:px-12
            pt-8 md:pt-10
            pb-4 md:pb-6
            space-y-5 md:space-y-6
          "
        >
          <h1 className="font-bold leading-tight text-xl sm:text-2xl md:text-3xl text-slate-700">
            {header}
          </h1>
          <p className="text-base sm:text-[17px] md:text-lg leading-relaxed text-slate-500 max-w-[62ch] flex-1">
            {paragraph}
          </p>
        </div>

        <div className="mt-auto -mb-1 md:mb-8">
          <Footer
            isOpen={showExtra}
            onShareClick={() => setShowExtra((v) => !v)}
          />
        </div>
      </article>
    </div>
  );
};

export default Card;
