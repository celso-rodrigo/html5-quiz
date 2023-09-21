import styled from 'styled-components';
import colors from './Colors';

export const Title = styled.h1`
  font-weight: 200;
  text-align: center;
`;

export const Bold = styled.span`
  font-weight: 600;
`;

export const Progress = styled.h2`
  border: 3px solid ${(props) => props.theme.color};
  color: ${(props) => props.theme.color};
  font-weight: 400;
  padding: 0.5rem 1rem;
`;

Progress.defaultProps = {
  theme: {
    color: `${colors.grey1}`,
  }
}