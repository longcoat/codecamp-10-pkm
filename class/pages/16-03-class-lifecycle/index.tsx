import Router from "next/router";
import { Component } from "react";

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    console.log("그려지고 나서 실행!!");
  }

  componentDidUpdate() {
    console.log("변경되고 나서 실행!!");
  }

  componentWillUnmount() {
    console.log("사라질 때 실행!!");
    // 체팅방 나가기 API
  }

  onClickCountUp = () => {
    console.log(this.state.count);
    this.setState({
      count: 1,
    });
  };

  onClickMove = () => {
    void Router.push("/");
  };

  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>카운트 올리기!!!!</button>
        <button onClick={this.onClickMove}>나가기!!</button>
      </>
    );
  }
}

// class Monster {

//     power = 50

//     attack(){
//         console.log("공격하라!!!!!")
//     }
// }

// class 슈퍼몬스터 extends Monster{           => 상속
//     run(){
//         console.log("도망쳐!!!!!!")
//     }
//     // 오버라이딩  (위에꺼 어택 무시되고 밑에꺼가 인정됨)
//     attack () {

//     }
// }

// const mymonster = new Monster()
// mymonster.attack()
// mymonster.power

// const 나의슈퍼몬스터 = new 슈퍼몬스터()
// 나의슈퍼몬스터.attack()
// 나의슈퍼몬스터.run()
