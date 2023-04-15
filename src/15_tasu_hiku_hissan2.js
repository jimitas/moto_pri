import { selectMenuCreate } from "./set.js";
import { duplicationCheck } from "./duplicationCheck.js";
import { columnCalcCreate2Digit } from "./columnCalcCreate.js";
import { columnCalcCreate3Digit } from "./columnCalcCreate.js";
import { answerCreate } from "./answerCreate.js";
import * as se from "./se.js";

//初期設定
const select_menu_array = ["100をこえるたし算", "99+99まで", "100をこえる引き算", "1○○-○○"];

export function step15() {
  let index = "0";
  selectMenuCreate(select_menu_array);
  question_create();

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
    let a, b, ans, kigo;
    //ここに式を記述する。
    while (check_array.length < 15) {
      //重複のない式の組合せが必ず15以上になるようにする。

      switch (index) {
        case "0": {
          a = Math.floor(Math.random() * 10 + 100);
          b = Math.floor(Math.random() * (a - 20) + 10);
          a = a - b;
          ans = Math.floor(a + b);
          kigo = "+";
          break;
        }
        case "1": {
          a = Math.floor(Math.random() * 49 + 50);
          b = Math.floor(Math.random() * 49 + 50);
          ans = Math.floor(a + b);
          kigo = "+";
          break;
        }
        case "2": {
          a = Math.floor(Math.random() * 49 + 150);
          b = Math.floor(Math.random() * 49 + 1);
          ans = a - b;
          kigo = "-";
          break;
        }
        case "3": {
          a = Math.floor(Math.random() * 9 + 100);
          b = Math.floor(Math.random() * 99 + 1);
          ans = a - b;
          kigo = "-";
          break;
        }
      }

      const check = +(a * 1000 + b); //チェック用の値
      const result = duplicationCheck(check, check_array);

      if (result) {
        check_array.push(check);
        left_array.push(a);
        right_array.push(b);
        answer_array.push(ans);
      }
    }

    switch (index) {
      case "0":
        columnCalcCreate2Digit(left_array, kigo, right_array);
        break;
      case "1":
        columnCalcCreate2Digit(left_array, kigo, right_array);
        break;
      case "2":
        columnCalcCreate3Digit(left_array, kigo, right_array);
        break;
      case "3":
        columnCalcCreate3Digit(left_array, kigo, right_array);
        break;
    }
    answerCreate(answer_array);
  }
}
