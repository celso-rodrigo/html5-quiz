import colors from "../Styles/Colors"

interface IProps {
  fill?: string,
  height?: number | string,
  width?: number | string,
}

function XIcon({fill, height, width}: IProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      height={height ? `${height}` : 50}
      width={width ? `${width}` : 50}
      fill={fill ? `${fill}` : colors.grey1}
      viewBox="0 -960 960 960"
    >
      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
    </svg>
  )
}

export default XIcon