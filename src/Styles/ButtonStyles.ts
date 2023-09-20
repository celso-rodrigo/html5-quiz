import styled from 'styled-components';
import colors from './Colors';

const QuestionButton = styled.button`
  font-family: 'Sora', sans-serif;
  font-size: 1rem;
  background-color: ${colors.grey5};
  padding: 10px;
  height: 125px;
  width: 200px;
  transition: 1s;

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

export { QuestionButton };