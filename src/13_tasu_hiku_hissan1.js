import { selectMenuCreate } from "./set.js";
import { duplicationCheck } from "./duplicationCheck.js";
import { columnCalcCreate2Digit } from "./columnCalcCreate.js";
import { answerCreate } from "./answerCreate.js";
import * as se from "./se.js";

//初期設定
const select_menu_array = ["+くり上がりなし", "+くり上がりあり", "-くりさがりなし", "-くりさがりあり"];

export function step13() {
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
          const a1 = Math.floor(Math.random() * 8 + 1);
          const b1 = Math.floor(Math.random() * (9 - a1) + 1);
          const a2 = Math.floor(Math.random() * 9 + 1);
          const b2 = Math.floor(Math.random() * (9 - a2));
          a = Math.floor(a1 * 10) + Math.floor(a2);
          b = Math.floor(b1 * 10) + Math.floor(b2);
          ans = Math.floor(a + b);
          kigo = "+";
          break;
        }
        case "1": {
          const a1 = Math.floor(Math.random() * 7 + 1);
          const b1 = Math.floor(Math.random() * (7 - a1) + 1);
          const a2 = Math.floor(Math.random() * 8 + 2);
          const b2 = Math.floor(Math.random() * a2 + (8 - a2) + 2);
          a = Math.floor(a1 * 10) + Math.floor(a2);
          b = Math.floor(b1 * 10) + Math.floor(b2);
          ans = Math.floor(a + b);
          kigo = "+";
          break;
        }
        case "2": {
          a = Math.floor(Math.random() * 4 + 5) * 10 + Math.floor(Math.random() * 4 + 5);
          b = Math.floor(Math.random() * 4 + 1) * 10 + Math.floor(Math.random() * 4 + 1);
          ans = a - b;
          kigo = "-";
          break;
        }
        case "3": {
          a = Math.floor(Math.random() * 4 + 5) * 10 + Math.floor(Math.random() * 4 + 1);
          b = Math.floor(Math.random() * 4 + 1) * 10 + Math.floor(Math.random() * 4 + 5);
          ans = a - b;
          kigo = "-";
          break;
        }
      }

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
