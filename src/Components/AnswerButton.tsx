import { ButtonHTMLAttributes } from 'react';
import { NextButton } from '../Styles/ButtonStyles';
import next from "../assets/next.svg";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

function AnswerButton({disabled}: IProps) {
  return (
    <NextButton
      disabled={disabled}
    >
      <img src={next} alt='Next button' />
    </NextButton>
  )
}

export default AnswerButton