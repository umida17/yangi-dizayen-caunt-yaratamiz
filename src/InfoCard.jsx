

import React from 'react';

const InfoCard = ({ title, description }) => {
  return (
    <div className="panel">
      <h3>{title}</h3>
      <p style={{ color: '#666', textAlign: 'center' }}>{description}</p>
    </div>
  );
};

export default InfoCard;