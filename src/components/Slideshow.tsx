import React, { FC, useEffect, useState } from "react";

interface slideshowProps {
  slides: string[];
  time: number;
}

let Slideshow: FC<slideshowProps> = ({ slides, time }) => {
  let [indexA, setIndexA] = useState(0);
  let [indexB, setIndexB] = useState(0);
  let [tracker, setTracker] = useState(true);
  let max = slides.length;

  useEffect(() => {
    new Promise((r) => setTimeout(r, time)).then((r) => cycleImage());
  });

  function cycleImage() {
    if (tracker) {
      setIndexA((indexB + 1) % max);
    } else {
      setIndexB((indexA + 1) % max);
    }
    setTracker(!tracker);
  }

  return (
    <>
      <img className={"slide slide-" + tracker} src={slides[indexA]} />
      <img className={"slide slide-" + !tracker} src={slides[indexB]} />
    </>
  );
};

export default Slideshow;
