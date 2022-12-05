import { Component } from "react";

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  onClickCountUp = () => {
    console.log(this.state.count);
    this.setState({
      count: 1,
    });
  };

  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>카운트 올리기!!!!</button>
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
