import { ButtonHTMLAttributes } from 'react';
import { NextButton } from '../Styles/ButtonStyles';
import next from "../assets/next.svg";
import colors from '../Styles/Colors';
import gamePhase from '../Enums/gamePhase';

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
      <img src={next} alt='Next button' />
    </NextButton>
  )
}

export default AnswerButton