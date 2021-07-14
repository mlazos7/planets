import React from "react";
import NavigationItem from "./NavigationItem";
import Planets from "./../data.json";

const Navigation = ({show}) => {

  const showNavigationMenu = {
    display: show ? 'flex' : 'none'
  }

  const planets = Planets.map((item) => {
    return <NavigationItem key={item.name} color={item.color} name={item.name} to="/mercury" />;
  });

  return <div className="nav-menu" style={showNavigationMenu}>{planets}</div>;
};

export default Navigation;
