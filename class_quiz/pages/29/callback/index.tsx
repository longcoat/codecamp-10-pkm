import axios from "axios";
import { useState } from "react";

export default function Day29Quiz() {
  const [myData, setMyData] = useState([]);
  const [myPromiseData, setMyPromiseData] = useState([]);
  const [myAsyncData, setMyAsyncData] = useState([]);

  const myCallback = () => {
    const aa = new XMLHttpRequest();
    aa.open("get", "http://numbersapi.com/random?min=1&max=200");
    aa.send();
    aa.addEventListener("load", (res) => {
      const num = res.target.response.split(" ")[0];
      console.log(num);
      const post = new XMLHttpRequest();
      post.open("get", `https://koreanjson.com/posts/${num}`);
      post.send();
      post.addEventListener("load", (res) => {
        const userId = JSON.parse(res.target.response).UserId;

        const cc = new XMLHttpRequest();
        cc.open("get", `https://koreanjson.com/posts?userId=${userId}`);
        cc.send();
        cc.addEventListener("load", (res) => {
          console.log(res);
          const result = JSON.parse(res.target.response);
          console.log(result);
          setMyData(result);
          // console.log(myData);
        });
      });
    });
  };

  console.log(myData);
  const myPromise = () => {
    axios
      .get(`http://numbersapi.com/random?min=1&max=200`)
      .then((res) => {
        console.log(res);
        const num = res.data.split(" ")[0];
        console.log(num);
        return axios.get(`https://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        console.log(res);
        const userId = res.data.UserId;
        return axios.get(`https://koreanjson.com/posts?userId=${userId}`);
      })
      .then((res) => {
        // res 최종 결과
        setMyPromiseData(res.data);
      });
  };

  const myAsyncAwait = async () => {
    const aa = await axios.get(`http://numbersapi.com/random?min=1&max=200`);
    const num = aa.data.split(" ")[0];
    const bb = await axios.get(`https://koreanjson.com/posts/${num}`);
    const userId = bb.data.UserId;
    const cc = await axios.get(`https://koreanjson.com/posts?userId=${userId}`);
    setMyAsyncData(cc.data);
  };

  return (
    <>
      결과 : <button onClick={myCallback}>Callback</button>
      {myData.map((el) => (
        <div key={el.id}>
          <div>{el.title}</div>
        </div>
      ))}
      결과 :<button onClick={myPromise}>Promise</button>
      {myPromiseData.map((el) => (
        <div key={el.id}>
          <div>{el.title}</div>
        </div>
      ))}
      결과 :<button onClick={myAsyncAwait}>Async/Await</button>
      {myAsyncData.map((el) => (
        <div key={el.id}>
          <div>{el.title}</div>
        </div>
      ))}
    </>
  );
}
