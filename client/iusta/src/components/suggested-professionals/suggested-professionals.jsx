import SectionTitle from "../section-title/index.js";
import PropTypes from "prop-types";
import CardContainer from "../card-container/index.js";

const SuggestedProfessionals = ({
  professionalsCount = 12,
  actionBarIsVisible,
  isVisibleSectionTitle,
  optionChange,
  currentOption,
}) => {
  let data = [];

  for (let i = 0; i < professionalsCount; i++) {
    data.push({
      id: "7485580",
      price: 20,
      title: "Nərbala Xaladenik Ustası",
      year: 2023,
      city: "Bakı",
      updateDate: "19.06.2023 20:14",
      imageLink:
        "https://th.bing.com/th/id/R.c6492e50bc1705a7a858f7e6fcf505ef?rik=bnZ4H7TiNUsQEQ&pid=ImgRaw&r=0",
    });
  }

  return (
    <div className={"bg-primary-bg"}>
      {isVisibleSectionTitle && (
        <SectionTitle
          title={"Tövsiyyə edilən ustalar"}
          link={""}
          linkTitle={"Hamısını Göstər"}
        />
      )}
      <CardContainer
        data={data}
        actionBarIsVisible={actionBarIsVisible}
        optionChange={optionChange}
        currentOption={currentOption}
      />
    </div>
  );
};

SuggestedProfessionals.propTypes = {
  actionBarIsVisible: PropTypes.bool,
  professionalsCount: PropTypes.number,
  isVisibleSectionTitle: PropTypes.bool,
  optionChange: PropTypes.func,
  currentOption: PropTypes.string,
};

export default SuggestedProfessionals;
