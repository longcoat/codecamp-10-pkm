import { gql, useQuery, useMutation } from "@apollo/client";
import { Fragment } from "react";

const FETCH_PRODUCTS = gql`
  query fetchProducts($page: Int) {
    fetchProducts(page: $page) {
      _id
      seller
      name
      detail
      price
    }
  }
`;

const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId: ID) {
    deleteProduct(productId: $productId) {
      _id
      message
    }
  }
`;

export default function MapProductPage() {
  const { data } = useQuery(FETCH_PRODUCTS);
  console.log(data);

  const [deleteProduct] = useMutation(DELETE_PRODUCT);

  const onClickDelete = async (event) => {
    console.log(event);
    await deleteProduct({
      variables: {
        productId: event.target.id,
      },
      refetchQueries: [{ query: FETCH_PRODUCTS }],
    });
  };
  //리패치쿼리
  return (
    <div>
      {data?.fetchProducts.map((el) => (
        <div key={el._id}>
          <input type="checkbox" />
          <span style={{ margin: "2%" }}>{el.seller}</span>
          <span style={{ margin: "2%" }}>{el.name}</span>
          <span style={{ margin: "2%" }}>{el.detail}</span>
          <span style={{ margin: "2%" }}>{el.price}</span>
          <span style={{ margin: "2%" }}>
            <button id={el._id} onClick={onClickDelete}>
              삭제하기
            </button>
          </span>
        </div>
      ))}
    </div>
  );
}
