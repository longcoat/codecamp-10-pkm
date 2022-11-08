import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import ProductWriteUI from "./ProductWrite.presenter";
import { CREATE_PRODUCT } from "./ProductWrite.queries";

export default function ProductWrite() {
  const router = useRouter();

  const [createProductInput] = useMutation(CREATE_PRODUCT);

  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");
  const [isActive, setIsActive] = useState(false);

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
      router.push(`/06/boards_submit/${result.data.createProduct._id}`);
    } catch (error) {
      alert("뭔가 잘못입력하셨네요");
    }
  };

  const onChangeSeller = (event) => {
    setSeller(event.target.value);
    if (event.target.value && name && detail && price) {
      setIsActive(true);
    }
  };
  const onChangeName = (event) => {
    setName(event.target.value);
    if (seller && event.target.value && detail && price) {
      setIsActive(true);
    }
  };
  const onChangeDetail = (event) => {
    setDetail(event.target.value);
    if (seller && name && event.target.value && price) {
      setIsActive(true);
    }
  };
  const onChangePrice = (event) => {
    setPrice(Number(event.target.value));
    if (seller && name && detail && event.target.value) {
      setIsActive(true);
    }
  };

  return (
    <div>
      <ProductWriteUI
        seller={onChangeSeller}
        name={onChangeName}
        detail={onChangeDetail}
        price={onChangePrice}
        click={onClickSubmit}
        isActive={isActive}
      />
    </div>
  );
}
