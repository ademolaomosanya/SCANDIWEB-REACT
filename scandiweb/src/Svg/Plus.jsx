import * as React from "react"
const Plus = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g stroke="#1D1F22" clipPath="url(#a)">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8M8 12h8" />
      <path d="M.5.5h23v23H.5z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default Plus
