import { selectMenuCreate } from "./set.js";
import { duplicationCheck } from "./duplicationCheck.js";
import { oneLineFormulaCreate } from "./oneLineFormulaCreate.js";
import { answerCreate } from "./answerCreate.js";
import * as se from "./se.js";

//初期設定
const select_menu_array = ["くりさがり　あり", "１□-□"];
const kigo = "-";
const select = document.getElementById("select");
const question = document.getElementById("question");

export function step07() {
  let index = "0";
  selectMenuCreate(select_menu_array);
  question_create();

  // セレクトモードの作成・設定
  select.addEventListener("change", () => {
    index = select.value;
    question_create();
  });
  //問題作成を行うボタンの設置
  question.addEventListener("click", () => question_create());
  //問題作成
  function question_create() {
    const left_array = []; //式の左の値を格納する
    const right_array = []; //式の右の値を格納する
    const answer_array = []; //答えを格納する
    const check_array = []; //重複をチェックするための配列
    se.set.currentTime = 0;
    se.set.play();
    let a, b, ans;

    //ここに式を記述する。
    while (check_array.length < 20) {
      switch (index) {
        case "0":
          a = Math.floor(Math.random() * 9 + 11);
          const ichi = 20 - a;
          b = Math.floor(Math.random() * ichi + (10 - ichi));
          break;
        case "1":
          a = Math.floor(Math.random() * 9 + 11);
          b = Math.floor(Math.random() * (a - 11) + 1);
          break;
      }
      //重複のない式の組合せが必ず20以上になるようにする。

      ans = a - b;
      const check = +(a * 100 + b); //チェック用の値
      const result = duplicationCheck(check, check_array);

      if (result) {
        check_array.push(check);
        left_array.push(a);
        right_array.push(b);
        answer_array.push(ans);
      }
    }
    oneLineFormulaCreate(left_array, kigo, right_array, answer_array);
    answerCreate(answer_array);
  }
}
