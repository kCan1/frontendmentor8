import { type FC } from "react";
import {
  girlAvatar,
  date,
  name,
  share,
  facebook,
  twitter,
  pinterest,
} from "../../constants/data";

interface FooterProps {
  onShareClick: () => void;
  isOpen: boolean;
}

const Footer: FC<FooterProps> = ({ onShareClick, isOpen }) => {
  return (
    <div className="relative select-none md:px-12">
      {/* shows when not clicked  */}
      <div className="md:hidden md:px-6">
        {!isOpen && (
          <div className="flex justify-between items-center px-8 py-6 ">
            <div className="flex items-center">
              <img
                src={girlAvatar}
                alt="Author avatar"
                className="w-12 h-12 rounded-full mr-6"
              />
              <div>
                <h3 className="text-sm text-slate-800 font-bold">{name}</h3>
                <p className="text-sm text-slate-600">{date}</p>
              </div>
            </div>
            <button
              onClick={onShareClick}
              aria-expanded={isOpen}
              aria-label="Open share options"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 hover:bg-slate-300 transition"
            >
              <img src={share} alt="" className="w-4 h-4" />
            </button>
          </div>
        )}

        {isOpen && (
          <div
            className="

    flex items-center
    bg-slate-700 text-white
    rounded-none md:rounded-xl md:rounded-t-none
    animate-fade-in
    px-8 py-6
    sm:px-6 sm:py-5
    md:px-8 md:py-6
    gap-5 sm:gap-5 md:gap-5
    rounded-b-2xl
  "
          >
            <span
              className="
      font-extralight
      text-[14px] xs:text-xs sm:text-sm
      tracking-[0.25em] xs:tracking-[0.4em] sm:tracking-[0.55em] md:tracking-[0.7em]
      whitespace-nowrap
    "
            >
              SHARE
            </span>

            <div
              className="
      flex items-center
      gap-2 xs:gap-3 sm:gap-4 md:gap-5
    "
            >
              <img
                src={facebook}
                alt="Facebook"
                className="w-6 h-6 xs:w-6 xs:h-6 sm:w-7 sm:h-7 transition-transform hover:scale-110"
              />
              <img
                src={twitter}
                alt="Twitter"
                className="w-6 h-6 xs:w-6 xs:h-6 sm:w-7 sm:h-7 transition-transform hover:scale-110"
              />
              <img
                src={pinterest}
                alt="Pinterest"
                className="w-6 h-6 xs:w-6 xs:h-6 sm:w-7 sm:h-7 transition-transform hover:scale-110"
              />
            </div>

            <button
              onClick={onShareClick}
              aria-label="Close share options"
              className="
              rounded-full
              
                ml-auto
                flex items-center justify-center
                xs:rounded-lg sm:rounded-full
                w-10 h-10 xs:w-9 xs:h-9 sm:w-10 sm:h-10
                bg-slate-600 hover:bg-slate-500
                focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60
                transition
              "
            >
              <img
                src={share}
                alt=""
                className="w-4 h-4 sm:w-4 sm:h-4 invert brightness-0"
              />
            </button>
          </div>
        )}
      </div>

      {/* shows when clicked */}
      <div className="hidden md:flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={girlAvatar}
            alt="Author avatar"
            className="w-12 h-12 rounded-full mr-6"
          />
          <div>
            <h3 className="text-sm text-slate-800 font-bold">{name}</h3>
            <p className="text-sm text-slate-600">{date}</p>
          </div>
        </div>

        <button
          onClick={onShareClick}
          aria-expanded={isOpen}
          aria-label="Toggle share options"
          className={`w-10 h-10 flex items-center justify-center rounded-full transition
            ${isOpen ? "bg-slate-600" : "bg-slate-200 hover:bg-slate-300"}
          `}
        >
          <img
            src={share}
            alt=""
            className={`w-4 h-4 ${isOpen ? "brightness-0 invert" : ""}`}
          />
        </button>

        {isOpen && (
          <div
            className="
              absolute
              -top-26 -right-31
              bg-slate-700 text-white
              rounded-xl px-8 py-4
              flex items-center gap-6
              shadow-2xl animate-fade-in
              drop-shadow-2xl
              z-50
              h-[65px]
              w-[350px]
            "
          >
            <span className="tracking-[0.7em] text-sm font-extralight">
              SHARE
            </span>
            <img
              src={facebook}
              alt="Facebook"
              className="w-7 h-7 cursor-pointer"
            />
            <img
              src={twitter}
              alt="Twitter"
              className="w-7 h-7 cursor-pointer"
            />
            <img
              src={pinterest}
              alt="Pinterest"
              className="w-7 h-7 cursor-pointer"
            />
            <div className="absolute -bottom-2 left-36 w-6 h-6 -z-1 bg-slate-700 rotate-45" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;
