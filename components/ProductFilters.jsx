import React from "react";
import Toggle from "../components/Toogle";

export default function ProductFilters(props) {
  return (
    <div {...props}>
      <Toggle title="Roast">
        <div className="options">
          <button>Dark</button> <button>Medium</button>
        </div>
      </Toggle>
      <Toggle title="Style">
        <div className="options">
          <button>Ground</button> <button>Whole Bean</button>
        </div>
      </Toggle>
      <Toggle title="Format">
        <div className="options">
          <button>Single Serve</button> <button>Canned</button> <button>Bagged</button>
        </div>
      </Toggle>
    </div>
  );
}
