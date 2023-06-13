const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = []
        while (arr.length < 3) {
            let ran = Math.floor(Math.random()*10)
            if(arr.indexOf(ran) < 0) {
                arr.push(ran)
            }
        }
        let comNum = arr.join("")
let answer = "";
let sCnt = 0;
let bCnt = 0;
let tryCnt = 0;

console.log("컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!")

rl.on("line", (line) => {
  console.log((tryCnt+1) + "번째 시도 : " + line);
  // 입력이 끝나면 close() 함수를 실행해야 한다
  let lineArr = line.split('');
  let comNumArr = comNum.split('');

  console.log(lineArr);
  console.log(comNumArr);

  for(let i = 0; i < lineArr.length; i++) {
    if(lineArr[i] === comNumArr[i]) {
      sCnt++;
    } else if(comNumArr.indexOf(lineArr[i]) > -1) {
      bCnt++;
    }
  }

  answer = String(bCnt) + "B" + String(sCnt) + "S";

  tryCnt++;

  console.log(answer);

  // rl.close();
  if(sCnt === 3) {
    rl.close();
  } else {
    sCnt = 0;
    bCnt = 0;
  }
})

// 2. 입력이 끝났을 때 사용하는 코드
rl.on("close", () => {
  // console.log(answer);
  console.log(tryCnt + "번만에 맞히셨습니다.");
  console.log("게임을 종료합니다.");
  process.exit();
})