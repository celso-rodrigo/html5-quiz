import colors from "../Styles/Colors"

interface IProps {
  fill?: string,
  height?: number | string,
  width?: number | string,
}

function DoneIcon({fill, height, width}: IProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      height={height ? `${height}` : 50}
      width={width ? `${width}` : 50}
      fill={fill ? `${fill}` : colors.grey1}
      viewBox="0 -960 960 960"
    >
      <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
    </svg>
  )
}

export default DoneIcon