import { selectMenuCreate } from "./set.js";
import { duplicationCheck } from "./duplicationCheck.js";
import { columnCalcCreateDecimals } from "./columnCalcCreate.js";
import { columnCalcCreateDecimals2 } from "./columnCalcCreate.js";
import { answerCreate } from "./answerCreate.js";
import * as se from "./se.js";

//初期設定
const select_menu_array = ["整数×小数", "小数×小数", "小数×小数(2)"];
const kigo = "×";

export function step30() {
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
    while (check_array.length < 9) {
      //重複のない式の組合せが必ず9以上になるようにする。
      switch (index) {
        case "0": {
          a = Math.floor(Math.random() * 90 + 10);
          b = Math.floor(Math.random() * 70 + 10) / 10;
          if (Number.isInteger(b)) {
            b = Math.min(b + a / 10, 9.9);
          }
          break;
        }

        case "1": {
          a = Math.floor(Math.random() * 90 + 10) / 10;
          if (Number.isInteger(a)) {
            a = Math.min(a + a / 10, 9.9);
          }

          b = Math.floor(Math.random() * 90 + 10) / 10;
          if (Number.isInteger(b)) {
            b = Math.min(b + b / 10, 9.9);
          }

          break;
        }

        case "2": {
          a = Math.floor(Math.random() * 900 + 100) / 100;
          if (Number.isInteger(a) || Number.isInteger(a * 10)) {
            a = Math.min(a + 0.01, 9.99);
          }

          b = Math.floor(Math.random() * 90 + 10) / 10;
          if (Number.isInteger(b)) {
            b = Math.min(b + b / 10, 9.9);
          }
        }
      }
      ans = a * b;
      ans = Math.round(ans * 1000) / 1000;//小数点第３位までで求める。

      const check = +(a * 100 + b); //チェック用の値
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
        columnCalcCreateDecimals(left_array, kigo, right_array, 3);
        break;
      case "1":
        columnCalcCreateDecimals(left_array, kigo, right_array, 3);
        break;
      case "2":
        columnCalcCreateDecimals2(left_array, kigo, right_array, 3);
        break;
    }
    answerCreate(answer_array);
  }
}
