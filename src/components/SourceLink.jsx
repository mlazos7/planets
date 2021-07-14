import React from "react";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
export const SourceLink = ({ url }) => {
  return (
    <div className="link">
      <p>Source:</p>
      <a href={url}>Wikipedia</a>
      <FaExternalLinkSquareAlt className="fa-icon" />
    </div>
  );
};
