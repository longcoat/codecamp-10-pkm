import { gql, useQuery } from "@apollo/client";
import InfiteScroll from "react-infinite-scroller";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query ($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;
export default function Quiz15() {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardArgs
  >(FETCH_BOARDS);

  const onLoadMore = () => {
    if (data === undefined) return;

    void fetchMore({
      variables: {
        page: Math.ceil(data.fetchBoards.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchBoards === undefined) {
          return { fetchBoards: [...prev.fetchBoards] };
        }
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };
  return (
    <div style={{ height: "500px", overflow: "auto" }}>
      <InfiteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true}
        useWindow={false}
      >
        {data?.fetchBoards.map((el) => (
          <div key={el._id}>
            <span style={{ margin: "10px" }}>{el.title}</span>
            <span style={{ margin: "10px" }}>{el.contents}</span>
            <span style={{ margin: "10px" }}>{el.writer}</span>
          </div>
        ))}{" "}
        ?? <div></div>
      </InfiteScroll>
    </div>
  );
}
