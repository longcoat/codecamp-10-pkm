import styled from "@emotion/styled";

export const backgroundImg = styled.div`
  background-image: url("/flo1.jpg");
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const loginContainer = styled.div`
  width: 400px;
  background: rgba(254, 254, 254, 0.075);
  border-radius: 15px;
  backdrop-filter: blur(10px);
`;

export const LoginWrapper = styled.form`
  width: 100%;
  padding: 50px;
`;

export const LoginHeader = styled.div`
  width: 100%;
  height: 40%;
`;

export const LoginBody = styled.div`
  width: 100%;
  padding: 48px;
  display: flex;
  flex-direction: column;
`;

export const InputBox = styled.input`
  width: 200px;
  height: 30px;
  margin-top: 3%;
  border: 0;
  border-radius: 5px;
  padding: 10px;
  color: black;
`;

// export const InputBox2 = styled.input`
//   width: 200px;
//   height: 30px;
//   margin-bottom: 15%;
//   margin-top: 3%;
//   border: 0;
//   border-radius: 5px;
// `;

export const LoginButton = styled.button`
  width: 200px;
  height: 30px;
  border: 0;
  border-radius: 5px;
  font-size: 15px;
  background-color: black;
  opacity: 59%;
  color: white;
  cursor: pointer;
  /* padding: 4px; */
`;

export const Error = styled.div`
  color: red;
  font-size: 12px;
  padding-top: 5px;
  padding-bottom: 25px;
`;

// export const BodyWrapper1 = styled.div``;

// export const BodyWrapper2 = styled.div``;
