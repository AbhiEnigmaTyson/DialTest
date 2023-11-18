import * as React from "react"
const Eclipse = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={329} height={329} {...props}>
    <defs>
      <linearGradient
        id="a"
        x1={0.144}
        x2={0.829}
        y1={0.172}
        y2={0.874}
        gradientUnits="objectBoundingBox"
      >
        <stop offset={0} stopColor="#00f0b2" />
        <stop offset={1} stopColor="#01dee2" />
      </linearGradient>
    </defs>
    <g fill="url(#a)" stroke="#00f0b2" data-name="Ellipse 179">
      <circle cx={164.5} cy={164.5} r={164.5} stroke="none" />
      <circle cx={164.5} cy={164.5} r={164} fill="none" />
    </g>
  </svg>
)
export default Eclipse