import PropTypes from "prop-types";

const ProfessionalViewInfoHeader = ({ professional }) => {
  const { id } = professional;
  return (
    <div
      className={
        "tz-container bg-component-bg border-b-[1px] border-tz-border "
      }
    >
      <div className={"tz-inner-container "}>
        <div className={" flex gap-2 items-center justify-start  h-[50px] "}>
          <span
            className={
              "cursor-pointer select-none underline-animation text-base text-second-text hover:text-blue-400"
            }
          >
            {"Təmir"}
          </span>
          <span className={"select-none text-[#474d62] "}>&bull;</span>
          <span
            className={
              "cursor-pointer select-none underline-animation text-base text-second-text hover:text-blue-400"
            }
          >
            {"Soyuducu"}
          </span>
          <span className={"select-none text-[#474d62] "}>&bull;</span>
          <span className={"text-sm text-second-text"}>Usta № {id}</span>
        </div>
      </div>
    </div>
  );
};

ProfessionalViewInfoHeader.propTypes = {
  professional: PropTypes.object,
};

export default ProfessionalViewInfoHeader;
