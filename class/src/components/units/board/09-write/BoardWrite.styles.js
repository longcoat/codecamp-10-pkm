//CSS

import styled from "@emotion/styled";

export const RedInput = styled.input`
  border-color: red;
`;

export const BlueButton = styled.button`
  background-color: ${(props) => (props.isActive ? "yellow" : "red")};
  color: ${(props) => (props.isActive ? "black" : "white")};
`;
