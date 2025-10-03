import React from 'react';

interface CoinsCurrencyIconProps {
  className?: string;
  width?: number;
  height?: number;
}

const CoinsCurrencyIcon: React.FC<CoinsCurrencyIconProps> = ({ 
  className = "w-8 h-8", 
  width = 32, 
  height = 32 
}) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Coin 1 */}
      <circle 
        cx="12" 
        cy="12" 
        r="8" 
        fill="currentColor" 
        opacity="0.8"
      />
      <circle 
        cx="12" 
        cy="12" 
        r="6" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1"
        opacity="0.6"
      />
      
      {/* Coin 2 */}
      <circle 
        cx="20" 
        cy="20" 
        r="8" 
        fill="currentColor" 
        opacity="0.6"
      />
      <circle 
        cx="20" 
        cy="20" 
        r="6" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1"
        opacity="0.4"
      />
      
      {/* Dollar sign */}
      <path 
        d="M12 8v16M8 12h8" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round"
        opacity="0.8"
      />
      
      {/* Small accent coins */}
      <circle 
        cx="6" 
        cy="6" 
        r="3" 
        fill="currentColor" 
        opacity="0.4"
      />
      <circle 
        cx="26" 
        cy="6" 
        r="3" 
        fill="currentColor" 
        opacity="0.4"
      />
    </svg>
  );
};

export default CoinsCurrencyIcon;
