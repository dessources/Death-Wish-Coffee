import React from "react";
import { Box, Tabs, Tab } from "@mui/material";
// export default function CreateSubscription(props) {
//      const { children, value, index, ...other } = props;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
          <Tab label="Item Four" />
          <Tab label="Item Five" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <h2> How do you brew ?</h2>
        <div>Single Serve Pods</div>
        <div>Bagged Coffee</div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h2>Choose your roast</h2>
        <div>Medium Roast</div>
        <div>Dark Roast</div>
        <div>Espresso Roast</div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        How many cups ?<div>10 count</div>
        <div>20 count</div>
        <div>50 count</div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <h2> Choose your Frequency</h2>
        <div>30 days</div>
        <div>60 days</div>
        <div>90 days</div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <button>Subscribe</button>
        <i>*You will be charged the above price each time your order ships</i>
      </TabPanel>
    </>
  );
}
