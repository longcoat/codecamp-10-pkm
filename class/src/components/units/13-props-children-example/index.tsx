interface IProps {
  school: string;
  children: JSX.Element;
}

export default function Example(props: IProps) {
  return (
    <>
      <div>안녕하세요 보노보노입니다</div> {/* 이거는 바뀌지 않음*/}
      <div>{props.school}</div>
      <div>{props.children}</div>
      <div>안녕하세요 너부리입니다</div> {/* 이거는 바뀌지 않음*/}
    </>
  );
}
