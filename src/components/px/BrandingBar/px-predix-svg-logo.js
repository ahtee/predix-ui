import React from 'react';
import PropTypes from 'prop-types';

const Component = ({ height }) => (
  <svg height={height} viewBox="0 0 82.13 13.24" className="px-predix-svg-logo">
    <polygon className="cls-1" points="31.08 0 31.08 13.24 42.44 13.24 42.44 10.88 33.92 10.88 33.92 7.79 41.02 7.79 41.02 5.43 33.92 5.43 33.92 2.37 42.44 2.37 42.44 0 31.08 0" />
    <path className="cls-1" d="M49.3,10.84h2.17a4.93,4.93,0,0,0,3.64-1.32,4.12,4.12,0,0,0,1.11-3c-0.06-2-1.34-4.12-4.75-4.12H49.3v8.48Zm-2.84,2.4V0h5a8,8,0,0,1,5.72,2,6.4,6.4,0,0,1,1.87,4.48,6.35,6.35,0,0,1-1.78,4.62,7.91,7.91,0,0,1-5.81,2.11h-5Z" />
    <polygon className="cls-1 " points="62.57 13.24 65.41 13.24 65.41 0 62.57 0 62.57 6.57 62.57 13.24" />
    <path className="cls-1 " d="M6.2,0H0V13.24H2.86V9.09H6.2c3.83,0,5.57-2.41,5.57-4.67S10,0,6.2,0Zm0,6.72H2.86V2.37H6.2c1.88,0,2.74.92,2.74,2.05S8.08,6.72,6.2,6.72Z" />
    <path className="cls-1 " d="M27.09,13.24L23.56,8.81a4.57,4.57,0,0,0,3.5-4.39C27.06,2.16,25.32,0,21.49,0h-6.2V13.24h2.86V9.09H20.6l3.16,4.16h3.33ZM18.15,2.37h3.34c1.88,0,2.74.92,2.74,2.05s-0.86,2.3-2.74,2.3H18.15V2.37Z" />
    <polygon className="cls-1 " points="77.38 6.14 82.13 0 78.79 0 75.34 4.56 71.9 0 68.57 0 73.31 6.14 77.38 6.14" />
    <polygon className="cls-2 " points="73.31 7.08 68.55 13.24 71.88 13.24 75.34 8.67 78.8 13.24 82.13 13.24 77.37 7.08 73.31 7.08" />
    <style>
      {`
.cls-1 { fill: #2886af; }.cls-2 { fill: #3ab4d4; }
`}
    </style>
  </svg>
);

Component.defaultProps = {
  height: 10
};

Component.propTypes = {
  height: PropTypes.number
};

Component.displayName = 'PredixSvgLogo';

export default Component;
