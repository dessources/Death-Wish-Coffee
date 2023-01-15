import React from "react";
import fullStar from "../public/images/star-regular.svg";
import emptyStar from "../public/images/empty-star.svg";
import halfStar from "../public/images/half-star.svg";
import { useRouter } from "next/router";
// import
export default function RatingStars({ rating }) {
  if (!rating) return "";
  const stars = [];

  //full stars
  for (let i = 0; i < Math.floor(rating); i++) {
    stars.push(<img src={fullStar.src} alt="" />);
  }
  //half star
  if (Math.floor(rating) !== rating) {
    stars.push(<img src={halfStar.src} alt="" />);
  }
  //empty stars
  for (let i = 0; i < 5 - Math.round(rating); i++) {
    stars.push(<img src={emptyStar.src} alt="" />);
  }

  return <span>{stars.map((star) => star)}</span>;
}
