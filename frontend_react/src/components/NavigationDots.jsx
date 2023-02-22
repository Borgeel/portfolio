import React from "react";

const NavigationDots = () => {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "contact"].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
        />
      ))}
    </div>
  );
};

export default NavigationDots;
