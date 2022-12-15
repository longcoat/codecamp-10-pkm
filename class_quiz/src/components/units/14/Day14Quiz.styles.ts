import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const PageNumber = styled.button`
  margin: 10px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: ${(props) => (props.isPageClick ? "pink" : "black")};
  :hover {
    color: gray;
  }
`;

export const MovePage = styled.button`
  cursor: pointer;
  border: 0;
  background-color: transparent;

  :disabled {
    color: red;
  }
`;

export const PrevBtn = styled(LeftCircleOutlined)`
  &[disabled] {
    color: red;
  }
`;

export const NextBtn = styled(RightCircleOutlined)`
  &[disabled] {
    color: red;
  }
`;
