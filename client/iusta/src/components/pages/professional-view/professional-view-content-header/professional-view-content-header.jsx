import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import "./professional-view-content-header.css";
import { Link } from "react-router-dom";

const ProfessionalViewContentHeader = ({ professional }) => {
  const { name, price } = professional;
  const [animationParent] = useAutoAnimate();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const stickyElement = document.getElementById("sticky-element");

      if (stickyElement) {
        const { top } = stickyElement.getBoundingClientRect();
        const shouldBeSticky = top <= 10;

        setIsSticky(shouldBeSticky);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      id="sticky-element"
      ref={animationParent}
      className={`sticky z-50 top-[-1px] tz-container bg-component-bg h-[60px] mb-[5px] ${
        isSticky && "border-y-[1px] border-tz-border"
      }`}
    >
      <div className="flex justify-start tz-inner-container">
        <div
          className="flex items-center gap-2 justify-center"
          ref={animationParent}
        >
          <Link
            to="/"
            className={` bg-cover ${
              isSticky
                ? "visible sticky-animation  w-[42px] h-[42px] mr-[10px]"
                : "invisible w-[0px] h-[0px] mr-[0px]"
            }`}
            style={{
              backgroundImage: "url('../../../../assets/logo.png') ",
            }}
          />
          <span className="text-2xl font-bold text-second-text">
            {name} {"  "}
            {price} {"AZN/Saat"}
          </span>
        </div>
      </div>
    </div>
  );
};

ProfessionalViewContentHeader.propTypes = {
  professional: PropTypes.object,
};

export default ProfessionalViewContentHeader;
