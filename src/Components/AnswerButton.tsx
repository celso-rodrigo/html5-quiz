import { ButtonHTMLAttributes } from 'react';
import { NextButton } from '../Styles/ButtonStyles';
import next from "../assets/next.svg";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void,
}

function AnswerButton({disabled, onClick}: IProps) {
  return (
    <NextButton
      disabled={disabled}
      onClick={onClick}
    >
      <img src={next} alt='Next button' />
    </NextButton>
  )
}

export default AnswerButton