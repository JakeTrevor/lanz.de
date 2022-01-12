import React, { FC, useState } from "react";
import Modal from "./Modal";

interface PictureGalleryProps {
  pictures: string[];
}

let PictureGallery: FC<PictureGalleryProps> = ({ pictures }) => {
  let [modal, setModal] = useState(<div />);
  return (
    <>
      {modal}
      <div className="gallery">
        {pictures.map((each) => {
          return (
            <img
              className="picture"
              src={each}
              onClick={() =>
                setModal(<Modal src={each} reset={() => setModal(<div />)} />)
              }
            />
          );
        })}
      </div>
    </>
  );
};

export default PictureGallery;
