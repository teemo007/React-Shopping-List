import React from "react";

const Footer = ({ items }) => {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Number(((numPacked / numItems) * 100).toFixed(2))
    ? Number( (numPacked / numItems * 100).toFixed(2))
    : 0;
  return (
    <div className="footerWrapper">
      {percentage === 100.00
        ? "Shopping Done"
        : `Total Item: ${numItems} ---- Completed Item: ${numPacked} ---- ${percentage}% Completed`}
    </div>
  );
};

export default Footer;
