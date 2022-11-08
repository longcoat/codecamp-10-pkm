import * as S from "./ProductWrite.styles";

export default function ProductWriteUI(props) {
  return (
    <div>
      판매자
      <S.Input type="text" onChange={props.seller} />
      상품명
      <S.Input type="text" onChange={props.name} />
      상품내용
      <S.Input type="text" onChange={props.detail} />
      상품가격
      <S.Input type="text" onChange={props.price} />
      <S.Button isActive={props.isActive} onClick={props.click}>
        상품등록하기
      </S.Button>
    </div>
  );
}
