import { selectMenuCreate } from "./set.js";
import { duplicationCheck } from "./duplicationCheck.js";
import { oneLine3FormulaCreate } from "./oneLineFormulaCreate.js";
import { answerCreate } from "./answerCreate.js";
import * as se from "./se.js";

//初期設定
const select_menu_array = ["〇+〇+〇", "〇―〇―〇", "+と-のまじった"];
const select = document.getElementById("select");
const question = document.getElementById("question");

export function step05() {
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
    const kigo1_array = []; //式の１つの目の記号を格納する
    const mid_array = []; //式の中の値を格納する
    const kigo2_array = []; //式の１つの目の記号を格納する
    const right_array = []; //式の右の値を格納する
    const answer_array = []; //答えを格納する
    const check_array = []; //重複をチェックするための配列
    se.set.currentTime = 0;
    se.set.play();
    let a, b, c, kigo1, kigo2, ans;

    //ここに式を記述する。
    while (check_array.length < 10) {
      //重複のない式の組合せが必ず10以上になるようにする。

      switch (index) {
        case "0":
          a = Math.floor(Math.random() * 9 + 1);
          b = Math.floor(Math.random() * 9 + 1);
          c = Math.floor(Math.random() * Math.min(20 - (a + b), 9) + 1);
          ans = Math.floor(a + b + c);
          kigo1 = "+";
          kigo2 = "+";
          break;
        case "1":
          a = Math.floor(Math.random() * 14 + 5);
          b = Math.floor(Math.random() * Math.min(a - 2, 9) + 1);
          c = Math.floor(Math.random() * Math.min(a - b - 1, 9) + 1);
          ans = Math.floor(a - b - c);
          kigo1 = "-";
          kigo2 = "-";
          break;
        case "2":
          const mode = Math.floor(Math.random() * 2 + 1);
          if (mode === 1) {
            a = Math.floor(Math.random() * 9 + 1);
            b = Math.floor(Math.random() * 9 + 1);
            c = Math.floor(Math.random() * (a + b - 1) + 1);
            ans = Math.floor(a + b - c);
            kigo1 = "+";
            kigo2 = "-";
          } else {
            a = Math.floor(Math.random() * 14 + 5);
            b = Math.floor(Math.random() * Math.min(a, 9) + 1);
            c = Math.floor(Math.random() * Math.min(20 - (a - b), 9) + 1);
            ans = Math.floor(a - b + c);
            kigo1 = "-";
            kigo2 = "+";
          }
          break;
      }

      const check = +(a * 100 + b * 10 + c); //チェック用の値
      const result = duplicationCheck(check, check_array);

      if (result) {
        check_array.push(check);
        left_array.push(a);
        mid_array.push(b);
        right_array.push(c);
        kigo1_array.push(kigo1);
        kigo2_array.push(kigo2);
        answer_array.push(ans);
      }
    }
    oneLine3FormulaCreate(left_array, kigo1_array, mid_array, kigo2_array, right_array);
    answerCreate(answer_array);
  }
}
