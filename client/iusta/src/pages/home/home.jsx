import { motion } from "framer-motion";
import Search from "../../components/search/index.js";
import SuggestedProfessionals from "../../components/suggested-professionals/index.js";

const Home = () => {
  document.title = "IUsta - Xidməti burada seçirlər";

  return (
    <motion.div
      className={" "}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Search />
      <SuggestedProfessionals professionalsCount={32} />
    </motion.div>
  );
};

export default Home;
