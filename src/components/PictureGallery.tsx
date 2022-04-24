import React, { FC, useState } from "react";
import Modal from "./Modal";

interface PictureGalleryProps {
  pictures: photoDisplayData[];
}

let PictureGallery: FC<PictureGalleryProps> = ({ pictures }) => {
  let [modal, setModal] = useState(<div />);

  let a = pictures.map((each, id) => {
    return (
      <img
        key={id}
        className="picture"
        src={each.href}
        onClick={() =>
          setModal(
            <Modal
              src={each.href}
              caption={each.caption}
              reset={() => setModal(<div />)}
            />
          )
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
