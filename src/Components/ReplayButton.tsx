import { ButtonHTMLAttributes } from "react"
import ReplayIcon from "../Icons/ReplayIcon"
import { RestartButton } from "../Styles/ButtonStyles"

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void,
}

function ReplayButton({onClick}: IProps) {
  return (
    <RestartButton
      onClick={onClick}
    >
      <ReplayIcon />
    </RestartButton>
  )
}

export default ReplayButton