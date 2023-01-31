import React from "react";
//styles
import { coverImage } from "../styles/Shop.module.css";
import useImageVideoCover from "../hooks/useImageVideoCover";

export default function ImageVideoCover({ videoUrl, image }) {
  const { imageProps, videoProps, containerProps } = useImageVideoCover(videoUrl, image);

  return (
    <div className={coverImage} {...containerProps}>
      {videoUrl ? <video muted {...videoProps}></video> : ""}
      <img {...imageProps} alt="" />
    </div>
  );
}
