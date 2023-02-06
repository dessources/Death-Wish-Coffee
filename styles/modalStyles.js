const modalStyles = {
  position: "absolute",
  top: "5.5rem",
  outline: "none",
  width: "100%",
  maxWidth: 450,
  bgcolor: "#201e1d",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  "&::before": {
    content: `""`,
    borderStyle: "solid",
    borderWidth: "10px 15px 10px 0",
    borderColor: "transparent #201e1d transparent transparent",
    position: "absolute",
    right: "31px",
    top: "-17px",
    transform: "rotate(90deg)",
  },
};

export default modalStyles;
