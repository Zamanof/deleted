import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import ProfessionalViewInfoHeader from "../../components/pages/professional-view/professional-view-info-header/index.js";
import ProfessionalViewContentHeader from "../../components/pages/professional-view/professional-view-content-header/index.js";

const ProfessionalView = () => {
  const { id } = useParams();
  const professional = {
    id: id,
    year: 2023,
    price: 20,
    name: "Nərbala",
    updated: "27.06.2023",
    viewCount: 23073,
    city: "Bakı",
    about:
      "I am an experienced refrigerator technician with 10 years of experience in repairing various types of refrigerators. I specialize in refrigerator repairs, including fixing cooling system issues, troubleshooting electrical problems, adjusting thermostats, replacing compressors, refilling refrigerants, and repairing ice maker systems. I am dedicated to providing high-quality and efficient repair services to ensure that your refrigerator functions optimally. Customer satisfaction is my top priority, and I strive to deliver reliable and timely repairs. Contact me for all your refrigerator repair needs!",
    skills: [
      "Refrigerator repair",
      "Cooling system repair",
      "Electrical troubleshooting",
      "Thermostat adjustment",
      "Compressor replacement",
      "Refrigerant refilling",
      "Ice maker system repair",
    ],
    image:
      'https://th.bing.com/th/id/R.c6492e50bc1705a7a858f7e6fcf505ef?rik=bnZ4H7TiNUsQEQ&pid=ImgRaw&r=0"',
  };

  useEffect(() => {
    document.title = `${professional.name}  - Turbo.Az`;
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={"bg-component-bg h-[1200px]"}
    >
      <ProfessionalViewInfoHeader professional={professional} />
      <ProfessionalViewContentHeader professional={professional} />
      {/*<CarViewContent professional={professional} />*/}
      {/*<LastListings isVisibleSectionTitle={true} />*/}
    </motion.div>
  );
};

export default ProfessionalView;
