import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";

export default function RouterPage() {
  const router = useRouter();
  const [click, setClick] = useState(false);

  const onClickToolTip = () => {
    setClick(!click);
    console.log(click);
  };

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.number,
    },
  });
}
