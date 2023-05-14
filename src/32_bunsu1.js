import { answerCreate } from "./answerCreate.js";
import { addNumber, generatingFractions, reduceFraction, bunsuAdd, bunsuMinus } from "./bunsuu.js";
import * as se from "./se.js";

export function step32() {
  const number = ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩", "⑪", "⑫", "⑬", "⑭", "⑮", "⑯", "⑰", "⑱", "⑲", "⑳"];
  const fugou = ["　　ア", "　　イ", "　　ウ", "　　エ"];
  let answer_array = []; //答えを格納する
  const TBL = document.getElementById("TBL");

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

  //　問題１…約分をしましょう。
  function mondai_1_create() {
    const textContainer = document.createElement("div");
    textContainer.innerHTML = `<h3>☆次の分数を約分しましょう。</h3>`;

    // 問題の大枠作成
    const fractionContainer = document.createElement("div");
    fractionContainer.classList.add("fraction-container");

    for (let i = 0; i < 4; i++) {
      const koubaisu = Math.floor(Math.random() * 4 + 2);
      let bunshiValue = Math.floor(Math.random() * 7 + 2) * koubaisu;
      const bunboValue = Math.floor(Math.random() * 7 + 2) * koubaisu;
      if (bunshiValue === bunboValue) bunshiValue = +koubaisu;

      const [reducedNumerator, reducedDenominator] = reduceFraction(bunshiValue, bunboValue);

      //答えの配列に挿入
      if (reducedDenominator !== 1) {
        answer_array[i] = `
            <div  class="d-flex fraction">
             <div>
              <span class="numerator">${reducedNumerator}</span>
              <span class="denominator">${reducedDenominator}</span>
             </div>
            </div>`;
      } else {
        answer_array[i] = `
            <div  class="d-flex fraction">
             <div class="improper_fraction">${reducedNumerator}</div>
            </div>`;
      }
      // 分数の大枠生成
      const fraction = document.createElement("div");
      fraction.classList.add("d-flex", "fraction");

      // 番号を追加
      const label = addNumber(i);
      fraction.appendChild(label);

      //分数の作成
      const fractionWrapper = generatingFractions(bunshiValue, bunboValue);
      fraction.appendChild(fractionWrapper);

      // 問題を区切るための要素を生成
      const equal = document.createElement("div");
      equal.classList.add("improper_fraction");
      equal.textContent = "＝　　　";
      fraction.appendChild(equal);

      // fraction要素をfractionContainer要素に追加
      fractionContainer.appendChild(fraction);
    }

    TBL.appendChild(textContainer);
    TBL.appendChild(fractionContainer);
  }
  //　問題２…次の分数を通分して比べ、等号や不等号を使って表す。
  function mondai_2_create() {
    const textContainer = document.createElement("div");
    textContainer.innerHTML = `<br/><h3>☆次の分数を通分して比べ、等号や不等号を使って<br/>　表しましょう。</h3>`;

    // 問題の大枠作成
    const fractionContainer = document.createElement("div");
    fractionContainer.classList.add("fraction-container");

    for (let i = 0; i < 6; i++) {
      const koubaisu = Math.floor(Math.random() * 2 + 2);
      const bunshiValue = Math.floor(Math.random() * 14 + 2);
      const bunshiValue_2 = Math.floor(Math.random() * 14 + 2);

      const bunboValue = Math.floor(Math.random() * 7 + 2) * koubaisu;
      let bunboValue_2 = Math.floor(Math.random() * 7 + 2) * koubaisu;
      if (bunboValue === bunboValue_2) bunboValue_2 = +koubaisu;

      if (bunshiValue / bunboValue > bunshiValue_2 / bunboValue_2) {
        answer_array[i + 4] = ">";
      } else if (bunshiValue / bunboValue < bunshiValue_2 / bunboValue_2) {
        answer_array[i + 4] = "<";
      } else if (bunshiValue / bunboValue === bunshiValue_2 / bunboValue_2) {
        answer_array[i + 4] = "=";
      }

      // 分数の大枠生成
      const fraction = document.createElement("div");
      fraction.classList.add("d-flex", "fraction");

      // 番号を追加
      const label = addNumber(i + 4);
      fraction.appendChild(label);

      //分数の作成
      const fractionWrapper = generatingFractions(bunshiValue, bunboValue);
      fraction.appendChild(fractionWrapper);

      // 問題を区切るための要素を生成
      const square = document.createElement("div");
      square.classList.add("square");
      square.textContent = "　";
      fraction.appendChild(square);

      //分数の作成
      const fractionWrapper_2 = generatingFractions(bunshiValue_2, bunboValue_2);
      fraction.appendChild(fractionWrapper_2);

      // 問題を区切るための要素を生成
      if (i !== 5) {
        const space = document.createElement("div");
        space.classList.add("improper_fraction");
        space.textContent = "　　";
        fraction.appendChild(space);
      }

      // fraction要素をfractionContainer要素に追加
      fractionContainer.appendChild(fraction);
    }

    TBL.appendChild(textContainer);
    TBL.appendChild(fractionContainer);
  }
  //　問題３…次の分数の計算をしましょう。
  function mondai_3_create() {
    const textContainer = document.createElement("div");
    textContainer.innerHTML = `<br/><h3>☆次の計算をしましょう。</h3>`;

    const fractionContainer = document.createElement("div");
    fractionContainer.classList.add("fraction-container");

    for (let i = 0; i < 8; i++) {
      let bunshiValue, bunshiValue_2, bunboValue, bunboValue_2, koubaisu, bunshi_result, bunbo_result;

      //二組の分母分子を決定する。
      koubaisu = Math.floor(Math.random() * 2 + 2);
      bunshiValue = Math.floor(Math.random() * 8 + 2);
      bunboValue = Math.floor(Math.random() * 7 + 2) * koubaisu;
      bunshiValue_2 = Math.floor(Math.random() * 8 + 2);
      bunboValue_2 = Math.floor(Math.random() * 7 + 2) * koubaisu;
      if (bunshiValue === bunboValue) bunboValue = +koubaisu;
      if (bunshiValue_2 === bunboValue_2) bunboValue_2 = +koubaisu;
      if (bunboValue === bunboValue_2) bunboValue_2 = +koubaisu;

      // あらかじめ、約分しておく。
      [bunshiValue, bunboValue] = reduceFraction(bunshiValue, bunboValue);
      [bunshiValue_2, bunboValue_2] = reduceFraction(bunshiValue_2, bunboValue_2);

      //もしも分母が１の整数になった場合は、あらかじめ用意した値を代入する。
      if (bunboValue === 1) {
        bunboValue = 4;
        bunshiValue = 7;
      }
      if (bunboValue_2 === 1) {
        bunboValue_2 = 8;
        bunshiValue_2 = 3;
      }

      //引き算に備えて、前の数を大きくしておく。
      if (bunshiValue / bunboValue < bunshiValue_2 / bunboValue_2) {
        const bunshi_swap = bunshiValue_2;
        bunshiValue_2 = bunshiValue;
        bunshiValue = bunshi_swap;
        const bunbo_swap = bunboValue_2;
        bunboValue_2 = bunboValue;
        bunboValue = bunbo_swap;
      }

      if (i < 4) {
        // 約分なしでとにかく足し算する
        [bunshi_result, bunbo_result] = bunsuAdd(bunshiValue, bunboValue, bunshiValue_2, bunboValue_2);
      } else if (i > 3) {
        // 約分なしでとにかく引き算する
        [bunshi_result, bunbo_result] = bunsuMinus(bunshiValue, bunboValue, bunshiValue_2, bunboValue_2);
      }
      // 返ってきた値を約分して、もう一度resultを受け取る。
      [bunshi_result, bunbo_result] = reduceFraction(bunshi_result, bunbo_result);

      //答えの配列に挿入
      if (bunbo_result !== 1) {
        answer_array[i + 10] = `
      <div  class="d-flex fraction">
       <div>
        <span class="numerator">${bunshi_result}</span>
        <span class="denominator">${bunbo_result}</span>
       </div>
      </div>`;
      } else {
        answer_array[i + 10] = `
      <div  class="d-flex fraction">
       <div class="improper_fraction">${bunshi_result}</div>
      </div>`;
      }

      // 分数の大枠生成
      const fraction = document.createElement("div");
      fraction.classList.add("d-flex", "fraction");

      // 番号を追加
      const label = addNumber(i + 10);
      fraction.appendChild(label);

      //分数の作成
      const fractionWrapper = generatingFractions(bunshiValue, bunboValue);
      fraction.appendChild(fractionWrapper);

      // 記号を作成
      const KIGO = ["+", "+", "+","+", "-", "-", "-", "-"];
      const kigo = document.createElement("div");
      kigo.classList.add("improper_fraction");
      kigo.textContent = KIGO[i];
      fraction.appendChild(kigo);

      //分数の作成
      const fractionWrapper_2 = generatingFractions(bunshiValue_2, bunboValue_2);
      fraction.appendChild(fractionWrapper_2);

      // 問題を区切るための要素を生成
      const equal = document.createElement("div");
      equal.classList.add("improper_fraction");
      equal.textContent = "＝　　　　　　　";
      fraction.appendChild(equal);

      // fraction要素をfractionContainer要素に追加
      fractionContainer.appendChild(fraction);
    }

    TBL.appendChild(textContainer);
    TBL.appendChild(fractionContainer);
  }
  question_create();
}
