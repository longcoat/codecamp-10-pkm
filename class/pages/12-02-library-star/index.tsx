import styled from "@emotion/styled";
import { Rate } from "antd";
import { useState } from "react";

const MyIcon = styled(Rate)``;

export default function LibraryIconPage() {
  const [value, setValue] = useState(3);

  return <MyIcon onChange={setValue} value={value} />;
}
