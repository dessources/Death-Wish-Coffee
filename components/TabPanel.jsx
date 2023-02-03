import React from "react";

import Box from "@mui/material/Box";
export default function TabPanel(props) {
  const { children, currentTab, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={currentTab !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {currentTab === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
