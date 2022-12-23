import * as S from "./ProductCommentWrite.styles";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { useCreateUseditemQuestion } from "../../../../commons/hooks/mutation/useCreateUseditemQuestion";
import { useUpdateUseditemQuestion } from "../../../../commons/hooks/mutation/useUpdateUseditemQuestion";
import { Modal } from "antd";
import { FETCH_USED_ITEM_QUESTIONS } from "../../../../commons/hooks/queries/useFetchUseditemQuestions";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function ProductCommentWrite(props) {
  const [createUseditemQuestion] = useCreateUseditemQuestion();
  const [updateUseditemQuestion] = useUpdateUseditemQuestion();

  const { handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const onChangeComment = (value: string) => {
    // console.log(value);
    setValue("contents", value);
    void trigger("contents");
  };

  const onClickQuestion = async (data: any) => {
    try {
      // contentsInput.current.focus();
      await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents: data.contents,
          },
          useditemId: router.query.productID,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: {
              useditemId: router.query.productID,
            },
          },
        ],
      });
      Modal.success({
        content: "댓글 등록이 완료되었습니다.",
      });
      // setValue("contents", "");
      // void trigger("contents");
    } catch (error) {
      if (error instanceof Error) return console.log(error.message);
    }
  };

  // 댓글 수정시,
  const onClickEdit = async (data) => {
    console.log(data);

    interface IMyVariables {
      contents?: string | number;
    }

    const myVariables: IMyVariables = {};

    console.log(data.contents);
    console.log(props.el._id);

    if (data.contents) myVariables.contents = data.contents;
    try {
      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: myVariables,
          useditemQuestionId: props.el._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: {
              useditemId: router.query.productID,
            },
          },
        ],
      });

      Modal.success({
        content: "댓글 수정이 완료되었습니다.",
      });

      props.setIsReplyEdit?.(false);
    } catch (error) {
      if (error instanceof Error) return console.log(error.message);
    }
  };

  return (
    <>
      <S.Container
        opnSubmit={
          props.isReplyEdit
            ? handleSubmit(onClickEdit)
            : handleSubmit(onClickQuestion)
        }
      >
        <S.QQbox>
          <S.QImg src="/yellowpencil.png" />
          <S.Text>문의하기</S.Text>
        </S.QQbox>
        <S.QuillBox>
          <ReactQuill
            theme="snow"
            onChange={onChangeComment}
            style={{ height: "150px" }}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            defaultValue={props.el?.contents ?? ""}
          />
        </S.QuillBox>
        <S.Qbox>
          <S.QButton>{props?.isReplyEdit ? "수정하기" : "문의하기"}</S.QButton>
        </S.Qbox>
        <S.CommentList>
          <S.CommentWrapper>
            <S.CommentArray>
              <S.RComment>
                <S.ImageBox src="/profile.png"></S.ImageBox>
                <S.RightBoxx>
                  <S.CommentBox>
                    <S.Writer>땅찌</S.Writer>
                    <S.Content>
                      가격 할인 가능한가요?? 기존 가격은 조금 비싸네요.
                    </S.Content>
                  </S.CommentBox>
                  <S.Date>
                    <S.DateDetail>2021.02.22</S.DateDetail>
                  </S.Date>
                </S.RightBoxx>
              </S.RComment>
            </S.CommentArray>
          </S.CommentWrapper>
        </S.CommentList>
      </S.Container>
    </>
  );
}
