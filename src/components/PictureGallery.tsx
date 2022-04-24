import React, { FC, useState } from "react";
import Modal from "./Modal";

interface PictureGalleryProps {
  pictures: string[];
}

let PictureGallery: FC<PictureGalleryProps> = ({ pictures }) => {
  let [modal, setModal] = useState(<div />);

  let a = pictures.map((each, id) => {
    return (
      <img
        key={id}
        className="picture"
        src={each}
        onClick={() =>
          setModal(<Modal src={each} reset={() => setModal(<div />)} />)
        }
      />
    );
  });

  return (
    <>
      {modal}
      <div className="gallery">{a}</div>
    </>
  );
};

export default PictureGallery;
