const filterRoot = {
  backgroundColor: "transparent",
  margin: "0 !important",
  "& *": {
    fontFamily: "FenomenSans",
    color: "white",
  },
};

const filterSummary = {
  paddingLeft: 0,
  borderBottom: "1px solid #dedbd9",
  "& div": {
    margin: "0px  !important",
  },
  "& span:nth-child(2)": {
    fontSize: "22px",
    transform: "none !important",
    color: "white !important",
  },
  "& p": {
    fontSize: "1.4rem",
    fontFamily: "FenomenSans",
    margin: "0.5rem 0",
    textTransform: "capitalize",
  },
};

const filterDetails = {
  padding: 0,
  paddingTop: "1rem",
  "& div": {
    display: "flex",
    justifyContent: "flex-start",
    height: "4rem",
    flexWrap: "wrap",
  },
  "& button": {
    fontFamily: "FenomenSans-Book",
    fontSize: "1.1rem",
    fontWeight: "700",
    textTransform: "uppercase",
    padding: "0.5rem",
    color: " black",
    marginRight: "0.5rem",
    width: "30%",
    minWidth: "5rem",
    background: "#898e8e",
    border: "1px solid transparent",
    cursor: "pointer",
  },
  "& button:hover,& button[data-selected='true']": {
    borderColor: "#e12727",
    background: "#555858",
  },
  "& button[data-selected='false']": {
    borderColor: "transparent",
    background: "#898e8e",
  },
};
export { filterRoot, filterSummary, filterDetails };
