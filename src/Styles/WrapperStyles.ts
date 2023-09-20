import styled from 'styled-components';
import colors from './Colors';

// Breakpoints
const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
};

const Wrapper = styled.div`
  background-color: ${colors.grey6};
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Sora', sans-serif;
  padding: 20px;
  height: 100vh;

  /* SM */
  @media (min-width: ${breakpoints.sm}) {
  }

  /* MD */
  @media (min-width: ${breakpoints.md}) {
  }

  /* LG */
  @media (min-width: ${breakpoints.lg}) {
  }
`;

export default Wrapper;