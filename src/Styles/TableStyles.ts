import styled from "styled-components";
import colors from "./Colors";

const Table = styled.table`
  border: 1px solid ${colors.grey1};
`;

export const Td = styled.td`
  padding: 1rem;
  border: 1px solid ${colors.grey1};
`;

export default Table;