import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Add from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

export default function ProductFilters({ className, onfilterChange }) {
  const handleClick = (filter, value) => (e) => {
    // si le bouton est selectioné (attribut data-selected='true')
    // on le deselectionne (attribut data-selected='false') et vice-versa
    // et du coup on assigne la valeur de data-selected a la constante selected
    const selected = (e.target.dataset.selected = e.target.dataset.selected === "true" ? false : true);

    onfilterChange({ filter, value, selected });
  };

  return (
    <div className={className}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Roast</Typography>
        </AccordionSummary>
        <AccordionDetails>
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
      <Accordion>
        <AccordionSummary expandIcon={<Add />} aria-controls="panel2a-content" id="panel2a-header">
          <Typography>Style</Typography>
        </AccordionSummary>
        <AccordionDetails>
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
      <Accordion>
        <AccordionSummary expandIcon={<Add />} aria-controls="panel3a-content" id="panel3a-header">
          <Typography>Format</Typography>
        </AccordionSummary>
        <AccordionDetails>
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
