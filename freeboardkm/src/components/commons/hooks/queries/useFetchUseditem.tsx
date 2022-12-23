import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      images
      tags
      useditemAddress {
        zipcode
        address
        addressDetail
      }
      pickedCount
      seller {
        _id
        email
        name
      }
      pickedCount
    }
  }
`;

export const useFetchUseditem = (useditemId: string) => {
  const query = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, { variables: { useditemId } });

  return query;
};
