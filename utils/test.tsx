import * as React from "react"
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg"

function Test() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 72 72"
      width={72}
      height={72}
      style={{
        width: "100%",
        height: "100%"
      }}
      transform="translate3d(0,0,0)"
      
    >
      <Defs>
        <ClipPath id="a">
          <Path d="M0 0H72V72H0z" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#a)">
        <Path
          stroke="#CFCFCF"
          strokeWidth={2}
          d="M18.324 4.428l-.037 9.785C18.287 24.313 10.1 32.5 0 32.5c0 0 0 0 0 0-10.1 0-18.287-8.187-18.287-18.287v-28.426C-18.287-24.313-10.1-32.5 0-32.5c0 0 0 0 0 0 10.1 0 18.287 8.187 18.287 18.287V7.376"
          fill="none"
          transform="translate(36 36)"
        />
        <Path
          stroke="#9B37FF"
          strokeWidth={2}
          d="M-.113 2.895c.114 1.358.178 2.857.178 4.517l-.059 9.214"
          fill="none"
          transform="translate(36 38.073)"
        />
        <Path
          stroke="#9B37FF"
          strokeWidth={2}
          d="M-24.452 3.003l6.409 6.494 6.473-6.472"
          fill="none"
          transform="translate(54 46.323)"
        />
      </G>
    </Svg>
  )
}

export default Test
