18.

  function boolean(input1, input2) {
	if(input1 === true || input2 === true) {
  return "true"
  }else if (input1 === false && input2 === false){
  return "false"
  }
}

19.

function evenOdd(num) {
	if(num 2 % === 0) {
     return "Even"
  } else if ( num === 0 ){
    return "Zero"           
   } else {
     return "Odd"
   }
}

20.

function temperature(num){
	if(num <= 18) {
  return "조금 춥네요"
	} else if (num >= 19 && num <= 23){
  return "날씨가 좋네요"
  } else if (num >=24){
  return "조금 덥습니다"
  }
}

21.

function days(month) {
	if(month === "1월" ||
     month === "3월" ||
     month === "5월" ||
     month === "7월" ||
     month === "8월" ||
     month === "9월" ||
     month === "10월" ||
     month === "12월" 
    ) {
  return 31
  }else if(month === "4월" ||
           month === "6월" ||
           month === "9월" ||
           month === "11월" 
          ){
    return 30
  }else {
    return 28
  }
}

// switch 문법


let day = “목요일”;

switch( day ){
  case "월요일" : {
    "월요일입니다."
    break;
  }
  case "화요일" : {
    "화요일입니다."
    break;
}
  default: day + "입니다."
}

//항상 디폴트 문은 아래쪽에 작성해야함 

18.

function boolean(input1, input2) {
  if(input1 || input2){
    return 'true'
  } else if (!input1 && !input2){
    return "false"
  }
 }
 
19.

function evenOdd(num) {
	if(num === 0) return "Zero";
  if(num % 2=== 0) {
    return "Even"
  }else if(num % 2 !== 0){
    return "Odd"
  }
}

20.

function temparature(num){
  if(num >= 24){
    return '조금 덥습니다'
  } else if(num < 24 && num > 18){
    return "날씨가 좋네요"
  } else {
    return "조금 춥네요"
  }  
}

21.

const monthList = {1: 31, 2: 28, 3:31, 4:30, 5:31,
  6:30, 7:31, 8:31, 9:30, 10:31, 11:30, 12:31};

return monthList[month]
 
 
