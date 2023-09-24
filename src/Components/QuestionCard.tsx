import { ButtonHTMLAttributes, MouseEvent } from 'react';
import { QuestionButton } from "../Styles/ButtonStyles"
import colors from "../Styles/Colors"

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  selected: boolean,
  answered: boolean,
  correctAnswer: boolean,
  option: string,
  onClick: (event: MouseEvent<HTMLButtonElement>) => void,
}

function QuestionCard({selected, answered, correctAnswer, option, onClick: handleSelectAnswer}: IProps) {
  // Handles border color logic
  function getBorderColor() {
    const borderColor = {borderColor: `${colors.grey3}`}
    if (!answered && selected) borderColor.borderColor = colors.grey1
    if (answered && selected && correctAnswer) borderColor.borderColor = colors.green
    if (answered && !selected && correctAnswer) borderColor.borderColor = colors.orange
    if (answered && !correctAnswer) borderColor.borderColor = colors.red
    return borderColor
  }

  return (
    <QuestionButton
      theme={getBorderColor()}
      onClick={handleSelectAnswer}
      value={option}
    >
      {option}
    </QuestionButton>
  )
}

export default QuestionCard