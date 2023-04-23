import { selectMenuCreate } from "./set.js";
import { duplicationCheck } from "./duplicationCheck.js";
import { oneLineFormulaCreate } from "./oneLineFormulaCreate.js";
import { columnCalcCreateDecimals } from "./columnCalcCreate.js";
import { columnCalcCreateDivision } from "./columnCalcCreate.js";
import { answerCreate } from "./answerCreate.js";
import * as se from "./se.js";

//初期設定
const select_menu_array = ["小数×１けた", "小数÷１けた", "小数×２けた", "小数÷２けた"];

export function step27() {
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
    let a, b, c, ans, kigo;

    //ここに式を記述する。
    while (check_array.length < 20) {
      //重複のない式の組合せが必ず20以上になるようにする。
      switch (index) {
        case "0": {
          c = Math.floor(Math.random() * 9);
          const d = Math.floor(Math.random() * 9 + 1);
          a = Math.floor(c * 10 + d) / 10;
          b = Math.floor(Math.random() * 9 + 1);
          ans = a * b;
          if (!Number.isInteger(ans)) ans = ans.toFixed(1);
          kigo = "×";
          break;
        }
        case "1": {
          b = Math.floor(Math.random() * 8 + 2);
          ans = Math.floor(Math.random() * 8 + 2);
          a = (b * ans) / 10;
          if (Number.isInteger(a)) {
            a = a + b / 10;
          }
          kigo = "÷";
          break;
        }
        case "2": {
          c = Math.floor(Math.random() * 9);
          const d = Math.floor(Math.random() * 9 + 1);
          a = Math.floor(c * 10 + d) / 10;
          b = Math.floor(Math.random() * 89 + 10);
          ans = a * b;
          if (!Number.isInteger(ans)) ans = ans.toFixed(1);
          kigo = "×";
          break;
        }

        case "3": {
          a = Math.floor(Math.random() * 399 + 500) / 10; //a:わられる数
          b = Math.floor((Math.random() * (a - 11)) / 2 + 11); //b:わる数　２けた
          if (Number.isInteger(a)) {
            a = a + b / 10;
          }

          let amari = a % b;
          if (!Number.isInteger(amari)) {
            amari = amari.toFixed(1);
          }

          if (amari === 0) {
            ans = Math.floor(a / b);
          } else {
            ans = `${Math.floor(a / b)}あまり${amari}`;
          }
          kigo = "÷";
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
    switch (index) {
      case "0":
        oneLineFormulaCreate(left_array, kigo, right_array, answer_array);
        break;
      case "1":
        oneLineFormulaCreate(left_array, kigo, right_array, answer_array);
        break;
      case "2":
        columnCalcCreateDecimals(left_array, kigo, right_array, 3);
        answer_array.splice(9, 11);
        break;
      case "3":
        columnCalcCreateDivision(left_array, kigo, right_array);
        answer_array.splice(9, 11);
        break;
    }
    answerCreate(answer_array);
  }
}
