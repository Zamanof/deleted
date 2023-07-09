import { useAutoAnimate } from "@formkit/auto-animate/react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Dropdown from "../inputs/dropdown/index.js";
import Notfound from "../notfound/index.js";
import Card from "../card/index.js";

const CardContainer = ({
  data,
  actionBarIsVisible,
  optionChange,
  currentOption,
}) => {
  const [animationParent] = useAutoAnimate();
  if (!Array.isArray(data) || data.length === 0) {
    return (
      <Notfound
        title={"Təəssüf ki, axtarışınız əsasında heç nə tapılmadı."}
        description={"Zəhmət olmasa, daha uyğun axtarış filtrləri seçin."}
      />
    );
  }

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className={
        "flex flex-col h-fit items-center mx-auto w-[970px] px-5 box-content gap-4   justify-between text-white  my-3"
      }
    >
      {/*Container header*/}
      {actionBarIsVisible && (
        <div className={"flex justify-between items-center w-full"}>
          {/*Car length*/}
          <span className="">{data.length} elan</span>
          <Dropdown
            optionChange={optionChange}
            sortOptions={[
              { name: "Tarixə görə", type: "date", current: false },
              { name: "Əvvəlcə ucuz", type: "fromCheapest", current: false },
              { name: "Əvvəlcə bahalı", type: "fromExpensive", current: false },
              { name: "Təcrübə", type: "year", current: false },
            ]}
            currentOption={currentOption}
          />
        </div>
      )}
      <div className={"flex gap-3 flex-wrap "} ref={animationParent}>
        {data.map((professional) => {
          return (
            <Card
              key={professional.id}
              id={professional.id}
              price={professional.price}
              title={professional.title}
              year={professional.year}
              city={professional.city}
              updateDate={professional.updateDate}
              imageLink={professional.imageLink}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

CardContainer.propTypes = {
  data: PropTypes.array,
  actionBarIsVisible: PropTypes.bool,
  optionChange: PropTypes.func,
  currentOption: PropTypes.string,
};

export default CardContainer;
