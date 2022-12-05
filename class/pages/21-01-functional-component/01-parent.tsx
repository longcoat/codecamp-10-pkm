import ChildPage from "./02-child";

export default function ParentPage() {
  return (
    <>
      {/* <ChildPage count={10} /> */}
      {ChildPage("너부리")}
    </>
  );
}
