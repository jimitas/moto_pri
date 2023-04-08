import { selectMenuCreate } from "./set.js";
import { duplicationCheck } from "./duplicationCheck.js";
import { columnCalcCreate2Digit } from "./columnCalcCreate.js";
import { answerCreate } from "./answerCreate.js";
import * as se from "./se.js";

//初期設定
const select_menu_array = ["くり上がりなし", "くり上がり1回A", "くり上がり1回B", "くり上がり2回"];
const kigo = "×";

export function step23() {
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
    let a, b, c, ans;
    //ここに式を記述する。
    while (check_array.length < 15) {
      //重複のない式の組合せが必ず15以上になるようにする。
      if (index == "0") b = Math.floor(Math.random() * 9 + 1);
      else b = Math.floor(Math.random() * 8 + 2);
      switch (b) {
        case 1:
          c = 9;
          break;
        case 2:
          c = 4;
          break;
        case 3:
          c = 3;
          break;
        case 4:
          c = 2;
          break;
        default:
          c = 1;
          break;
      }
      switch (index) {
        case "0": {
          a = Math.floor(Math.random() * c + 1) * 10 + Math.floor(Math.random() * c + 1);
          break;
        }
        case "1": {
          a = Math.floor(Math.random() * (9 - c) + c + 1) * 10 + Math.floor(Math.random() * c + 1);
          break;
        }
        case "2": {
          a = Math.floor(Math.random() * c + 1) * 10 + Math.floor(Math.random() * (9 - c) + c + 1);
          break;
        }
        case "3": {
          a = Math.floor(Math.random() * (9 - c) + c + 1) * 10 + Math.floor(Math.random() * (9 - c) + c + 1);
          break;
        }
      }
      ans = Math.floor(a * b);
      const check = +(a * 100 + b); //チェック用の値
      const result = duplicationCheck(check, check_array);

      if (result) {
        check_array.push(check);
        left_array.push(a);
        right_array.push(b);
        answer_array.push(ans);
      }
    }
    columnCalcCreate2Digit(left_array, kigo, right_array);
    answerCreate(answer_array);
  }
}
