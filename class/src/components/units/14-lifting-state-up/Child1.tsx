export default function Child1(props: any) {
  //  부모의 state 조작방법 2-번째

  const onClickChild1 = () => {
    props.setCount((prev: number) => prev + 1);
  };

  return (
    <div>
      <div>자식1의 카운트: {props.count}</div>
      <button onClick={onClickChild1}>카운트 올리기!!!</button>
    </div>
  );
}
