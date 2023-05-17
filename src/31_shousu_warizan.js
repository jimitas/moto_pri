import { selectMenuCreate } from "./set.js";
import { duplicationCheck } from "./duplicationCheck.js";
import { oneLineFormulaCreate } from "./oneLineFormulaCreate.js";
import { columnCalcCreateDecimals } from "./columnCalcCreate.js";
import { columnCalcCreateDivision } from "./columnCalcCreate.js";
import { answerCreate } from "./answerCreate.js";
import * as se from "./se.js";

//初期設定
const select_menu_array = ["割り切れるまで", "四捨五入", "商とあまり"];

// モードを選択
// 割り切れるまで、計算しましょう。
// 商は四捨五入して十分の一の位までのがい数で求めましょう。
// 整数の商とあまりをもとめる。

export function step31() {
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
    comment.innerHTML = "数値がおかしい場合は、もう一度「もんだい」をおして、変えてください。";
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
          document.getElementById("header-comment").innerHTML = `
          <h5>☆　割り切れるまで計算しましょう。</h5>`;
          b = Math.floor(Math.random() * 99) / 10; //b:わる数　２けた
          if (Number.isInteger(b)) {
            b = b + 0.1;
          }
          ans = Math.floor(Math.random() * 99) / 10; //b:わる数　２けた
          if (Number.isInteger(b)) {
            b = b + 0.1;
          }
          a = Math.floor(b * ans * 100) / 100; //a:わられる数
          console.log(b);
          kigo = "÷";
          break;
        }
        case "1": {
          document.getElementById("header-comment").innerHTML = `
          <h5>☆　商を四捨五入で「十分の一」の位までのがい数で表しましょう。</h5>`;
          a = Math.floor(Math.random() * 899 + 100) / 100; //b:わる数　２けた
          b = Math.floor(Math.random() * 89 + 10) / 10; //b:わる数　２けた
          if (Number.isInteger(b)) {
            b = b + 0.1;
          }
          ans = Math.round((a / b) * 10) / 10; //b:わる数　２けた
          if (Number.isInteger(b)) {
            b = b + 0.1;
          }
          console.log(b);
          kigo = "÷";
          break;
        }
        case "2": {
          document.getElementById("header-comment").innerHTML = `
          <h5>☆　整数の商とあまりを求めましょう。</h5>`;
          a = Math.floor(Math.random() * 399 + 500) / 10; //a:わられる数
          b = Math.floor((Math.random() * (a - 11)) / 2 + 11) / 10; //b:わる数　２けた
          if (Number.isInteger(b)) {
            b = b + 0.1;
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

    columnCalcCreateDivision(left_array, kigo, right_array);
    answer_array.splice(9, 11);
    answerCreate(answer_array);
  }
}
