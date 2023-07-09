import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SearchInput from "../inputs/search-input/index.js";
import Dropdown from "../inputs/dropdown/index.js";
import Combobox from "../inputs/combobox/index.js";

const Search = ({ value = "" }) => {
  const cities = [
    { value: "", title: "" },
    { value: "7", title: "Ağcabədi" },
    { value: "4", title: "Ağdam" },
    { value: "6", title: "Ağdaş" },
    { value: "5", title: "Ağdərə" },
    { value: "8", title: "Ağstafa" },
    { value: "10", title: "Ağsu" },
    { value: "9", title: "Astara" },
    { value: "78", title: "Babək" },
    { value: "1", title: "Bakı" },
    { value: "14", title: "Balakən" },
    { value: "13", title: "Beyləqan" },
    { value: "12", title: "Bərdə" },
    { value: "15", title: "Biləsuvar" },
    { value: "26", title: "Cəbrayıl" },
    { value: "25", title: "Cəlilabad" },
    { value: "27", title: "Culfa" },
    { value: "24", title: "Daşkəsən" },
    { value: "23", title: "Dəliməmmədli" },
    { value: "60", title: "Füzuli" },
    { value: "36", title: "Gədəbəy" },
    { value: "2", title: "Gəncə" },
    { value: "18", title: "Goranboy" },
    { value: "17", title: "Göyçay" },
    { value: "19", title: "Göygöl" },
    { value: "20", title: "Göytəpə" },
    { value: "77", title: "Hacıqabul" },
    { value: "22", title: "Horadiz" },
    { value: "32", title: "İmişli" },
    { value: "33", title: "İsmayıllı" },
    { value: "37", title: "Kəlbəcər" },
    { value: "41", title: "Kürdəmir" },
    { value: "42", title: "Laçın" },
    { value: "43", title: "Lerik" },
    { value: "11", title: "Lənkəran" },
    { value: "44", title: "Liman" },
    { value: "45", title: "Masallı" },
    { value: "46", title: "Mingəçevir" },
    { value: "47", title: "Naftalan" },
    { value: "48", title: "Naxçıvan" },
    { value: "49", title: "Neftçala" },
    { value: "50", title: "Oğuz" },
    { value: "51", title: "Ordubad" },
    { value: "35", title: "Qax" },
    { value: "34", title: "Qazax" },
    { value: "16", title: "Qəbələ" },
    { value: "21", title: "Qobustan" },
    { value: "38", title: "Quba" },
    { value: "39", title: "Qubadlı" },
    { value: "40", title: "Qusar" },
    { value: "52", title: "Saatlı" },
    { value: "53", title: "Sabirabad" },
    { value: "68", title: "Şabran" },
    { value: "71", title: "Şahbuz" },
    { value: "54", title: "Salyan" },
    { value: "73", title: "Şamaxı" },
    { value: "55", title: "Samux" },
    { value: "72", title: "Şəki" },
    { value: "69", title: "Şəmkir" },
    { value: "70", title: "Şərur" },
    { value: "74", title: "Şirvan" },
    { value: "56", title: "Siyəzən" },
    { value: "3", title: "Sumqayıt" },
    { value: "75", title: "Şuşa" },
    { value: "58", title: "Tərtər" },
    { value: "57", title: "Tovuz" },
    { value: "59", title: "Ucar" },
    { value: "62", title: "Xaçmaz" },
    { value: "61", title: "Xankəndi" },
    { value: "67", title: "Xırdalan" },
    { value: "66", title: "Xızı" },
    { value: "64", title: "Xocalı" },
    { value: "63", title: "Xocavənd" },
    { value: "65", title: "Xudat" },
    { value: "76", title: "Yardımlı" },
    { value: "28", title: "Yevlax" },
    { value: "29", title: "Zaqatala" },
    { value: "30", title: "Zəngilan" },
    { value: "31", title: "Zərdab" },
  ];

  const [searchValue, setSearchValue] = useState(value);
  const isSearchValueEmpty = searchValue.length <= 0;
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    navigate(`/autos?query=${searchValue}`);
  };
  const resetInput = () => {
    setSearchValue("");
  };

  const handleReset = () => {
    resetInput();
    searchValue.current.focus();
  };

  return (
    <div>
      <div className={"tz-container bg-secondary-light-bg"}>
        <div className={"tz-inner-container flex-col py-5 "}>
          {/*Search & Filter*/}
          <div className={" w-full"}>
            <SearchInput
              value={searchValue}
              onChange={handleInputChange}
              onEnter={handleSearch}
              placeHolder={"Axtardığınız xidməti bura yazın"}
            />
          </div>
          {/*Footer*/}
          <div className={"flex items-center justify-between mt-2 w-full"}>
            <div className={"flex gap-2"}>
              <Combobox title={"Şəhər"} options={cities} />
            </div>
            {/*Action*/}
            <div className={"flex items-center gap-4"}>
              {/*Reset*/}
              <button
                onClick={handleReset}
                disabled={isSearchValueEmpty}
                className={` ${
                  !isSearchValueEmpty && "underline-animation"
                } text-tz-red-text h-fit disabled:text-second-text`}
              >
                Sıfırla
              </button>
              {/*Search*/}
              <Link
                to={""}
                className={
                  "py-[15px] px-10 bg-tz-red hover:bg-tz-red-hover-dark rounded-lg text-sm transition-all duration-150"
                }
              >
                Ustaları göstər
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Search.propTypes = {
  value: PropTypes.string,
};

export default Search;
