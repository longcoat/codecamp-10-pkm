import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_USED_ITEM_QUESTION_ANSWERS = gql`
  query fetchUseditemQuestionAnswers($useditemQuestionId: ID!, $page: Int) {
    fetchUseditemQuestionAnswers(
      useditemQuestionId: $useditemQuestionId
      page: $page
    ) {
      _id
      contents
      user {
        _id
        email
        name
      }
      createdAt
    }
  }
`;

export const useFetchUseditemQuestionAnswers = (useditemQuestionId) => {
  const query = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId,
      page: 1,
    },
  });

  return query;
};
