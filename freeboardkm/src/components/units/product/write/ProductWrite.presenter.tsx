import * as S from "./ProductWrite.styles";
import { useForm } from "react-hook-form";
import { Modal } from "antd";
import { useRouter } from "next/router";
import "react-quill/dist/quill.snow.css";
import { useCreateUseditem } from "../../../commons/hooks/mutations /useCreateUseditem";
import dynamic from "next/dynamic";
import { useState } from "react";
import UpLoad from "../../../commons/uploads/02/Uploads02.container";
import { v4 as uuidv4 } from "uuid";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateUseditemArgs,
} from "../../../../commons/types/generated/types";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

const CREATE_USED_ITEM = gql`
  mutation ($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
      name
      contents
      remarks
      images
    }
  }
`;

export default function ProductUI(props) {
  const router = useRouter();
  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);

  const onChangeContents = (value: string) => {
    setValue("contents", value);
    void trigger("contents");
  };

  const onClickSubmit = async (data: any) => {
    console.log(data);
    console.log("==========");

    const result = await createUseditem({
      variables: {
        createUseditemInput: {
          name: data.name,
          remarks: data.remarks,
          contents: data.contents,
          price: Number(data.price),
          images: [...fileUrls],
        },
      },
    });
    Modal.success({
      content: "상품등록 성공했어요",
      afterClose() {
        void router.push(`/product/${result.data?.createUseditem._id}`);
      },
    });
  };
  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  console.log("=============");
  console.log(router);
  console.log("=============");

  const onClickEdit = () => {};

  return (
    <S.Container>
      <S.Header>{props.isEdit ? "상품 수정" : "상품 등록"}</S.Header>
      <S.Form
        onSubmit={
          props.isEdit ? handleSubmit(onClickEdit) : handleSubmit(onClickSubmit)
        }
      >
        <S.DetailBody>
          <S.Text>상품명</S.Text>
          <S.InputBox
            type="text"
            placeholder="상품명을 작성해주세요"
            {...register("name")}
          />
          <S.Error>{formState.errors.name?.message}</S.Error>
          <S.Text>한줄요약</S.Text>
          <S.InputBox
            type="text"
            placeholder="상품 한줄요약을 작성해주세요"
            {...register("remarks")}
          />
          <S.Error>{formState.errors.remarks?.message}</S.Error>
          <S.Text>상품설명</S.Text>
          <S.QuillBox>
            <ReactQuill
              theme="snow"
              onChange={onChangeContents}
              placeholder="상품을 설명해주세요"
              style={{
                height: "259px",
                fontSize: "16px",
                fontStyle: "none",
              }}
            />
          </S.QuillBox>
          {/* <S.ContentsBox type="text" placeholder="상품을 설명해주세요" /> */}
          <S.Error>{formState.errors.contents?.message}</S.Error>
          <S.Text>판매가격</S.Text>
          <S.InputBox
            type="text"
            placeholder="상품판매가격을 입력해주세요"
            {...register("price")}
          />
          <S.Error>{formState.errors.price?.message}</S.Error>
          <S.Text>태그입력</S.Text>
          <S.InputBox type="text" placeholder="#태그 #태그 #태그" />
        </S.DetailBody>
        <S.Location>
          <S.LeftMap>
            <S.Text>거래위치</S.Text>
            <S.RealMap id="map" />
          </S.LeftMap>
          <S.RightMap>
            <S.MapDetail>
              <S.Text>GPS</S.Text>
              <div></div>
              <div>
                <S.Text>주소</S.Text>
                <S.AddInput />
                <S.AddInput />
              </div>
            </S.MapDetail>
          </S.RightMap>
        </S.Location>
        <S.Text>사진첨부</S.Text>
        <S.UploadImage>
          {fileUrls.map((el, index) => (
            <UpLoad
              key={uuidv4()}
              fileUrl={el}
              index={index}
              onChangeFileUrls={onChangeFileUrls}
            />
          ))}
        </S.UploadImage>
        <S.Text>메인 사진 설정</S.Text>
        <S.PickPicture>
          <S.RadioButton type="radio" />
          사진1
          <S.RadioButton type="radio" />
          사진2
        </S.PickPicture>
        <S.BtnWrap>
          <S.SubmitButton>등록하기</S.SubmitButton>
        </S.BtnWrap>
      </S.Form>
    </S.Container>
  );
}
