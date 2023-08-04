import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#1D1F22"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 12h8"
    />
    <path stroke="#1D1F22" d="M.5.5h23v23H.5z" />
  </svg>
)
export default SvgComponent
