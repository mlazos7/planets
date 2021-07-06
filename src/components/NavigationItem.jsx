import React from "react";
import { RiArrowRightSLine } from 'react-icons/ri';

const NavigationItem = ({ color, name, to }) => {

  const colorStyle = {
      'background-color': color,
  }
  return (
    <div className="nav-item">
      <div className="circle" style={colorStyle}></div>
      <div className="name"><p>{name}</p></div>
      <div><RiArrowRightSLine color="white"/></div>
    </div>
  );
};

export default NavigationItem;
