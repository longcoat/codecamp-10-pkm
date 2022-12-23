import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";

export const FETCH_USED_ITEMS_OF_THE_BEST = gql`
  query {
    fetchUseditemsOfTheBest {
      _id
      name
      remarks
      contents
      price
      images
      tags
      useditemAddress {
        lat
        lng
        address
      }
      pickedCount
    }
  }
`;

export const useFetchUseditemsOfTheBest = () => {
  const query = useQuery<Pick<IQuery, "fetchUseditemsOfTheBest">>(
    FETCH_USED_ITEMS_OF_THE_BEST
  );

  return query;
};
