import { gql, useMutation } from "@apollo/client";
import { IMutation } from "../../../../commons/types/generated/types";

export const CREATE_USED_ITEM = gql`
  mutation updateUseditemQuestion(
    $updateUseditemQuestionInput: UpdateUseditemQuestionInput!
    $useditemQuestionId: ID!
  ) {
    updateUseditemQuestion(
      updateUseditemQuestionInput: $updateUseditemQuestionInput
      useditemQuestionId: $useditemQuestionId
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

export const useUpdateUseditemQuestion = () => {
  const mutation =
    useMutation<Pick<IMutation, "updateUseditemQuestion">>(CREATE_USED_ITEM);

  return mutation;
};
