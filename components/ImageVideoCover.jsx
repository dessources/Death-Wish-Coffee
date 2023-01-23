import React from "react";
//styles
import { coverImage } from "../styles/Shop.module.css";
export default function ImageVideoCover({ videoUrl, main_image }) {
  const handleMouseEnter = (e) => {
    e.target.play();
  };
  const handleMouseLeave = (e) => {
    e.target.currentTime = 0;
    e.target.pause();
  };
  return (
    <div className={coverImage}>
      {videoUrl && (
        <video src={videoUrl} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></video>
      )}
      <img src={main_image?.data?.attributes?.formats?.small?.url} alt="" />
    </div>
  );
}
