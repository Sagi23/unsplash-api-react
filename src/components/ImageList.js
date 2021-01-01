import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const images = props.images.map((i) => {
    return <ImageCard key={i.id} i={i} />;
  });
  return <div className="ImageList">{images}</div>;
};

export default ImageList;
