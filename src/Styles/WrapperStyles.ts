import styled from 'styled-components';
import colors from './Colors';

// Breakpoints
const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 0;
  height: 100vh;
  overflow-y: scroll;
  background-color: ${colors.grey6};

  color: ${colors.grey1};
  font-family: 'Sora', sans-serif;

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

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 4rem;
  width: 100%;
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