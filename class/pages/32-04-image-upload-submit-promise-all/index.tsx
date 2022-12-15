import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  const [files, setFiles] = useState<File[]>([]);

  const [createBoard] = useMutation(CREATE_BOARD);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onClickSubmit = async () => {
    // 1. uploadFile
    // 1-1) 안좋은예제: Promise.all 안썼을 때 - for문 사용해도 마찬가지
    // const resultFile0 = await uploadFile({ variables: { file: files[0] } });
    // const resultFile1 = await uploadFile({ variables: { file: files[1] } });
    // const resultFile2 = await uploadFile({ variables: { file: files[2] } });
    // const url0 = resultFile0.data?.uploadFile.url;
    // const url1 = resultFile1.data?.uploadFile.url;
    // const url2 = resultFile2.data?.uploadFile.url;
    // const resultUrls = [url0, url1, url2]; // [ 강아지1.jpg, 강아지2.jpg, 고양이1.png ]

    // 1-2) 좋은예제: Promise.all 썼을 때
    // const results = await Promise.all([
    //   uploadFile({ variables: { file: files[0] } }),
    //   uploadFile({ variables: { file: files[1] } }),
    //   uploadFile({ variables: { file: files[2] } }),
    // ]);
    // console.log(results); // [resultFile0, resultFile1, resultFile2]
    // const resultUrls = results.map((el) => el.data?.uploadFile.url); // [ 강아지1.jpg, 강아지2.jpg, 고양이1.png ]

    // 1-3) 좋은예제: Promise.all 썼을 때 - 리팩토링
    // files - [File0, File1, File2]
    // files.map((el) => uploadFile({ variables: { file: el } })); // [ uploadFile({ ...: File0 }), uploadFile({ ...: File1 }), uploadFile({ ...: File2 })  ]
    const results = await Promise.all(
      files.map(async (el) =>
        el !== undefined
          ? await uploadFile({ variables: { file: el } })
          : undefined
      )
    );
    console.log(results); // [resultFile0, resultFile1, resultFile2]
    const resultUrls = results.map((el) =>
      el !== undefined ? el.data?.uploadFile.url : ""
    ); // [ 강아지1.jpg, 강아지2.jpg, 고양이1.png ]

    // 2. createBoard
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer: "철수",
          password: "1234",
          title: "제목입니다~~",
          contents: "내용입니다@@@",
          images: resultUrls,
        },
      },
    });
    console.log(result);
  };

  const onChangeFile =
    (index: number) => async (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0]; // 배열로 들어오는 이유: <input type="file" multiple /> 일 때, 여러개 드래그 가능
      if (file === undefined) return;
      console.log(file);

      // const result = await uploadFile({ variables: { file } });
      // console.log(result.data?.uploadFile.url);
      // setImageUrl(result.data?.uploadFile.url ?? "");

      // 1. 임시URL 생성 => (가짜URL - 내 브라우저에서만 접근 가능)
      // const result = URL.createObjectURL(file);
      // console.log(result);
      // setImageUrl(result);

      // 2. 임시URL 생성 => (진짜URL - 다른 브라우저에서도 접근 가능)
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (event) => {
        if (typeof event.target?.result === "string") {
          console.log(event.target?.result); // 게시판에서 event.target.id를 쓰면 eslint가 잡았던 이유: event.target은 태그만을 가르키지 않음

          // setImageUrl(event.target?.result);
          // imageUrls[index] = event.target?.result // 원본을 바꾸면 인식 못함
          const tempUrls = [...imageUrls];
          tempUrls[index] = event.target?.result;
          setImageUrls(tempUrls);

          // setFile(file);
          // files[index] = file // 원본을 바꾸면 인식 못함
          const tempFiles = [...files];
          tempFiles[index] = file;
          setFiles(tempFiles);
        }
      };
    };

  return (
    <>
      <input type="file" onChange={onChangeFile(0)} />
      <input type="file" onChange={onChangeFile(1)} />
      <input type="file" onChange={onChangeFile(2)} />
      <img src={imageUrls[0]} />
      <img src={imageUrls[1]} />
      <img src={imageUrls[2]} />
      {/* <img src={`https://storage.googleapis.com/${imageUrl}`} /> */}

      <button onClick={onClickSubmit}>게시글 등록하기</button>
    </>
  );
}
