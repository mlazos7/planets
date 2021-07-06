import React from "react";
import NavigationItem from "./NavigationItem";
import Planets from "./../data.json";

const Navigation = () => {
  const planets = Planets.map((item) => {
    return <NavigationItem color={item.color} name={item.name} to="/mercury" />;
  });

  return <div className="nav-menu">{planets}</div>;
};

export default Navigation;
