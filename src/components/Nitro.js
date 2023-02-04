import React, { useState } from 'react';
const Nitro = () => {
  const [feature, setFeature] = useState({
    image: 'https://via.placeholder.com/200x200',
    badge: 'New',
  });

  return (
    <div onClick={() => setFeature({
      image: 'https://via.placeholder.com/200x200',
      badge: 'New',
    })}> <span className="text-2xl mr-2">
    <i className="fas fa-gift"></i>
  </span>
      <img src={feature.image} alt="Nitro Feature" />
      <p>{feature.badge}</p>
    </div>
  );
};

export default Nitro;