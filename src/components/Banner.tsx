import React, { useState } from 'react';
import CoinsCurrencyIcon from './CoinsCurrencyIcon';

const Banner: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleClose = (): void => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-3 sm:p-4 relative shadow-lg transition-all duration-300 ease-in-out min-h-16 sm:min-h-20 flex flex-col sm:flex-row sm:items-center justify-between animate-slide-down hover:-translate-y-0.5 hover:shadow-xl gap-3 sm:gap-0">
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 flex-1 min-w-0 text-center sm:text-left">
        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white bg-opacity-10 rounded-xl transition-all duration-300 ease-in-out hover:bg-opacity-20 hover:scale-105">
          <CoinsCurrencyIcon 
            className="w-7 h-7 sm:w-8 sm:h-8 brightness-0 invert transition-all duration-300 ease-in-out hover:rotate-6" 
          />
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-base sm:text-lg font-bold mb-1 transition-all duration-300 ease-in-out hover:translate-x-1">
            Special Offer!
          </h2>
          <p className="text-xs sm:text-sm opacity-90 mb-2 leading-relaxed transition-all duration-300 ease-in-out hover:opacity-100">
            Get 50% off on all premium features. Limited time offer!
          </p>
          <a 
            href="https://finom.co" 
            className="inline-flex items-center gap-1.5 text-white no-underline font-semibold text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 bg-white bg-opacity-10 rounded-full border border-white border-opacity-20 transition-all duration-300 ease-in-out backdrop-blur-sm hover:bg-opacity-20 hover:border-opacity-40 hover:-translate-y-0.5 hover:shadow-lg justify-center sm:justify-start"
            target="_blank" 
            rel="noopener noreferrer"
          >
            More information
            <svg 
              className="w-3 h-3 sm:w-4 sm:h-4 transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-6" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M12 22.748C6.06294 22.748 1.25 17.9351 1.25 11.998C1.25 6.06099 6.06294 1.24805 12 1.24805C17.9371 1.24805 22.75 6.06099 22.75 11.998C22.75 17.9351 17.9371 22.748 12 22.748ZM16.48 9.37561C16.9645 9.11062 17.1425 8.50298 16.8775 8.01843C16.6125 7.53387 16.0049 7.35587 15.5204 7.62087C13.6917 8.62091 12.1796 10.5509 11.1629 12.1076C10.7872 12.683 10.4662 13.2277 10.2094 13.6891C9.96984 13.4567 9.73258 13.255 9.52038 13.0872C9.2427 12.8677 8.99282 12.6945 8.81063 12.5752L8.49559 12.3795C8.01585 12.1059 7.40513 12.273 7.13152 12.7528C6.85797 13.2324 7.02493 13.8429 7.50442 14.1167L7.71471 14.2482C7.85752 14.3417 8.05764 14.4803 8.27997 14.6561C8.73753 15.0178 9.23126 15.492 9.54198 16.0115C9.73267 16.3303 10.0844 16.5171 10.4553 16.4967C10.8261 16.4762 11.1551 16.2516 11.3096 15.9139L11.4079 15.7085C11.4756 15.5701 11.577 15.3677 11.709 15.1184C11.9735 14.6187 12.3581 13.9352 12.8374 13.2012C13.8208 11.6955 15.1086 10.1255 16.48 9.37561Z" 
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>
      <button 
        className="absolute top-2 right-2 sm:relative sm:top-auto sm:right-auto bg-white bg-opacity-10 border-none rounded-full w-7 h-7 sm:w-10 sm:h-10 flex items-center justify-center cursor-pointer text-white transition-all duration-300 ease-in-out flex-shrink-0 backdrop-blur-sm hover:bg-opacity-20 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
        onClick={handleClose}
        aria-label="Close banner"
      >
        <svg 
          className="w-4 h-4 sm:w-6 sm:h-6 transition-all duration-300 ease-in-out hover:rotate-90" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M13.4118 12L17.7071 7.70463C18.0976 7.31414 18.0976 6.68335 17.7071 6.29287C17.3166 5.90238 16.6859 5.90238 16.2954 6.29287L12 10.5882L7.70464 6.29287C7.31415 5.90238 6.68335 5.90238 6.29287 6.29287C5.90238 6.68335 5.90238 7.31414 6.29287 7.70463L10.5882 12L6.29287 16.2954C5.90238 16.6859 5.90238 17.3166 6.29287 17.7071C6.68335 18.0976 7.31415 18.0976 7.70464 17.7071L12 13.4118L16.2954 17.7071C16.6859 18.0976 17.3166 18.0976 17.7071 17.7071C18.0976 17.3166 18.0976 16.6859 17.7071 16.2954L13.4118 12Z" 
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
};

export default Banner;
