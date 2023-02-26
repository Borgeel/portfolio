import React, { useEffect, useState } from "react";

const NavigationDots = () => {
  const [active, setActive] = useState();
  const [select, setSelect] = useState();

  useEffect(() => {
    if (select) setActive(() => window.location.hash);
  }, [active, select]);

  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "contact"].map((item, index) => {
        return !active ? (
          <a
            href={`#${item}`}
            key={item + index}
            className="app__navigation-dot"
            onClick={(e) => setSelect(e.target)}
            style={index === 0 ? { backgroundColor: "#313BAC" } : {}}
          />
        ) : (
          <a
            href={`#${item}`}
            key={item + index}
            className="app__navigation-dot"
            onClick={(e) => setSelect(e.target)}
            style={active === `#${item}` ? { backgroundColor: "#313BAC" } : {}}
          />
        );
      })}
    </div>
  );
};

export default NavigationDots;
