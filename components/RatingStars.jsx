import React from "react";
import Star from "@mui/icons-material/Star";
import HalfStar from "@mui/icons-material/StarHalf";
import EmptyStar from "@mui/icons-material/StarOutline";

// import
export default function RatingStars({ rating }) {
  if (!rating) return "";
  let integerRating = Math.floor(rating);
  const stars = [];

  //full stars
  for (let i = 0; i < integerRating; i++) {
    // stars.push(<img key={i} src={fullStar.src} alt="" />);
    stars.push(<Star key={i} />);
  }
  //half star
  if (integerRating !== rating) {
    // stars.push(<img key={integerRating} src={halfStar.src} alt="" />);
    stars.push(<HalfStar key={integerRating} />);
  }
  //empty stars
  for (let i = 0; i < 5 - Math.round(rating); i++) {
    // stars.push(<img key={integerRating + 1 + i} src={emptyStar.src} alt="" />);
    stars.push(<EmptyStar key={integerRating + 1 + i} />);
  }

  return <span>{stars.map((star) => star)}</span>;
}
