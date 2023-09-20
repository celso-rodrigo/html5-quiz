import { QuestionButton } from "../Styles/ButtonStyles"
import colors from "../Styles/Colors"

interface IProps {
  selected: boolean,
  answered: boolean,
  correctAnswer: boolean,
  option: string,
}

function QuestionCard({selected, answered, correctAnswer, option}: IProps) {
  // Handles border color logic
  function getBorderColor() {
    const borderColor = {borderColor: `${colors.grey3}`}
    if (!answered && selected) borderColor.borderColor = colors.grey1
    if (answered && selected && correctAnswer) borderColor.borderColor = colors.green
    if (answered && !selected && correctAnswer) borderColor.borderColor = colors.orange
    return borderColor
  }

  return (
    <QuestionButton theme={getBorderColor()}>
      {option}
    </QuestionButton>
  )
}

export default QuestionCard