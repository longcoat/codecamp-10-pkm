import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

export default function QuizPage2() {
  const router = useRouter();
  const [amount, setAmount] = useState("");
  const onClickPayment = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp40507114"); // Example: imp00000000

    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "nice",
        pay_method: "card", // card, vbank 등
        // merchant_uid: "ORD20180131-0000011", // 중복될 시, 결제 안됨! 주석해놓으면 알아서 생성됨
        name: "노르웨이 회전 의자",
        amount,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/28-01-payment", // 모바일에서는 결제시, 결제페이지로 사이트가 이동됨 결제끝나면 여기로 다시와줘~
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          router.push("/28/payment/complete");
          console.log(rsp);
          //   const paymentDate = new Date(); // 프론트엔드에서 시간을 만드는 것은 안됨!

          // 백엔드에 결제관련 데이터 넘겨주기 => 즉, 뮤테이션 실행하기
          // createPointTransactionOfLoading      포인트 충전해서 결제~
        } else {
          // 결제 실패 시 로직,
          alert("결제에 실패했습니다! 다시 시도해 주세요!");
        }
      }
    );
  };

  const onChangePay = (event) => {
    console.log(event.target.value);
    setAmount(event.target.value);
  };

  return (
    <>
      <Head>
        {/* jQuery */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        {/* iamport.payment.js */}
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <select onChange={onChangePay}>
        <option value="">선택</option>
        <option value="500">500원</option>
        <option value="1000">1000원</option>
        <option value="2000">2000원</option>
        <option value="5000">5000원</option>
      </select>
      <button onClick={onClickPayment}>충전하기</button>
    </>
  );
}
