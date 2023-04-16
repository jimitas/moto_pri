import { selectMenuCreate } from "./set.js";
import { duplicationCheck } from "./duplicationCheck.js";
import { columnCalcCreateDivision } from "./columnCalcCreate.js";
import { answerCreate } from "./answerCreate.js";
import * as se from "./se.js";

//初期設定
const select_menu_array = ["２けた÷２けた", "３けた÷２けた", "４けた÷２けた"];
const kigo = "÷";

export function step26() {
  let index = "0";
  selectMenuCreate(select_menu_array);
  question_create();
  // comment.innerHTML = "こたえにある「…」は「あまり」を表しています。";

  // セレクトモードの作成・設定
  select.addEventListener("change", () => {
    index = select.value;
    question_create();
  });

  //問題作成を行うボタンの設置
  document.getElementById("question").addEventListener("click", () => question_create());

  //問題作成
  function question_create() {
    const left_array = []; //式の左の値を格納する
    const right_array = []; //式の右の値を格納する
    const answer_array = []; //答えを格納する
    const check_array = []; //重複をチェックするための配列
    se.set.currentTime = 0;
    se.set.play();
    let a, b, c, ans;
    //ここに式を記述する。

    while (check_array.length < 9) {
      //重複のない式の組合せが必ず9以上になるようにする。
      switch (index) {
        case "0": {
          a = Math.floor(Math.random() * 50 + 50); //a:わられる数　50～99
          b = Math.floor((Math.random() * a) / 2 + 10); //b:わる数 ２けた
          break;
        }
        case "1": {
          a = Math.floor(Math.random() * 899 + 100); //a:わられる数
          b = Math.floor(Math.random() * 89 + 10); //b:わる数　２～8
          break;
        }
        case "2": {
          b = Math.floor(Math.random() * 49 + 50); //b:わる数　49～99
          a = Math.floor(Math.random() * b * 80 + 1000); //49:0<a<3899,99:0<a<8899
          break;
        }
      }

      if (a % b === 0) {
        ans = Math.floor(a / b);
      } else {
        ans = `${Math.floor(a / b)}あまり${a % b}`;
      }

      const check = +(a * 100 + b); //チェック用の値
      const result = duplicationCheck(check, check_array);

      // if (result) {
      check_array.push(check);
      left_array.push(a);
      right_array.push(b);
      answer_array.push(ans);
      // }
    }
    columnCalcCreateDivision(left_array, kigo, right_array);
    answerCreate(answer_array);
  }
}
