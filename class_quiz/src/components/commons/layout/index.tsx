import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import { useRouter } from "next/router";

// interface ILayoutProps {
//   children: JSX.Element;
// }

export default function LayOut(props) {
  const router = useRouter();
  console.log("==========");
  console.log(router.asPath);
  console.log("==========");
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <div style={{ height: "500px", display: "flex" }}>
        <div
          style={{
            width: "30%",
            backgroundColor: "skyblue",
            fontFamily: "myfont",
          }}
        >
          sideBar~~~
        </div>
        <div style={{ width: "70%", fontFamily: "myfont" }}>
          {props.children}
        </div>
      </div>
      <LayoutFooter />
    </>
  );
}
