import React from "react";
//styles
import { coverImage } from "../styles/Shop.module.css";
import useImageVideoCover from "../hooks/useImageVideoCover";

export default function ImageVideoCover({ videoUrl, main_image }) {
  const { imageProps, videoProps, containerProps } = useImageVideoCover(videoUrl, main_image);
  return (
    <div className={coverImage} {...containerProps}>
      {videoUrl ? <video muted {...videoProps}></video> : ""}
      <img {...imageProps} alt="" />
    </div>
  );
}
