import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
    }
  }
`;

export default function SprintDay5() {
  const router = useRouter();

  const [createProductInput] = useMutation(CREATE_PRODUCT);

  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");

  const onClickSubmit = async () => {
    try {
      const result = await createProductInput({
        variables: {
          seller,
          createProductInput: {
            name,
            detail,
            price: Number(price),
          },
        },
      });
      console.log(result);
      alert("게시판이 등록됐습니다.");
      router.push(`/05/boards_submit/${result.data.createProduct._id}`);
    } catch (error) {
      alert("뭔가 잘못입력하셨네요");
    }
  };

  const onChangeSeller = (event) => {
    setSeller(event.target.value);
  };
  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onChangeDetail = (event) => {
    setDetail(event.target.value);
  };
  const onChangePrice = (event) => {
    setPrice(event.target.value);
  };

  return (
    <div>
      판매자
      <input type="text" onChange={onChangeSeller} />
      상품명
      <input type="text" onChange={onChangeName} />
      상품내용
      <input type="text" onChange={onChangeDetail} />
      상품가격
      <input type="text" onChange={onChangePrice} />
      <button onClick={onClickSubmit}>상품등록하기</button>
    </div>
  );
}
