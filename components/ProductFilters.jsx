import React from "react";
//components
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
//styles
import { filtersSection, mobileActions, show } from "../styles/Shop.module.css";
import { filterRoot, filterSummary, filterDetails } from "../styles/FilterStyles.js";

export default function ProductFilters({ onFilterChange, filtersVisible, filters }) {
  const handleClick = (filter, value) => (e) => {
    const selected = e.target.dataset.selected === "true" ? false : true;
    onFilterChange({ filter, value, selected });
  };

  const [expanded, setExpanded] = React.useState({});
  const handleChange = (panel) => {
    if (expanded[panel]) {
      setExpanded({ ...expanded, [panel]: false });
    } else {
      setExpanded({ ...expanded, [panel]: true });
    }
  };

  return (
    <div className={`${filtersSection} ${filtersVisible ? show : ""}`}>
      <div>
        {filters &&
          Object.keys(filters).map((filterKey, i) => {
            if (filterKey !== "active") {
              return (
                <Accordion sx={filterRoot} onChange={() => handleChange(`panel${i}`)} key={i}>
                  <AccordionSummary
                    sx={filterSummary}
                    expandIcon={expanded[`panel${i}`] ? "–" : "+"}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{filterKey}</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={filterDetails}>
                    <div>
                      {Object.keys(filters[filterKey]).map((filterNameKey, i) => {
                        if (filterNameKey !== "active") {
                          return (
                            <button
                              key={i}
                              data-selected={filters[filterKey][filterNameKey] ? true : false}
                              onClick={handleClick(filterKey, filterNameKey)}
                            >
                              {filterNameKey}
                            </button>
                          );
                        }
                      })}
                    </div>
                  </AccordionDetails>
                </Accordion>
              );
            }
          })}

        <div className={mobileActions}>
          {/* <button onClick={()=>}>APPLY </button> */}
          <button onClick={() => onFilterChange("reset")}>CLEAR </button>
        </div>
      </div>
    </div>
  );
}
