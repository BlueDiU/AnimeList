import React from 'react';

function Wave() {
  return (
    <div className="wave">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#e7008a"
          fill-opacity="0.1"
          d="M0,64L120,101.3C240,139,480,213,720,240C960,267,1200,245,1320,234.7L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Wave;
