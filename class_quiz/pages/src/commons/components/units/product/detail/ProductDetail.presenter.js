export default function ProductDetailUI(props) {
  return (
    <div>
      <div>판매자:{props.data?.fetchProduct.seller} </div>
      <div>상품명:{props.data?.fetchProduct.name} </div>
      <div>상품내용:{props.data?.fetchProduct.detail} </div>
      <div>
        상품가격:{props.data ? props.data.fetchProduct.price : "로딩중입니다."}
      </div>
    </div>
  );
}
