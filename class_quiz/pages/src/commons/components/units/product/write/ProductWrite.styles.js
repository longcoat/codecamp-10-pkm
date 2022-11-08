import styled from "@emotion/styled";

export const Input = styled.input`
  border-color: ${(props) => (props.inputActive ? "black" : "red")};
`;
export const Button = styled.button`
  background-color: ${(props) => (props.isActive ? "green" : "gray")};
`;
