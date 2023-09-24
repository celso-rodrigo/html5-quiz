import styled from 'styled-components';
import colors from './Colors';

export const QuestionButton = styled.button`
  font-family: 'Sora', sans-serif;
  font-size: 1rem;
  background-color: ${colors.grey5};
  padding: 10px;
  height: 150px;
  width: 275px;
  transition: .5s;

  border: 3px solid;
  border-color: ${(props) => props.theme.borderColor};
  border-radius: 8px;

  text-align: center;
  color: ${colors.grey1};
`;

QuestionButton.defaultProps = {
  theme: {
    borderColor: `${colors.grey3}`,
  }
}

export const NextButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.borderColor};
  border-radius: 50%;
  height: 50px;
  width: 50px;
  transition: .3s;

  &:disabled {
    opacity: 0.3;
    pointer-events: none;
  }

  &:hover {
    box-shadow: 0 0 5px ${(props) => props.theme.borderColor};
  }
`;

NextButton.defaultProps = {
  theme: {
    borderColor: `${colors.grey3}`,
  }
}