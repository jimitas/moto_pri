import { selectMenuCreate } from "./set.js";
import { duplicationCheck } from "./duplicationCheck.js";
import { oneLineFormulaCreate } from "./oneLineFormulaCreate.js";
import { answerCreate } from "./answerCreate.js";
import * as se from "./se.js";

//初期設定
const select_menu_array = ["あまりのあるわり算"];
const kigo = "÷";
const select = document.getElementById("select");
const question = document.getElementById("question");

export function step22() {
  let index = "0";
  selectMenuCreate(select_menu_array);
  question_create();
  comment.innerHTML = "こたえにある「…」は「あまり」を表しています。";

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
    let a, b, amari, ans;

    //ここに式を記述する。
    while (check_array.length < 20) {
      //重複のない式の組合せが必ず20以上になるようにする。
      ans = Math.floor(Math.random() * 8 + 2);
      b = Math.floor(Math.random() * 8 + 2);
      amari = Math.floor(Math.random() * (b - 1) + 1);
      a = Math.floor(ans * b + amari);
      const check = +(a * 100 + b); //チェック用の値
      const result = duplicationCheck(check, check_array);

      if (result) {
        check_array.push(check);
        left_array.push(a);
        right_array.push(b);
        ans = ans + "…" + amari;
        answer_array.push(ans);
      }
    }
    oneLineFormulaCreate(left_array, kigo, right_array, answer_array);
    answerCreate(answer_array);
  }
}
