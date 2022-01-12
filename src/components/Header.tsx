import React, { FC, useRef, useState } from "react";
let Header: FC = () => {
  let ref = useRef(null);
  let [open, setOpen] = useState(false);
  function toggle() {
    setOpen(!open);
    if (open) {
      setHeight(0);
    } else {
      calcHeight(ref.current);
    }
  }

  const [height, setHeight] = useState(0);
  function calcHeight(el: Element) {
    let height = el.scrollHeight;
    setHeight(height);
  }

  return (
    <header className="header">
      <button className="hamburger link" onClick={toggle}>
        ☰
      </button>
      <div className="links-container" style={{ height: height }} ref={ref}>
        <nav className={"links " + open}>
          <a href="/#Willkommen" className="link" onClick={toggle}>
            Willkommen
          </a>
          <a href="/#Aktuelles" className="link" onClick={toggle}>
            Aktuelles
          </a>
          <a href="/#Fotoprojekte" className="link" onClick={toggle}>
            Fotoprojekte
          </a>
          <a href="/#Lanz-Live" className="link" onClick={toggle}>
            Lanz Live
          </a>
          <a href="/#Kontakt" className="link" onClick={toggle}>
            Kontakt
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
