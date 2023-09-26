import colors from "../Styles/Colors"

interface IProps {
  fill?: string,
  height?: number | string,
  width?: number | string,
}

function NextIcon({fill, height, width}: IProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      height={height ? `${height}` : 50}
      width={width ? `${width}` : 50}
      fill={fill ? `${fill}` : colors.grey1}
      viewBox="0 -960 960 960"
    >
      <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/>
    </svg>
  )
}

export default NextIcon