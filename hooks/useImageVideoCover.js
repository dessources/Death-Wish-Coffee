import React from "react";
export default function useImageVideoCover(videoUrl, image) {
  let imageProps = { src: image };
  let videoProps = {};
  let containerProps = {};
  if (videoUrl) {
    const videoRef = React.useRef();
    const imageRef = React.useRef();
    const handleMouseEnter = (e) => {
      videoRef.current.style.zIndex = 1;
      videoRef.current.play();
      imageRef.current.style.opacity = 0;
    };
    const handleMouseLeave = (e) => {
      imageRef.current.style.opacity = 1;
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    };
    const handleVideoEnd = (e) => {
      videoRef.current.style.zIndex = -1;
      imageRef.current.style.opacity = 1;
    };

    imageProps = {
      ...imageProps,
      ref: imageRef,
    };
    videoProps = {
      src: videoUrl,
      ref: videoRef,
      onEnded: handleVideoEnd,
    };
    containerProps = {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    };
  }

  return {
    imageProps,
    videoProps,
    containerProps,
  };
}
