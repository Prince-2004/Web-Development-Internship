// Button.jsx
import React from 'react';

const Button = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <button onClick={handleClick} className="bg-blue-500 text-white p-2 rounded">
      Click Me
    </button>
  );
};
export default Button;