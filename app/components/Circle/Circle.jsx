// components/CircularMap.js
import React from 'react';

const Circle = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative w-64 h-64">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="absolute w-16 h-16 bg-gray-400 rounded-full transform rotate-45"
            style={{ transform: `rotate(${45 * index}deg)` }}
          >
            <img
              src={`https://placekitten.com/200/200?image=${index + 1}`}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Circle;
