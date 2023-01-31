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
      {value === index && (
        <Box sx={{ p: 3 }}>
          <p>{children}</p>
        </Box>
      )}
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
        Item One is choose the format
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two is choose the style
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three chooose the size
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four chooose the Frequency
      </TabPanel>
      <TabPanel value={value} index={4}>
        Subscribe
      </TabPanel>
    </>
  );
}
