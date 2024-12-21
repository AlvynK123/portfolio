import Image from "next/image";

const DevImg = ({containerStyles, imgSrc}) => {
  return (
    <div className={`${containerStyles} relative`}>
      <svg 
        width="509" 
        height="462" 
        viewBox="0 0 509 462" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="absolute inset-0 z-20 pointer-events-none"
      >
        <defs>
          <clipPath id="blob-clip">
            <path 
              d="M430.684 91.8476C485.587 148.958 523.332 231.872 503.773 294.831C483.871 357.79 406.664 400.451 331.516 429.351C256.711 458.25 183.965 473.388 128.376 448.617C72.4443 423.846 32.983 358.822 13.0808 285.198C-6.47826 211.917 -7.16455 130.036 32.2967 76.3658C72.1011 22.6955 151.71 -2.76337 227.544 0.332983C303.722 3.08531 375.781 34.7369 430.684 91.8476Z"
            />
          </clipPath>
        </defs>
      </svg>
      <Image 
        src={imgSrc} 
        fill 
        priority 
        alt='' 
        className="absolute inset-0 z-10 object-cover"
        style={{ 
          clipPath: 'url(#blob-clip)',
          WebkitClipPath: 'url(#blob-clip)'
        }}
      />
    </div>
  );
};

export default DevImg;