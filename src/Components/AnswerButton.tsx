import { ButtonHTMLAttributes } from 'react';
import { NextButton } from '../Styles/ButtonStyles';
import colors from '../Styles/Colors';
import gamePhase from '../Enums/gamePhase';
import NextIcon from '../Icons/NextIcon';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  currentGamePhase: gamePhase
  onClick: () => void,
}

function AnswerButton({currentGamePhase, disabled, onClick}: IProps) {
  function getBorderColor() {
    const borderColor = {borderColor: `${colors.grey1}`}
    if (currentGamePhase === gamePhase.answering && !disabled) borderColor.borderColor = colors.orange
    if (currentGamePhase === gamePhase.showingAnswers) borderColor.borderColor = colors.green
    return borderColor
  }

  return (
    <NextButton
      disabled={disabled}
      onClick={onClick}
      theme={getBorderColor()}
    >
      <NextIcon width="75" height="75" />
    </NextButton>
  )
}

export default AnswerButton