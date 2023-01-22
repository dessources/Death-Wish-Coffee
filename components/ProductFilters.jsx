import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import {
  filter,
  filtersSection,
  filterSummary,
  filterSummaryRoot,
  filterDetails,
  filterExpanded,
} from "../styles/Shop.module.css";

export default function ProductFilters({ onfilterChange }) {
  const handleClick = (filter, value) => (e) => {
    // si le bouton est selectioné (attribut data-selected='true')
    // on le deselectionne (attribut data-selected='false') et vice-versa
    // et du coup on assigne la valeur de data-selected a la constante selected
    const selected = (e.target.dataset.selected = e.target.dataset.selected === "true" ? false : true);

    onfilterChange({ filter, value, selected });
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
    <div className={filtersSection}>
      <Accordion className={`${filter} ${expanded["panel1"]}`} onChange={() => handleChange("panel1")}>
        <AccordionSummary
          className={filterSummaryRoot}
          expandIcon={expanded["panel1"] ? "–" : "+"}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={filterSummary}>Roast</Typography>
        </AccordionSummary>
        <AccordionDetails className={filterDetails}>
          <div>
            <button data-selected={false} onClick={handleClick("roast", "dark")}>
              Dark
            </button>
            <button data-selected={false} onClick={handleClick("roast", "medium")}>
              Medium
            </button>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion className={`${filter} ${expanded["panel2"]}`} onChange={() => handleChange("panel2")}>
        <AccordionSummary
          className={filterSummaryRoot}
          expandIcon={expanded["panel2"] ? "–" : "+"}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={filterSummary}>Style</Typography>
        </AccordionSummary>
        <AccordionDetails className={filterDetails}>
          <div>
            <button data-selected={false} onClick={handleClick("styles", "ground")}>
              Ground
            </button>
            <button data-selected={false} onClick={handleClick("styles", "whole bean")}>
              Whole Bean
            </button>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion className={`${filter} ${expanded["panel3"]}`} onChange={() => handleChange("panel3")}>
        <AccordionSummary
          className={filterSummaryRoot}
          expandIcon={expanded["panel3"] ? "–" : "+"}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={filterSummary}>Format</Typography>
        </AccordionSummary>
        <AccordionDetails className={filterDetails}>
          <div>
            <button data-selected={false} onClick={handleClick("format", "single serve")}>
              Single Serve
            </button>
            <button onClick={handleClick("format", "canned")}>Canned</button>
            <button onClick={handleClick("format", "bagged")}>Bagged</button>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
