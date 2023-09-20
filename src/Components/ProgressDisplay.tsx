import { Progress } from '../Styles/TextStyle'
import colors from '../Styles/Colors'

interface IProps {
  questionNumber: number,
  answered: boolean,
  correctAnswer: boolean,
}

function ProgressDisplay({questionNumber, answered, correctAnswer}: IProps) {
  function getDisplayColor() {
    const displayColor = {color: colors.grey1}
    if (answered && correctAnswer) displayColor.color = colors.green
    if (answered && !correctAnswer) displayColor.color = colors.red
    return displayColor
  }

  return (
    <Progress theme={getDisplayColor()}>
      {`${questionNumber}/5`}
    </Progress>
  )
}

export default ProgressDisplay