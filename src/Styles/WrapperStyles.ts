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
  background: linear-gradient(180deg, ${colors.grey6} 10%, ${colors.grey4} 35%, ${colors.grey1} 100%);

  color: ${colors.grey1};
  font-family: 'Sora', sans-serif;

  /* SM */
  @media (min-width: ${breakpoints.sm}) {
    /* background-color: yellow; */
    gap: 5rem;
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
  align-items: center;
  padding: 0 2rem;
  justify-content: space-between;
  width: 100%;

  /* SM */
  @media (min-width: ${breakpoints.sm}) {
    padding: 0 4rem;
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