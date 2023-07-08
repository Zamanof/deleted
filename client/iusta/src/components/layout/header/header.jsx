import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={" ts-container bg-tz-red"}>
      {/* Main Container*/}
      <div className={"tz-inner-container h-[60px]"}>
        {/*Brand Area*/}
        <div className={"flex items-center "}>
          <Link className="w-[120px]  float-left" to={"/"}>
            <span className={"font-bold text-lg"}>IUsta.Az</span>
          </Link>
          <Link to="" className={"underline-animation"}>
            Bütün Ustalar
          </Link>
        </div>
        {/*New Car*/}
        <Link
          to={""}
          className="flex items-center  content-center hover:bg-btn-hover-green hover:text-white bg-btn-green h-[40px] px-2 rounded-lg cursor-pointer text-slate-200 transition-all duration-200 ease-in-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            width="15"
            height="15"
            className={"mr-[7px] "}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          Profil
        </Link>
      </div>
    </div>
  );
};

export default Header;
