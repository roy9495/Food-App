import Veggie from "../Components/Veggie";
import Popular from "../Components/Popular";
import { motion } from "framer-motion";
import Ketogenic from "../Components/Ketogenic";
import Vegan from "../Components/Vegan";
import Pescetarian from "../Components/Pescetarian";
import Paleo from "../Components/Paleo";
import Highcalorie from "../Components/Highcalorie";
import Highcarb from "../Components/Highcarb";

import React from "react";

function Home() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Veggie />
      <Popular />
      <Ketogenic />
      <Vegan />
      <Pescetarian />
      <Paleo />
      <Highcalorie />
      <Highcarb />
    </motion.div>
  );
}

export default Home;
