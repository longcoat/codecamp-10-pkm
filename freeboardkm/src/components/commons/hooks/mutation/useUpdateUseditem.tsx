import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUpdateUseditemArgs,
} from "../../../../commons/types/generated/types";

export const UPDATE_USED_ITEM = gql`
  mutation updateUseditem(
    $updateUseditemInput: UpdateUseditemInput!
    $useditemId: ID!
  ) {
    updateUseditem(
      updateUseditemInput: $updateUseditemInput
      useditemId: $useditemId
    ) {
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

export const useUpdateUseditem = () => {
  const mutation = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USED_ITEM);

  return mutation;
};
