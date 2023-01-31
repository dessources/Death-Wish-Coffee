import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
export default function CarouselLightningIcon({ type, ...props }) {
  const style =
    type === "prev"
      ? { transform: "rotateX(0) rotateY(180deg) translateY(100%) !important" }
      : { transform: "translateY(100%) !important" };
  return (
    <SvgIcon
      aria-hidden="true"
      data-icon="chevron-right"
      data-prefix="fas"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 22.607"
      sx={style}
      {...props}
    >
      <path
        fill="currentColor"
        d="M39.47 76.911c-.384 2.629-.231 16.962-.231 16.962l19.747-8.068 1 13.113L89.209 78l-22.461 6.023-2.232-7.712z"
        transform="translate(-39.209 -76.311)"
      ></path>
    </SvgIcon>
  );
}
