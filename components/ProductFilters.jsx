import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import {
  filtersSection,
  filter,
  filterSummary,
  filterSummaryRoot,
  filterDetails,
  filterExpanded,
  mobileActions,
  show,
} from "../styles/Shop.module.css";

export default function ProductFilters({ onFilterChange, filtersVisible, filters }) {
  const handleClick = (filter, value) => (e) => {
    const selected = e.target.dataset.selected === "true" ? false : true;
    onFilterChange({ filter, value, selected });
  };

  const [expanded, setExpanded] = React.useState({});
  const handleChange = (panel) => {
    console.log(expanded);
    if (expanded[panel]) {
      setExpanded({ ...expanded, [panel]: "" });
    } else {
      setExpanded({ ...expanded, [panel]: filterExpanded });
    }
  };

  return (
    <div className={`${filtersSection} ${filtersVisible ? show : ""}`}>
      <div>
        {filters &&
          Object.keys(filters).map((filterKey, i) => {
            if (filterKey !== "active") {
              return (
                <Accordion
                  className={`${filter} ${expanded[`panel${i}`]}`}
                  onChange={() => handleChange(`panel${i}`)}
                  key={i}
                >
                  <AccordionSummary
                    className={filterSummaryRoot}
                    expandIcon={expanded[`panel${i}`] ? "–" : "+"}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={filterSummary}>{filterKey}</Typography>
                  </AccordionSummary>
                  <AccordionDetails className={filterDetails}>
                    <div>
                      {Object.keys(filters[filterKey]).map((filterNameKey, i) => {
                        if (filterNameKey !== "active") {
                          return (
                            <button
                              key={i}
                              data-selected={filterKey[filterNameKey] ? true : false}
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
