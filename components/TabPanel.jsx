import React from "react";

import Box from "@mui/material/Box";
export default function TabPanel(props) {
  const { children, currentTab, index, dataFor, ...other } = props;

  const elements = React.Children.toArray(children);
  let renderedChildren;
  // pass the dataFor prop to each div of the cards div
  if (dataFor !== undefined) {
    renderedChildren = elements.map(({ type, props }, i) => {
      let { className, children, ...other } = props;
      className = className ? className : "";

      if (className.includes("cards")) {
        const newChildren = React.Children.map(children, (child) =>
          React.cloneElement(child, { "data-for": dataFor })
        );
        return React.createElement(type, { children: newChildren, className, ...other, key: i });
      } else {
        return React.createElement(type, { ...props, key: i });
      }
    });
  }

  return (
    <div
      role="tabpanel"
      hidden={currentTab !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {currentTab === index && <Box sx={{ p: 3 }}>{renderedChildren ?? elements}</Box>}
    </div>
  );
}
