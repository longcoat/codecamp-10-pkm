import { TwitterOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const MyIcon = styled(TwitterOutlined)`
  color: red;
  font-size: 50px;
`;

const onClickDelete = (event) => {
  alert(event.currentTarget.id);
};

export default function LibraryIconPage() {
  return (
    <div id="afsdf onClick={onClickDelete}">
      <MyIcon />
    </div>
  );
}
