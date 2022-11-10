import React from "react";

export default function Image(props) {
  const { width, height, alt = "", src } = props;
  return (
    <img
      src={src}
      alt={alt}
      className="drop-shadow-2xl rounded-md object-cover"
      height={height}
      width={width}
    />
  );
}
