export default function QuizPage() {
  const onClickBtn = (qqq) => () => {
    console.log(qqq);
  };

  return (
    <>
      <button onClick={onClickBtn(123)}>보노보노</button>
    </>
  );
}
