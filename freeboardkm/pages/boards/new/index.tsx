import { useAuth } from "../../../src/components/commons/hooks/useAuth";
import BoardWrite from "../../../src/components/units/board/write/BoardWrite.container";

export default function BoardWritePage() {
  // useAuth();
  return <BoardWrite isEdit={false} />;
}
