import React from "react";
import c1 from "../img/c1.png";
import c2 from "../img/c2.png";
import c3 from "../img/c3.png";
import c4 from "../img/c4.png";
function Services() {
  return (
    <main className=" flex flex-col justify-center items-start md:items-center bg-slate-100 mt-12 p-10 w-full md:w-full">
      <div className=" md:block md:mr-96">
        <span className=" font-bold text-3xl ">Services We Offer</span>
        <br />
        <span className=" text-sm">
          Discover the digital possibilities for your brand with our
          comprehensive suite of services.
        </span>
      </div>
      <div className="svg flex flex-row justify-center items-center ">
        <svg
          className=" "
          width="20"
          height="15"
          viewBox="0 0 20 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.89 0.50293L0.690001 6.80193L0 7.50293L0.690001 8.20493L6.89 14.5039L8.315 13.1009L3.79 8.50293H20V6.50293H3.79L8.315 1.90593L6.889 0.50293H6.89Z"
            fill="#131313"
          />
        </svg>
        <svg
          className=" mt-3"
          width="80"
          height="50"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_1_15)">
            <rect x="26" y="12" width="48" height="48" rx="24" fill="white" />
            <rect
              x="27"
              y="13"
              width="46"
              height="46"
              rx="23"
              stroke="black"
              strokeWidth="2"
            />
            <g clipPath="url(#clip0_1_15)">
              <path
                d="M53.11 28.503L59.31 34.802L60 35.503L59.31 36.205L53.11 42.504L51.685 41.101L56.21 36.503H40V34.503H56.21L51.685 29.906L53.111 28.503H53.11Z"
                fill="#131313"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_1_15"
              x="0"
              y="0"
              width="100"
              height="100"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="4"
                operator="erode"
                in="SourceAlpha"
                result="effect1_dropShadow_1_15"
              />
              <feOffset dy="14" />
              <feGaussianBlur stdDeviation="15" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.808333 0 0 0 0 0.808333 0 0 0 0 0.808333 0 0 0 0.5 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_15"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1_15"
                result="shape"
              />
            </filter>
            <clipPath id="clip0_1_15">
              <rect
                width="20"
                height="15"
                fill="white"
                transform="translate(40 28.5)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="cards  flex flex-col md:flex-row md:justify-center   flex-wrap ">
        <div className="card1 mx-2  mb-3 flex flex-col justify-center items-center bg-green-100 border-solid border-4 border-black rounded-2xl    w-full  md:w-1/5  ">
          <div className="flex items-center space-x-2 p-2">
            <span className="rounded-full inline-block relative w-8 h-8 bg-black">
              <svg
                className="absolute top-1/2 left-4 transform -translate-x-1/2 -translate-y-1/2 z-10"
                width="10"
                height="19"
                viewBox="0 0 10 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.14165 15.725C8.92245 15.725 8.70326 15.829 8.57432 16.0109C7.83938 16.9726 6.66605 17.5964 5.36379 17.5964C3.15896 17.5964 1.36673 15.842 1.36673 13.6977V5.41929C1.36673 3.27497 3.17185 1.52052 5.36379 1.52052C6.70473 1.52052 7.89095 2.17031 8.6259 3.158C8.76773 3.33995 8.97403 3.45691 9.20611 3.45691H9.28348C9.8508 3.45691 10.1989 2.80711 9.87659 2.33926C8.92245 0.935705 7.29784 0 5.45404 0H5.29932C2.38534 0 0 2.32626 0 5.15937V13.8406C0 16.6737 2.38534 19 5.29932 19H5.45404C7.20759 19 8.75483 18.1683 9.72186 16.8817C10.0571 16.4138 9.73476 15.725 9.14165 15.725Z"
                  fill="white"
                />
              </svg>
              <svg
                className="absolute top-1/2 
                 left-5 transform -translate-x-1/2 -translate-y-1/2"
                width="6"
                height="9"
                viewBox="0 0 6 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 0.749999V8.25C6 8.66379 5.66379 9 5.25 9C4.83621 9 4.5 8.66379 4.5 8.25V5.81897C4.5 5.40517 4.16379 5.06897 3.75 5.06897H2.25C1.83621 5.06897 1.5 5.40517 1.5 5.81897V6.12931C1.5 6.5431 1.16379 6.87931 0.75 6.87931C0.336207 6.87931 0 6.5431 0 6.12931V2.57328C0 2.15948 0.336207 1.82328 0.75 1.82328C1.16379 1.82328 1.5 2.15948 1.5 2.57328V2.8319C1.5 3.24569 1.83621 3.5819 2.25 3.5819H3.76293C4.17672 3.5819 4.51293 3.24569 4.51293 2.8319V0.749999C4.51293 0.336206 4.84914 0 5.26293 0C5.66379 0.012931 6 0.336206 6 0.749999Z"
                  fill="white"
                />
              </svg>
            </span>
            <span className=" font-semibold  ">Join Development</span>
          </div>
          <hr className=" w-full font-bold border border-black " />

          <span className=" font-bold mb-10 mt-4">Blockchain Development </span>
          <img src={c1} className=" w-full h-fit md:w-5/6 md:h-4/6" />
          <hr className=" w-full font-bold border border-black block mb-6" />
          <span className=" h-8 text-black w-full flex flex-row items-center justify-end">
            <button className="w-24 border-2 border-black rounded-full flex items-center justify-center space-x-5 mb-5 mr-3">
              Explore
              <svg
                className=" block"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12.52"
                  cy="12.1935"
                  r="11.8566"
                  fill="url(#paint0_linear_1_116)"
                />
                <path
                  d="M14.1458 7.69617L18.2016 11.7428L18.653 12.1932L18.2016 12.6442L14.1458 16.6908L13.2136 15.7895L16.1737 12.8356H5.56982V11.5507H16.1737L13.2136 8.5975L14.1465 7.69617H14.1458Z"
                  fill="#1E1E23"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_116"
                    x1="24.3766"
                    y1="12.1935"
                    x2="0.663391"
                    y2="12.1935"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00FFA7" />
                    <stop offset="1" stopColor="#FFFF00" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          </span>
        </div>
        <div className="card2 mx-2  mb-3 flex flex-col justify-center items-center bg-cyan-100 border-solid border-4 border-black rounded-2xl    w-full  md:w-1/5  ">
          <div className="flex items-center space-x-2 p-2">
            <span className="rounded-full inline-block relative w-8 h-8 bg-black">
              <svg
                className="absolute top-1/2 left-4 transform -translate-x-1/2 -translate-y-1/2 z-10"
                width="10"
                height="19"
                viewBox="0 0 10 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.14165 15.725C8.92245 15.725 8.70326 15.829 8.57432 16.0109C7.83938 16.9726 6.66605 17.5964 5.36379 17.5964C3.15896 17.5964 1.36673 15.842 1.36673 13.6977V5.41929C1.36673 3.27497 3.17185 1.52052 5.36379 1.52052C6.70473 1.52052 7.89095 2.17031 8.6259 3.158C8.76773 3.33995 8.97403 3.45691 9.20611 3.45691H9.28348C9.8508 3.45691 10.1989 2.80711 9.87659 2.33926C8.92245 0.935705 7.29784 0 5.45404 0H5.29932C2.38534 0 0 2.32626 0 5.15937V13.8406C0 16.6737 2.38534 19 5.29932 19H5.45404C7.20759 19 8.75483 18.1683 9.72186 16.8817C10.0571 16.4138 9.73476 15.725 9.14165 15.725Z"
                  fill="white"
                />
              </svg>
              <svg
                className="absolute top-1/2 
                 left-5 transform -translate-x-1/2 -translate-y-1/2"
                width="6"
                height="9"
                viewBox="0 0 6 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 0.749999V8.25C6 8.66379 5.66379 9 5.25 9C4.83621 9 4.5 8.66379 4.5 8.25V5.81897C4.5 5.40517 4.16379 5.06897 3.75 5.06897H2.25C1.83621 5.06897 1.5 5.40517 1.5 5.81897V6.12931C1.5 6.5431 1.16379 6.87931 0.75 6.87931C0.336207 6.87931 0 6.5431 0 6.12931V2.57328C0 2.15948 0.336207 1.82328 0.75 1.82328C1.16379 1.82328 1.5 2.15948 1.5 2.57328V2.8319C1.5 3.24569 1.83621 3.5819 2.25 3.5819H3.76293C4.17672 3.5819 4.51293 3.24569 4.51293 2.8319V0.749999C4.51293 0.336206 4.84914 0 5.26293 0C5.66379 0.012931 6 0.336206 6 0.749999Z"
                  fill="white"
                />
              </svg>
            </span>
            <span className=" font-semibold  ">Join Development</span>
          </div>
          <hr className=" w-full font-bold border border-black " />

          <span className=" font-bold mb-10 mt-4">Blockchain Development </span>
          <img src={c2} className=" w-full h-fit md:w-5/6 md:h-4/6" />

          <hr className=" w-full font-bold border border-black block mb-6" />
          <span className=" h-8 text-black w-full flex flex-row items-center justify-end">
            <button className="w-24 border-2 border-black rounded-full flex items-center justify-center space-x-5 mb-5 mr-3">
              Explore
              <svg
                className=" block"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12.52"
                  cy="12.1935"
                  r="11.8566"
                  fill="url(#paint0_linear_1_116)"
                />
                <path
                  d="M14.1458 7.69617L18.2016 11.7428L18.653 12.1932L18.2016 12.6442L14.1458 16.6908L13.2136 15.7895L16.1737 12.8356H5.56982V11.5507H16.1737L13.2136 8.5975L14.1465 7.69617H14.1458Z"
                  fill="#1E1E23"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_116"
                    x1="24.3766"
                    y1="12.1935"
                    x2="0.663391"
                    y2="12.1935"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00FFA7" />
                    <stop offset="1" stopColor="#FFFF00" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          </span>
        </div>
        <div className="card3 mx-2  mb-3 flex flex-col justify-center items-center bg-red-100 border-solid border-4 border-black rounded-2xl    w-full  md:w-1/5  ">
          <div className="flex items-center space-x-2 p-2">
            <span className="rounded-full inline-block relative w-8 h-8 bg-black">
              <svg
                className="absolute top-1/2 left-4 transform -translate-x-1/2 -translate-y-1/2 z-10"
                width="10"
                height="19"
                viewBox="0 0 10 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.14165 15.725C8.92245 15.725 8.70326 15.829 8.57432 16.0109C7.83938 16.9726 6.66605 17.5964 5.36379 17.5964C3.15896 17.5964 1.36673 15.842 1.36673 13.6977V5.41929C1.36673 3.27497 3.17185 1.52052 5.36379 1.52052C6.70473 1.52052 7.89095 2.17031 8.6259 3.158C8.76773 3.33995 8.97403 3.45691 9.20611 3.45691H9.28348C9.8508 3.45691 10.1989 2.80711 9.87659 2.33926C8.92245 0.935705 7.29784 0 5.45404 0H5.29932C2.38534 0 0 2.32626 0 5.15937V13.8406C0 16.6737 2.38534 19 5.29932 19H5.45404C7.20759 19 8.75483 18.1683 9.72186 16.8817C10.0571 16.4138 9.73476 15.725 9.14165 15.725Z"
                  fill="white"
                />
              </svg>
              <svg
                className="absolute top-1/2 
                 left-5 transform -translate-x-1/2 -translate-y-1/2"
                width="6"
                height="9"
                viewBox="0 0 6 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 0.749999V8.25C6 8.66379 5.66379 9 5.25 9C4.83621 9 4.5 8.66379 4.5 8.25V5.81897C4.5 5.40517 4.16379 5.06897 3.75 5.06897H2.25C1.83621 5.06897 1.5 5.40517 1.5 5.81897V6.12931C1.5 6.5431 1.16379 6.87931 0.75 6.87931C0.336207 6.87931 0 6.5431 0 6.12931V2.57328C0 2.15948 0.336207 1.82328 0.75 1.82328C1.16379 1.82328 1.5 2.15948 1.5 2.57328V2.8319C1.5 3.24569 1.83621 3.5819 2.25 3.5819H3.76293C4.17672 3.5819 4.51293 3.24569 4.51293 2.8319V0.749999C4.51293 0.336206 4.84914 0 5.26293 0C5.66379 0.012931 6 0.336206 6 0.749999Z"
                  fill="white"
                />
              </svg>
            </span>
            <span className=" font-semibold  ">Join Development</span>
          </div>
          <hr className=" w-full font-bold border border-black " />

          <span className=" font-bold mb-10 mt-4">Security AAS </span>
          <img src={c3} className=" w-full h-fit md:w-5/6 md:h-4/6" />
          <hr className=" w-full font-bold border border-black block mb-6" />
          <span className=" h-8 text-black w-full flex flex-row items-center justify-end">
            <button className="w-24 border-2 border-black rounded-full flex items-center justify-center space-x-5 mb-5 mr-3">
              Explore
              <svg
                className=" block"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12.52"
                  cy="12.1935"
                  r="11.8566"
                  fill="url(#paint0_linear_1_116)"
                />
                <path
                  d="M14.1458 7.69617L18.2016 11.7428L18.653 12.1932L18.2016 12.6442L14.1458 16.6908L13.2136 15.7895L16.1737 12.8356H5.56982V11.5507H16.1737L13.2136 8.5975L14.1465 7.69617H14.1458Z"
                  fill="#1E1E23"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_116"
                    x1="24.3766"
                    y1="12.1935"
                    x2="0.663391"
                    y2="12.1935"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00FFA7" />
                    <stop offset="1" stopColor="#FFFF00" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          </span>
        </div>
        <div className="card4 mx-2  mb-3 flex flex-col justify-center items-center bg-indigo-100 border-solid border-4 border-black rounded-2xl    w-full  md:w-1/5  ">
          <div className="flex items-center space-x-2 p-2">
            <span className="rounded-full inline-block relative w-8 h-8 bg-black">
              <svg
                className="absolute top-1/2 left-4 transform -translate-x-1/2 -translate-y-1/2 z-10"
                width="10"
                height="19"
                viewBox="0 0 10 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.14165 15.725C8.92245 15.725 8.70326 15.829 8.57432 16.0109C7.83938 16.9726 6.66605 17.5964 5.36379 17.5964C3.15896 17.5964 1.36673 15.842 1.36673 13.6977V5.41929C1.36673 3.27497 3.17185 1.52052 5.36379 1.52052C6.70473 1.52052 7.89095 2.17031 8.6259 3.158C8.76773 3.33995 8.97403 3.45691 9.20611 3.45691H9.28348C9.8508 3.45691 10.1989 2.80711 9.87659 2.33926C8.92245 0.935705 7.29784 0 5.45404 0H5.29932C2.38534 0 0 2.32626 0 5.15937V13.8406C0 16.6737 2.38534 19 5.29932 19H5.45404C7.20759 19 8.75483 18.1683 9.72186 16.8817C10.0571 16.4138 9.73476 15.725 9.14165 15.725Z"
                  fill="white"
                />
              </svg>
              <svg
                className="absolute top-1/2 
                 left-5 transform -translate-x-1/2 -translate-y-1/2"
                width="6"
                height="9"
                viewBox="0 0 6 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 0.749999V8.25C6 8.66379 5.66379 9 5.25 9C4.83621 9 4.5 8.66379 4.5 8.25V5.81897C4.5 5.40517 4.16379 5.06897 3.75 5.06897H2.25C1.83621 5.06897 1.5 5.40517 1.5 5.81897V6.12931C1.5 6.5431 1.16379 6.87931 0.75 6.87931C0.336207 6.87931 0 6.5431 0 6.12931V2.57328C0 2.15948 0.336207 1.82328 0.75 1.82328C1.16379 1.82328 1.5 2.15948 1.5 2.57328V2.8319C1.5 3.24569 1.83621 3.5819 2.25 3.5819H3.76293C4.17672 3.5819 4.51293 3.24569 4.51293 2.8319V0.749999C4.51293 0.336206 4.84914 0 5.26293 0C5.66379 0.012931 6 0.336206 6 0.749999Z"
                  fill="white"
                />
              </svg>
            </span>
            <span className=" font-semibold  ">Join Development</span>
          </div>
          <hr className=" w-full font-bold border border-black " />

          <span className=" font-bold mb-10 mt-4">Graphic Motion</span>
          <img src={c4} className=" w-full h-2/3 md:w-5/6 md:h-4/6" />
          <hr className=" w-full font-bold border border-black block mb-6" />
          <span className=" h-8 text-black w-full flex flex-row items-center justify-end">
            <button className="w-24 border-2 border-black rounded-full flex items-center justify-center space-x-5 mb-5 mr-3">
              Explore
              <svg
                className=" block"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12.52"
                  cy="12.1935"
                  r="11.8566"
                  fill="url(#paint0_linear_1_116)"
                />
                <path
                  d="M14.1458 7.69617L18.2016 11.7428L18.653 12.1932L18.2016 12.6442L14.1458 16.6908L13.2136 15.7895L16.1737 12.8356H5.56982V11.5507H16.1737L13.2136 8.5975L14.1465 7.69617H14.1458Z"
                  fill="#1E1E23"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_116"
                    x1="24.3766"
                    y1="12.1935"
                    x2="0.663391"
                    y2="12.1935"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00FFA7" />
                    <stop offset="1" stopColor="#FFFF00" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          </span>
        </div>
      </div>
      <div className="cards  flex flex-col md:flex-row md:justify-center   flex-wrap ">
        <div className="card1 mx-2  mb-3 flex flex-col justify-center items-center bg-green-100 border-solid border-4 border-black rounded-2xl    w-full  md:w-1/5  ">
          <div className="flex items-center space-x-2 p-2">
            <span className="rounded-full inline-block relative w-8 h-8 bg-black">
              <svg
                className="absolute top-1/2 left-4 transform -translate-x-1/2 -translate-y-1/2 z-10"
                width="10"
                height="19"
                viewBox="0 0 10 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.14165 15.725C8.92245 15.725 8.70326 15.829 8.57432 16.0109C7.83938 16.9726 6.66605 17.5964 5.36379 17.5964C3.15896 17.5964 1.36673 15.842 1.36673 13.6977V5.41929C1.36673 3.27497 3.17185 1.52052 5.36379 1.52052C6.70473 1.52052 7.89095 2.17031 8.6259 3.158C8.76773 3.33995 8.97403 3.45691 9.20611 3.45691H9.28348C9.8508 3.45691 10.1989 2.80711 9.87659 2.33926C8.92245 0.935705 7.29784 0 5.45404 0H5.29932C2.38534 0 0 2.32626 0 5.15937V13.8406C0 16.6737 2.38534 19 5.29932 19H5.45404C7.20759 19 8.75483 18.1683 9.72186 16.8817C10.0571 16.4138 9.73476 15.725 9.14165 15.725Z"
                  fill="white"
                />
              </svg>
              <svg
                className="absolute top-1/2 
                 left-5 transform -translate-x-1/2 -translate-y-1/2"
                width="6"
                height="9"
                viewBox="0 0 6 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 0.749999V8.25C6 8.66379 5.66379 9 5.25 9C4.83621 9 4.5 8.66379 4.5 8.25V5.81897C4.5 5.40517 4.16379 5.06897 3.75 5.06897H2.25C1.83621 5.06897 1.5 5.40517 1.5 5.81897V6.12931C1.5 6.5431 1.16379 6.87931 0.75 6.87931C0.336207 6.87931 0 6.5431 0 6.12931V2.57328C0 2.15948 0.336207 1.82328 0.75 1.82328C1.16379 1.82328 1.5 2.15948 1.5 2.57328V2.8319C1.5 3.24569 1.83621 3.5819 2.25 3.5819H3.76293C4.17672 3.5819 4.51293 3.24569 4.51293 2.8319V0.749999C4.51293 0.336206 4.84914 0 5.26293 0C5.66379 0.012931 6 0.336206 6 0.749999Z"
                  fill="white"
                />
              </svg>
            </span>
            <span className=" font-semibold  ">Join Development</span>
          </div>
          <hr className=" w-full font-bold border border-black " />

          <span className=" font-bold mb-10 mt-4">Blockchain Development </span>
          <img src={c1} className=" w-full h-fit md:w-5/6 md:h-4/6" />
          <hr className=" w-full font-bold border border-black block mb-6" />
          <span className=" h-8 text-black w-full flex flex-row items-center justify-end">
            <button className="w-24 border-2 border-black rounded-full flex items-center justify-center space-x-5 mb-5 mr-3">
              Explore
              <svg
                className=" block"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12.52"
                  cy="12.1935"
                  r="11.8566"
                  fill="url(#paint0_linear_1_116)"
                />
                <path
                  d="M14.1458 7.69617L18.2016 11.7428L18.653 12.1932L18.2016 12.6442L14.1458 16.6908L13.2136 15.7895L16.1737 12.8356H5.56982V11.5507H16.1737L13.2136 8.5975L14.1465 7.69617H14.1458Z"
                  fill="#1E1E23"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_116"
                    x1="24.3766"
                    y1="12.1935"
                    x2="0.663391"
                    y2="12.1935"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00FFA7" />
                    <stop offset="1" stopColor="#FFFF00" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          </span>
        </div>
        <div className="card2 mx-2  mb-3 flex flex-col justify-center items-center bg-cyan-100 border-solid border-4 border-black rounded-2xl    w-full  md:w-1/5  ">
          <div className="flex items-center space-x-2 p-2">
            <span className="rounded-full inline-block relative w-8 h-8 bg-black">
              <svg
                className="absolute top-1/2 left-4 transform -translate-x-1/2 -translate-y-1/2 z-10"
                width="10"
                height="19"
                viewBox="0 0 10 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.14165 15.725C8.92245 15.725 8.70326 15.829 8.57432 16.0109C7.83938 16.9726 6.66605 17.5964 5.36379 17.5964C3.15896 17.5964 1.36673 15.842 1.36673 13.6977V5.41929C1.36673 3.27497 3.17185 1.52052 5.36379 1.52052C6.70473 1.52052 7.89095 2.17031 8.6259 3.158C8.76773 3.33995 8.97403 3.45691 9.20611 3.45691H9.28348C9.8508 3.45691 10.1989 2.80711 9.87659 2.33926C8.92245 0.935705 7.29784 0 5.45404 0H5.29932C2.38534 0 0 2.32626 0 5.15937V13.8406C0 16.6737 2.38534 19 5.29932 19H5.45404C7.20759 19 8.75483 18.1683 9.72186 16.8817C10.0571 16.4138 9.73476 15.725 9.14165 15.725Z"
                  fill="white"
                />
              </svg>
              <svg
                className="absolute top-1/2 
                 left-5 transform -translate-x-1/2 -translate-y-1/2"
                width="6"
                height="9"
                viewBox="0 0 6 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 0.749999V8.25C6 8.66379 5.66379 9 5.25 9C4.83621 9 4.5 8.66379 4.5 8.25V5.81897C4.5 5.40517 4.16379 5.06897 3.75 5.06897H2.25C1.83621 5.06897 1.5 5.40517 1.5 5.81897V6.12931C1.5 6.5431 1.16379 6.87931 0.75 6.87931C0.336207 6.87931 0 6.5431 0 6.12931V2.57328C0 2.15948 0.336207 1.82328 0.75 1.82328C1.16379 1.82328 1.5 2.15948 1.5 2.57328V2.8319C1.5 3.24569 1.83621 3.5819 2.25 3.5819H3.76293C4.17672 3.5819 4.51293 3.24569 4.51293 2.8319V0.749999C4.51293 0.336206 4.84914 0 5.26293 0C5.66379 0.012931 6 0.336206 6 0.749999Z"
                  fill="white"
                />
              </svg>
            </span>
            <span className=" font-semibold  ">Join Development</span>
          </div>
          <hr className=" w-full font-bold border border-black " />

          <span className=" font-bold mb-10 mt-4">Blockchain Development </span>
          <img src={c2} className=" w-full h-fit md:w-5/6 md:h-4/6" />

          <hr className=" w-full font-bold border border-black block mb-6" />
          <span className=" h-8 text-black w-full flex flex-row items-center justify-end">
            <button className="w-24 border-2 border-black rounded-full flex items-center justify-center space-x-5 mb-5 mr-3">
              Explore
              <svg
                className=" block"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12.52"
                  cy="12.1935"
                  r="11.8566"
                  fill="url(#paint0_linear_1_116)"
                />
                <path
                  d="M14.1458 7.69617L18.2016 11.7428L18.653 12.1932L18.2016 12.6442L14.1458 16.6908L13.2136 15.7895L16.1737 12.8356H5.56982V11.5507H16.1737L13.2136 8.5975L14.1465 7.69617H14.1458Z"
                  fill="#1E1E23"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_116"
                    x1="24.3766"
                    y1="12.1935"
                    x2="0.663391"
                    y2="12.1935"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00FFA7" />
                    <stop offset="1" stopColor="#FFFF00" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          </span>
        </div>
        <div className="card3 mx-2  mb-3 flex flex-col justify-center items-center bg-red-100 border-solid border-4 border-black rounded-2xl    w-full  md:w-1/5  ">
          <div className="flex items-center space-x-2 p-2">
            <span className="rounded-full inline-block relative w-8 h-8 bg-black">
              <svg
                className="absolute top-1/2 left-4 transform -translate-x-1/2 -translate-y-1/2 z-10"
                width="10"
                height="19"
                viewBox="0 0 10 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.14165 15.725C8.92245 15.725 8.70326 15.829 8.57432 16.0109C7.83938 16.9726 6.66605 17.5964 5.36379 17.5964C3.15896 17.5964 1.36673 15.842 1.36673 13.6977V5.41929C1.36673 3.27497 3.17185 1.52052 5.36379 1.52052C6.70473 1.52052 7.89095 2.17031 8.6259 3.158C8.76773 3.33995 8.97403 3.45691 9.20611 3.45691H9.28348C9.8508 3.45691 10.1989 2.80711 9.87659 2.33926C8.92245 0.935705 7.29784 0 5.45404 0H5.29932C2.38534 0 0 2.32626 0 5.15937V13.8406C0 16.6737 2.38534 19 5.29932 19H5.45404C7.20759 19 8.75483 18.1683 9.72186 16.8817C10.0571 16.4138 9.73476 15.725 9.14165 15.725Z"
                  fill="white"
                />
              </svg>
              <svg
                className="absolute top-1/2 
                 left-5 transform -translate-x-1/2 -translate-y-1/2"
                width="6"
                height="9"
                viewBox="0 0 6 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 0.749999V8.25C6 8.66379 5.66379 9 5.25 9C4.83621 9 4.5 8.66379 4.5 8.25V5.81897C4.5 5.40517 4.16379 5.06897 3.75 5.06897H2.25C1.83621 5.06897 1.5 5.40517 1.5 5.81897V6.12931C1.5 6.5431 1.16379 6.87931 0.75 6.87931C0.336207 6.87931 0 6.5431 0 6.12931V2.57328C0 2.15948 0.336207 1.82328 0.75 1.82328C1.16379 1.82328 1.5 2.15948 1.5 2.57328V2.8319C1.5 3.24569 1.83621 3.5819 2.25 3.5819H3.76293C4.17672 3.5819 4.51293 3.24569 4.51293 2.8319V0.749999C4.51293 0.336206 4.84914 0 5.26293 0C5.66379 0.012931 6 0.336206 6 0.749999Z"
                  fill="white"
                />
              </svg>
            </span>
            <span className=" font-semibold  ">Join Development</span>
          </div>
          <hr className=" w-full font-bold border border-black " />

          <span className=" font-bold mb-10 mt-4">Security AAS </span>
          <img src={c3} className=" w-full h-fit md:w-5/6 md:h-4/6" />
          <hr className=" w-full font-bold border border-black block mb-6" />
          <span className=" h-8 text-black w-full flex flex-row items-center justify-end">
            <button className="w-24 border-2 border-black rounded-full flex items-center justify-center space-x-5 mb-5 mr-3">
              Explore
              <svg
                className=" block"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12.52"
                  cy="12.1935"
                  r="11.8566"
                  fill="url(#paint0_linear_1_116)"
                />
                <path
                  d="M14.1458 7.69617L18.2016 11.7428L18.653 12.1932L18.2016 12.6442L14.1458 16.6908L13.2136 15.7895L16.1737 12.8356H5.56982V11.5507H16.1737L13.2136 8.5975L14.1465 7.69617H14.1458Z"
                  fill="#1E1E23"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_116"
                    x1="24.3766"
                    y1="12.1935"
                    x2="0.663391"
                    y2="12.1935"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00FFA7" />
                    <stop offset="1" stopColor="#FFFF00" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          </span>
        </div>
        <div className="card4 mx-2  mb-3 flex flex-col justify-center items-center bg-indigo-100 border-solid border-4 border-black rounded-2xl    w-full  md:w-1/5  ">
          <div className="flex items-center space-x-2 p-2">
            <span className="rounded-full inline-block relative w-8 h-8 bg-black">
              <svg
                className="absolute top-1/2 left-4 transform -translate-x-1/2 -translate-y-1/2 z-10"
                width="10"
                height="19"
                viewBox="0 0 10 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.14165 15.725C8.92245 15.725 8.70326 15.829 8.57432 16.0109C7.83938 16.9726 6.66605 17.5964 5.36379 17.5964C3.15896 17.5964 1.36673 15.842 1.36673 13.6977V5.41929C1.36673 3.27497 3.17185 1.52052 5.36379 1.52052C6.70473 1.52052 7.89095 2.17031 8.6259 3.158C8.76773 3.33995 8.97403 3.45691 9.20611 3.45691H9.28348C9.8508 3.45691 10.1989 2.80711 9.87659 2.33926C8.92245 0.935705 7.29784 0 5.45404 0H5.29932C2.38534 0 0 2.32626 0 5.15937V13.8406C0 16.6737 2.38534 19 5.29932 19H5.45404C7.20759 19 8.75483 18.1683 9.72186 16.8817C10.0571 16.4138 9.73476 15.725 9.14165 15.725Z"
                  fill="white"
                />
              </svg>
              <svg
                className="absolute top-1/2 
                 left-5 transform -translate-x-1/2 -translate-y-1/2"
                width="6"
                height="9"
                viewBox="0 0 6 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 0.749999V8.25C6 8.66379 5.66379 9 5.25 9C4.83621 9 4.5 8.66379 4.5 8.25V5.81897C4.5 5.40517 4.16379 5.06897 3.75 5.06897H2.25C1.83621 5.06897 1.5 5.40517 1.5 5.81897V6.12931C1.5 6.5431 1.16379 6.87931 0.75 6.87931C0.336207 6.87931 0 6.5431 0 6.12931V2.57328C0 2.15948 0.336207 1.82328 0.75 1.82328C1.16379 1.82328 1.5 2.15948 1.5 2.57328V2.8319C1.5 3.24569 1.83621 3.5819 2.25 3.5819H3.76293C4.17672 3.5819 4.51293 3.24569 4.51293 2.8319V0.749999C4.51293 0.336206 4.84914 0 5.26293 0C5.66379 0.012931 6 0.336206 6 0.749999Z"
                  fill="white"
                />
              </svg>
            </span>
            <span className=" font-semibold  ">Join Development</span>
          </div>
          <hr className=" w-full font-bold border border-black " />

          <span className=" font-bold mb-10 mt-4">Graphic Motion</span>
          <img src={c4} className=" w-full h-2/3 md:w-5/6 md:h-4/6" />
          <hr className=" w-full font-bold border border-black block mb-6" />
          <span className=" h-8 text-black w-full flex flex-row items-center justify-end">
            <button className="w-24 border-2 border-black rounded-full flex items-center justify-center space-x-5 mb-5 mr-3">
              Explore
              <svg
                className=" block"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12.52"
                  cy="12.1935"
                  r="11.8566"
                  fill="url(#paint0_linear_1_116)"
                />
                <path
                  d="M14.1458 7.69617L18.2016 11.7428L18.653 12.1932L18.2016 12.6442L14.1458 16.6908L13.2136 15.7895L16.1737 12.8356H5.56982V11.5507H16.1737L13.2136 8.5975L14.1465 7.69617H14.1458Z"
                  fill="#1E1E23"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_116"
                    x1="24.3766"
                    y1="12.1935"
                    x2="0.663391"
                    y2="12.1935"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00FFA7" />
                    <stop offset="1" stopColor="#FFFF00" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          </span>
        </div>
      </div>
    </main>
  );
}

export default Services;
