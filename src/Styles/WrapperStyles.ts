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
  overflow-y: scroll;
  background-color: ${colors.grey6};

  /* SM */
  @media (min-width: ${breakpoints.sm}) {
    /* background-color: yellow; */
  }

  /* MD */
  @media (min-width: ${breakpoints.md}) {
    /* background-color: orange; */
  }

  /* LG */
  @media (min-width: ${breakpoints.lg}) {
    /* background-color: green; */
  }
`;

export const QuestionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;

  /* MD */
  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
  }
`;

export default Wrapper;