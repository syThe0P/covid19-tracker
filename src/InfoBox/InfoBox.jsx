import React from 'react';
import './InfoBox.css';

const InfoBox = ({ title, value, color, textColor }) => {
  return (
    <div className="box-container">
      <div className="box" style={{ backgroundColor: color, color: textColor }}>
        <h2 className="title">{title}</h2>
        <h3 className="subtitle">{value}</h3>
      </div>
    </div>
  );
};

export default InfoBox;
