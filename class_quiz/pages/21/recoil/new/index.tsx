import Write from "../../../../src/components/units/example/write/Write.container";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { isEditState } from "../edit";

export default function NewPage() {
  //   const [isEdit, setIsEdit] = useRecoilState(isEditState);

  return (
    <>
      <Write />
    </>
  );
}
