import React, { FC, useEffect, useState } from "react";

interface modalProps {
  src: string;
  caption?: string;
  reset: any;
}

let Modal: FC<modalProps> = ({ src, reset, caption }) => {
  let [invisible, setInvisible] = useState("invisible");
  let [fullscreen, setFullscreen] = useState(false);
  useEffect(() => {
    new Promise((r) => setTimeout(r, 1)).then((r) => setInvisible(""));
  }, []);

  function close() {
    setInvisible("invisible");
    new Promise((r) => setTimeout(r, 500)).then(reset);
  }

  return (
    <div className={"modal " + invisible}>
      <div className="modal-close" onClick={close}></div>
      <img
        src={src}
        className={fullscreen ? "modal-image-fullscreen" : "modal-image"}
        onClick={() => setFullscreen(!fullscreen)}
      />
      <p>caption goes here{caption}</p>
      <button onClick={close}>close</button>
    </div>
  );
};

export default Modal;
