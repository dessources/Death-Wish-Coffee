import React from "react";
import fullStar from "../public/images/star-regular.svg";
import emptyStar from "../public/images/empty-star.svg";
import halfStar from "../public/images/half-star.svg";
import { useRouter } from "next/router";
import internal from "stream";
// import
export default function RatingStars({ rating }) {
  if (!rating) return "";
  let integerRating = Math.floor(rating);
  const stars = [];

  //full stars
  for (let i = 0; i < integerRating; i++) {
    stars.push(<img key={i} src={fullStar.src} alt="" />);
  }
  //half star
  if (integerRating !== rating) {
    stars.push(<img key={integerRating} src={halfStar.src} alt="" />);
  }
  //empty stars
  for (let i = 0; i < 5 - Math.round(rating); i++) {
    stars.push(<img key={integerRating + 1 + i} src={emptyStar.src} alt="" />);
  }

  return <span>{stars.map((star) => star)}</span>;
}
