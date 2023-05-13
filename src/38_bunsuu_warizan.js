import { selectMenuCreate } from "./set.js";
import { answerCreate } from "./answerCreate.js";
import { reduceFraction, bunsuDivision, createFractionFormula } from "./bunsuu.js";
import * as se from "./se.js";

//初期設定
const select_menu_array = ["分数÷整数", "分数÷分数", "帯分数÷分数", "帯分数÷帯分数"];

export function step38() {
  let index = "0";
  selectMenuCreate(select_menu_array);

  // セレクトモードの作成・設定
  select.addEventListener("change", () => {
    index = select.value;
    question_create();
  });

  const number = ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩", "⑪", "⑫", "⑬", "⑭", "⑮", "⑯", "⑰", "⑱", "⑲", "⑳"];
  const fugou = ["　　ア", "　　イ", "　　ウ", "　　エ"];
  let answer_array = []; //答えを格納する
  const TBL = document.getElementById("TBL");

  //問題作成を行うボタンの設置
  document.getElementById("question").addEventListener("click", () => question_create());

  //問題作成の関数
  function question_create() {
    comment.innerHTML = "数値がおかしい場合は、もう一度「もんだい」をおして、変えてください。";
    TBL.innerHTML = "";
    const answer_array = []; //答えを格納する
    se.set.currentTime = 0;
    se.set.play(); //答えを描画
    let a, b, c, d, e, f, ans;
    console.log(index);

    //ここに式を記述する。
    const fractionContainer = document.createElement("div");

    // while (check_array.length < 10) {
    for (let i = 0; i < 10; i++) {
      let bunshi_result, bunbo_result;
      switch (index) {
        //　問題１…分数×整数
        case "0": {
          a = 0; //左…帯分数
          b = Math.floor(Math.random() * 8 + 2); //左…分子
          c = Math.floor(Math.random() * 7 + 3); //左…分母
          d = Math.floor(Math.random() * 5 + 1); //右…帯分数
          e = 0; //右…分子
          f = 1; //右…分母
          break;
        }
        //　問題１…分数×分数
        case "1": {
          a = 0; //左…帯分数
          b = Math.floor(Math.random() * 8 + 2); //左…分子
          c = Math.floor(Math.random() * 7 + 3); //左…分母
          d = 0; //右…帯分数
          e = Math.floor(Math.random() * 8 + 2); //右…分子
          f = Math.floor(Math.random() * 7 + 3); //右…分母
          break;
        }
        //　問題３…帯分数×分数
        case "2": {
          const mode = Math.floor(Math.random() * 2);
          if (mode === 0) {
            a = Math.floor(Math.random() * 5 + 1); //左…帯分数
            d = 0; //右…帯分数
          } else {
            a = 0; //右…帯分数
            d = Math.floor(Math.random() * 3 + 1); //左…帯分数
          }
          b = Math.floor(Math.random() * 8 + 2); //左…分子
          c = Math.floor(Math.random() * 7 + 3); //左…分母
          e = Math.floor(Math.random() * 8 + 2); //右…分子
          f = Math.floor(Math.random() * 7 + 3); //右…分母
          break;
        }
        //　問題４…帯分数×帯分数
        case "3": {
          a = Math.floor(Math.random() * 2 + 1); //左…帯分数
          b = Math.floor(Math.random() * 8 + 2); //左…分子
          c = Math.floor(Math.random() * 7 + 3); //左…分母
          d = Math.floor(Math.random() * 2 + 1); //右…帯分数
          e = Math.floor(Math.random() * 8 + 2); //右…分子
          f = Math.floor(Math.random() * 7 + 3); //右…分母
          break;
        }
      }

      if (b === c) c = +1; //分母と分子が同じ数にならない
      // 約分しておく。
      [b, c] = reduceFraction(b, c);
      if (c === 1) c = 7;
      if (e === f) f = +1; //分母と分子が同じ数にならない
      // 約分しておく。
      [e, f] = reduceFraction(e, f);
      if (f === 1) f = 5;

      //分数のわり算を実行する
      [bunshi_result, bunbo_result] = bunsuDivision(a, b, c, d, e, f);

      //答えの配列に挿入
      if (bunbo_result !== 1) {
        answer_array[i] = `
            <div  class="d-flex fraction">
             <div>
              <span class="numerator">${bunshi_result}</span>
              <span class="denominator">${bunbo_result}</span>
             </div>
            </div>`;
      } else {
        answer_array[i] = `
            <div  class="d-flex fraction">
             <div class="improper_fraction">${bunshi_result}</div>
            </div>`;
      }
      //式を描画する
      const fraction = createFractionFormula(a, b, c, d, e, f, i, "÷");
      fractionContainer.appendChild(fraction);
      answerCreate(answer_array);
      TBL.appendChild(fractionContainer);
    }
  }
  question_create();
}
