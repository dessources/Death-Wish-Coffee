import { motion } from "framer-motion";
import React from "react";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = React.useState(false);
  return (
    <motion.div layout className="filter" onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
    </motion.div>
  );
};

export default Toggle;
