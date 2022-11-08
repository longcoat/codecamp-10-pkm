import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      _id
      seller
      name
      detail
      price
    }
  }
`;

export default function productBoard() {
  const router = useRouter();

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: {
      productId: router.query.productId,
    },
  });
  console.log(router);
  return (
    <div>
      <div>판매자:{data?.fetchProduct.seller} </div>
      <div>상품명:{data?.fetchProduct.name} </div>
      <div>상품내용:{data?.fetchProduct.detail} </div>
      <div>상품가격:{data ? data.fetchProduct.price : "로딩중입니다."} </div>
    </div>
  );
}
