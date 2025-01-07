import React from "react";

const HamburgerButton = () => {
  const [isActive, setIsActive] = React.useState(false);
  const handleOnClick = () => {
    setIsActive(!isActive);
  };
  return (
    <button
      id={isActive ? "hamburger-active" : "hamburger"}
      name="hamburger"
      type="button"
      className=" right-4 lg:hidden"
      onClick={handleOnClick}
    >
      <span className="hamburger-line origin-bottom-left"></span>
      <span className="hamburger-line"></span>
      <span className="hamburger-line origin-bottom-left"></span>
    </button>
  );
};

export default HamburgerButton;
