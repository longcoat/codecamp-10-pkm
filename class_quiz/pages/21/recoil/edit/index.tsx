import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../../src/commons/stores";
import Write from "../../../../src/components/units/example/write/Write.container";

export default function EditPage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEdit(true);
  }, []);

  return (
    <>
      <Write />
    </>
  );
}
