import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Card = ({ id, imageLink, price, title, year, city, updateDate }) => {
  const navigate = useNavigate();

  function divideNumber(price) {
    const str = price.toString();
    const parts = [];

    for (let i = str.length - 1; i >= 0; i -= 3) {
      const part = str.substring(Math.max(0, i - 2), i + 1);
      parts.unshift(part);
    }

    return parts.join(" ");
  }

  const item = {
    hidden: { translateY: 20, opacity: 0 },
    visible: {
      translateY: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      onClick={() => {
        navigate(`/professionals/${id}`);
      }}
      variants={item}
      target={"_blank"}
      className={
        "w-56 h-72 bg-component-bg rounded-lg hover:shadow-2xl hover:shadow-slate-700 transition-all duration-75 cursor-pointer "
      }
    >
      {/*Image*/}
      <div className={"block relative"}>
        <img
          src={imageLink}
          alt={title}
          className={"h-44 w-full overflow-clip rounded-t-lg "}
        />
      </div>
      {/*Car details*/}
      <div className={"text-second-text p-2.5"}>
        {/*Price*/}
        <div className={"font-bold text-lg "}>
          {divideNumber(price)}
          <span> AZN</span>
        </div>
        {/*Attributes*/}
        <div className={"text-base font-medium"}>
          {title}
          <br />
          {year}
        </div>
        {/**/}
        <div className={"text-dark-text"}>
          {city},{updateDate}
        </div>
      </div>
    </motion.div>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  hasVin: PropTypes.bool,
  imageLink: PropTypes.string,
  price: PropTypes.number,
  title: PropTypes.string,
  year: PropTypes.number,
  mileage: PropTypes.number,
  engineVolume: PropTypes.number,
  city: PropTypes.string,
  updateDate: PropTypes.string,
};

export default Card;
