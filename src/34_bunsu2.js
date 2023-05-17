import { answerCreate } from "./answerCreate.js";
import { addNumber, generatingFractions, reduceFraction, bunsuAdd, bunsuMinus } from "./bunsuu.js";
import * as se from "./se.js";

export function step34() {
  const number = ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩", "⑪", "⑫", "⑬", "⑭", "⑮", "⑯", "⑰", "⑱", "⑲", "⑳"];
  let answer_array = []; //答えを格納する
  const TBL = document.getElementById("TBL");
  let a, b, c, d, ans;

  //問題作成を行うボタンの設置
  document.getElementById("question").addEventListener("click", () => question_create());

  //問題作成の関数
  function question_create() {
    TBL.innerHTML = "";
    comment.innerHTML = "数値がおかしい場合は、もう一度「もんだい」をおして、変えてください。";
    answer_array = [];
    mondai_1_create();
    mondai_2_create();
    mondai_3_create();
    // mondai_4_create();
    //答えを描画
    answerCreate(answer_array);
    se.set.currentTime = 0;
    se.set.play();
  }

  //　問題１…商を分数で表す
  function mondai_1_create() {
    const textContainer = document.createElement("div");
    textContainer.innerHTML = `<h3>☆商を分数で表しましょう。</h3>`;
    TBL.appendChild(textContainer);

    const fractionContainer = document.createElement("div");
    fractionContainer.classList.add("fraction-container");

    for (let i = 0; i < 6; i++) {
      a = Math.floor(Math.random() * 7 + 2);
      b = Math.floor(Math.random() * 7 + 2);
      //約分しておく。
      [c, d] = reduceFraction(a, b);

      // 分数の大枠生成
      const fraction = document.createElement("div");
      fraction.classList.add("d-flex", "fraction");
      // 番号を追加
      const label = addNumber(i);
      fraction.appendChild(label);
      //わり算の式の作成
      const divFormulas = document.createElement("div");
      divFormulas.classList.add("improper_fraction");
      divFormulas.innerHTML = `
      ${a}÷${b}
      `;
      fraction.appendChild(divFormulas);
      // イコールの作成
      const equal = document.createElement("div");
      equal.classList.add("improper_fraction");
      equal.textContent = "＝　　　";
      fraction.appendChild(equal);

      //答えの配列に挿入
      if (d !== 1) {
        answer_array[i] = `
            <div  class="d-flex fraction">
             <div>
              <span class="numerator">${c}</span>
              <span class="denominator">${d}</span>
             </div>
            </div>`;
      } else {
        answer_array[i] = `
            <div  class="d-flex fraction">
             <div class="improper_fraction">${c}</div>
            </div>`;
      }

      // fraction要素をfractionContainer要素に追加
      fractionContainer.appendChild(fraction);
    }
    TBL.appendChild(fractionContainer);
  }

  //　問題２…分数を小数で表す
  function mondai_2_create() {
    const textContainer = document.createElement("div");
    textContainer.innerHTML = `<br/><h3>☆分数を小数で表しましょう。</h3>`;
    TBL.appendChild(textContainer);

    const fractionContainer = document.createElement("div");
    fractionContainer.classList.add("fraction-container");

    for (let i = 0; i < 8; i++) {
      const num = [2, 4, 5];
      const index = Math.floor(Math.random() * 3);
      a = Math.floor(Math.random() * 20 + 2);
      b = num[index];
      //約分しておく。
      [c, d] = reduceFraction(a, b);
      if (d === 1) d = 2;

      answer_array[i + 6] = c / d;

      // 分数の大枠生成
      const fraction = document.createElement("div");
      fraction.classList.add("d-flex", "fraction");
      // 番号を追加
      const label = addNumber(i + 6);
      fraction.appendChild(label);
      //分数の作成
      const fractionWrapper = generatingFractions(c, d);
      fraction.appendChild(fractionWrapper);
      // イコールの作成
      const equal = document.createElement("div");
      equal.classList.add("improper_fraction");
      equal.textContent = "＝　　　　　　　　　";
      fraction.appendChild(equal);

      // fraction要素をfractionContainer要素に追加
      fractionContainer.appendChild(fraction);
    }
    TBL.appendChild(fractionContainer);
  }

  //　問題３…分数を小数で表す
  function mondai_3_create() {
    const textContainer = document.createElement("div");
    textContainer.innerHTML = `<br/><h3>☆小数を分数で表しましょう。</h3>`;
    TBL.appendChild(textContainer);

    const fractionContainer = document.createElement("div");
    fractionContainer.classList.add("fraction-container");

    for (let i = 0; i < 6; i++) {
      a = Math.floor(Math.random() * 99 + 2);
      b = 100;
      //約分しておく。
      [c, d] = reduceFraction(a, b);

      answer_array[i +14] = `
      <div  class="d-flex fraction">
        <div>
          <span class="numerator">${c}</span>
          <span class="denominator">${d}</span>
        </div>
      </div>`;

      // 分数の大枠生成
      const fraction = document.createElement("div");
      fraction.classList.add("d-flex", "fraction");
      fraction.style.width = "30%";
      // 番号を追加
      const label = addNumber(i + 14);
      fraction.appendChild(label);
      //小数の作成
      const divFormulas = document.createElement("div");
      divFormulas.classList.add("improper_fraction");
      divFormulas.innerHTML = `
      ${a / 100}
      `;
      fraction.appendChild(divFormulas);
      // イコールの作成
      const equal = document.createElement("div");
      equal.classList.add("improper_fraction");
      equal.textContent = "＝　　　";
      fraction.appendChild(equal);

      // fraction要素をfractionContainer要素に追加
      fractionContainer.appendChild(fraction);
    }
    TBL.appendChild(fractionContainer);
  }
  question_create();
}
