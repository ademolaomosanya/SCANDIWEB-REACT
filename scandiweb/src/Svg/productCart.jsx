import * as React from "react"
const productCart = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={74}
    height={74}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <circle cx={37} cy={33} r={26} fill="#5ECE7B" />
      <path
        fill="#fff"
        d="M48.474 26.848a2.473 2.473 0 0 0-1.895-.893H31.19l-.48-1.788c-.278-1.04-1.238-1.764-2.35-1.764h-2.577c-.43 0-.784.338-.784.75 0 .41.353.749.784.749h2.577c.379 0 .707.241.808.604l3.083 11.743c.278 1.04 1.237 1.764 2.35 1.764h10.081c1.112 0 2.098-.724 2.35-1.764l1.896-7.442a2.143 2.143 0 0 0-.455-1.958Zm-1.086 1.62-1.895 7.442a.829.829 0 0 1-.809.604H34.602a.828.828 0 0 1-.808-.605l-2.199-8.432H46.58c.252 0 .505.121.657.314.151.193.226.435.151.676ZM35.133 38.978c-1.44 0-2.627 1.135-2.627 2.512s1.187 2.513 2.627 2.513c1.44 0 2.628-1.135 2.628-2.512s-1.188-2.514-2.628-2.514Zm0 3.503c-.581 0-1.036-.435-1.036-.99 0-.557.455-.992 1.036-.992.582 0 1.037.435 1.037.991-.001.533-.481.991-1.037.991ZM43.825 38.978c-1.44 0-2.627 1.136-2.627 2.512 0 1.377 1.187 2.513 2.627 2.513 1.44 0 2.627-1.136 2.627-2.513-.024-1.376-1.187-2.512-2.627-2.512Zm0 3.504c-.581 0-1.036-.435-1.036-.991s.455-.992 1.036-.992 1.036.436 1.036.992c0 .532-.48.99-1.036.99Z"
      />
    </g>
    <defs>
      <filter
        id="a"
        width={74}
        height={74}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={5.5} />
        <feColorMatrix values="0 0 0 0 0.113725 0 0 0 0 0.121569 0 0 0 0 0.133333 0 0 0 0.1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_150_263" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_150_263"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)
export default productCart
