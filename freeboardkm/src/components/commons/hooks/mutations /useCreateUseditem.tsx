import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUseditemArgs,
} from "../../../../commons/types/generated/types";

export const CREATE_USED_ITEM = gql`
  mutation ($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
    }
  }
`;

export const useCreateUseditem = () => {
  const mutation = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);

  return mutation;
};
