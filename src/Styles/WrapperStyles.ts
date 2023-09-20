import styled from 'styled-components';

// Breakpoints
const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
};

const Wrapper = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  height: 100vh;

  /* SM */
  @media (min-width: ${breakpoints.sm}) {
    background-color: #ffcccc;
  }

  /* MD */
  @media (min-width: ${breakpoints.md}) {
    background-color: #ccffcc;
  }

  /* LG */
  @media (min-width: ${breakpoints.lg}) {
    background-color: #ccccff;
  }
`;

export default Wrapper;
