import { answerCreate } from "./answerCreate.js";
import * as se from "./se.js";

export function step28() {
  const number = ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩", "⑪", "⑫", "⑬", "⑭", "⑮", "⑯", "⑰", "⑱", "⑲", "⑳"];
  const fugou = ["ア", "イ", "ウ", "エ"];
  let answer_array = []; //答えを格納する
  const bunbo = [];
  const bunshi = [];
  const bunshi_2 = [];
  const taibunsu = [];
  const taibunsu_2 = [];
  const TBL = document.getElementById("TBL");

  //問題作成を行うボタンの設置
  document.getElementById("question").addEventListener("click", () => question_create());
  question_create();

  function mondai_1_create() {
    // 問題１…次の分数を真分数と仮分数に分ける
    const textContainer_1 = document.createElement("div");
    textContainer_1.innerHTML = `<h3>☆次の分数を真分数と仮分数に分けましょう。</h3>`;

    const shinbunsu = [];
    const kabunsu = [];

    const fractionContainer = document.createElement("div");
    fractionContainer.classList.add("fraction-container");

    for (let i = 0; i < 4; i++) {
      const bunshiValue = Math.floor(Math.random() * 8 + 2);
      const bunboValue = Math.floor(Math.random() * 7 + 3);

      // 分数の大枠生成
      const fraction = document.createElement("div");
      fraction.classList.add("d-flex", "fraction");

      // 「ア」～「エ」の記号を追加
      const label = addLabel(i);
      fraction.appendChild(label);

      //分数の作成
      const fractionWrapper = generatingFractions(bunshiValue, bunboValue);
      fraction.appendChild(fractionWrapper);

      // 問題を区切るための要素を生成
      const separator = document.createElement("div");
      separator.classList.add("improper_fraction");
      separator.textContent = "，";
      fraction.appendChild(separator);

      // 真分数と仮分数の振り分け
      if (bunshiValue < bunboValue) {
        shinbunsu.push(fugou[i]);
      } else {
        kabunsu.push(fugou[i]);
      }

      // fraction要素をfractionContainer要素に追加
      fractionContainer.appendChild(fraction);
    }

    const textContainer_2 = document.createElement("div");
    textContainer_2.innerHTML = `<h4>①真分数は（　　　　）,　②仮分数は（　　　　）</h4><br/>`;

    TBL.appendChild(textContainer_1);
    TBL.appendChild(fractionContainer);
    TBL.appendChild(textContainer_2);
    //答えの追加
    answer_array.push(shinbunsu, kabunsu);
  }

  // 問題２…次の帯分数を仮分数になおす。
  function mondai_2_create() {
    const textContainer_3 = document.createElement("div");
    textContainer_3.innerHTML = `<h3>☆次の帯分数を仮分数になおしましょう。</h3>`;

    const fractionContainer = document.createElement("div");
    fractionContainer.classList.add("fraction-container");

    for (let i = 4; i < 8; i++) {
      const bunshiValue = Math.floor(Math.random() * 8 + 2);
      const bunboValue = Math.floor(Math.random() * (bunshiValue - 1) + 1);
      const taibunsuValue = Math.floor(Math.random() * 3 + 1);
      const mixedFraction = taibunsuValue * bunshiValue + bunboValue;
      answer_array[i - 2] = `
       <div  class="d-flex fraction">
         <div>
           <span class="numerator">${mixedFraction}</span>
           <span class="denominator">${bunboValue}</span>
         </div>
       </div>`;

      // 分数の大枠生成
      const fraction = document.createElement("div");
      fraction.classList.add("d-flex", "fraction");

      // 番号を追加
      const label = addNumber(i);
      fraction.appendChild(label);

      //帯分数の作成
      const compaundNumber = addCompoundNumber(taibunsuValue);
      fraction.appendChild(compaundNumber);

      //分数の作成
      const fractionWrapper = generatingFractions(bunshiValue, bunboValue, taibunsuValue);
      fraction.appendChild(fractionWrapper);

      // 問題を区切るための要素を生成
      const separator = document.createElement("div");
      separator.classList.add("improper_fraction");
      separator.textContent = "＝　　　";
      fraction.appendChild(separator);

      // fraction要素をfractionContainer要素に追加
      fractionContainer.appendChild(fraction);
    }

    TBL.appendChild(textContainer_3);
    TBL.appendChild(fractionContainer);
  }

  // 問題３…次の数の大きさをくらべ、等号や不等号を使って式に表す。
  function mondai_3_create() {
    const textContainer_4 = document.createElement("div");
    textContainer_4.innerHTML = `<br/><h3>☆次の数の大きさをくらべ、等号や不等号を使って<br/>　式に表しましょう。</h3>`;
    TBL.appendChild(textContainer_4);

    const fractionContainer = document.createElement("div");
    fractionContainer.classList.add("fraction-container");

    for (let i = 8; i < 11; i++) {
      const bunboValue = Math.floor(Math.random() * 8 + 2);
      let bunshiValue;
      if (i === 10) bunshiValue = 0;
      else bunshiValue = Math.floor(Math.random() * (bunboValue - 1) + 1);
      const taibunsuValue = Math.floor(Math.random() * 3 + 1);
      const mixedFraction = taibunsuValue * bunshiValue + bunboValue;

      const bunshiValue_2 = Math.floor(Math.random() * mixedFraction + bunboValue);

      if (mixedFraction > bunshiValue_2) {
        answer_array[i - 2] = ">";
      } else if (mixedFraction < bunshiValue_2) {
        answer_array[i - 2] = "<";
      } else if (mixedFraction === bunshiValue_2) {
        answer_array[i - 2] = "=";
      }

      // 分数の大枠生成
      const fraction = document.createElement("div");
      fraction.classList.add("d-flex", "fraction");

      // 番号を追加
      const label = addNumber(i);
      fraction.appendChild(label);

      //帯分数の作成
      const compaundNumber = addCompoundNumber(taibunsuValue);
      fraction.appendChild(compaundNumber);

      //分数の作成(i=10のときは省く)
      if (i !== 10) {
        const fractionWrapper = generatingFractions(bunshiValue, bunboValue, taibunsuValue);
        fraction.appendChild(fractionWrapper);
      }

      // 問題を区切るための要素を生成
      const separator = document.createElement("div");
      separator.classList.add("square");
      separator.textContent = "　";
      fraction.appendChild(separator);

      //分数の作成
      const fractionWrapper_2 = generatingFractions(bunshiValue_2, bunboValue);
      fraction.appendChild(fractionWrapper_2);

      
      // 問題を区切るための要素を生成
      const separator_2 = document.createElement("div");
      separator_2.classList.add("improper_fraction");
      separator_2.textContent = "　　";
      fraction.appendChild(separator_2);

      // fraction要素をfractionContainer要素に追加
      fractionContainer.appendChild(fraction);
    }

    TBL.appendChild(textContainer_4);
    TBL.appendChild(fractionContainer);
  }

  function question_create() {
    TBL.innerHTML = "";

    mondai_1_create();
    mondai_2_create();
    mondai_3_create();

    // 問題４…次の計算をする。
    const textContainer_8 = document.createElement("div");
    textContainer_8.innerHTML = `<br/><h3>☆次の計算をしましょう。</h3>`;
    TBL.appendChild(textContainer_8);

    const textContainer_9 = document.createElement("div");
    const textContainer_10 = document.createElement("div");
    textContainer_9.style.display = "flex";
    textContainer_10.style.display = "flex";
    for (let i = 11; i < 15; i++) {
      let bunshi_result;
      if (i < 13) {
        bunbo[i] = Math.floor(Math.random() * 7 + 3);
        bunshi[i] = Math.floor(Math.random() * (bunbo[i] - 3) + 2);
        bunshi_2[i] = Math.floor(Math.random() * (bunbo[i] - 2) + 1);
        bunshi_result = Math.floor(bunshi[i] + bunshi_2[i]);
        taibunsu[i] = Math.floor(Math.random() * 3 + 1);
      } else if (i === 13) {
        bunbo[i] = Math.floor(Math.random() * 5 + 5);
        bunshi[i] = Math.floor(Math.random() * (bunbo[i] - 4) + 3);
        bunshi_2[i] = Math.floor(Math.random() * (bunshi[i] - 2) + 1);
        bunshi_result = bunshi[i] - bunshi_2[i];
      } else if (i === 14) {
        bunbo[i] = Math.floor(Math.random() * 5 + 5);
        bunshi_2[i] = Math.floor(Math.random() * (bunbo[i] - 4) + 3);
        bunshi[i] = Math.floor(Math.random() * (bunshi_2[i] - 2) + 1);
        taibunsu[i] = 1;
        const mixedFraction = bunbo[i] * taibunsu[i] + bunshi[i];
        bunshi_result = mixedFraction - bunshi_2[i];
      }

      answer_array[i - 2] = `
       <div  class="d-flex fraction">
        <div>
         <span class="numerator">${bunshi_result}</span>
         <span class="denominator">${bunbo[i]}</span>
        </div>
       </div>`;
    }
    textContainer_9.innerHTML = `
    <div  class="d-flex fraction">
      <div class="improper_fraction">⑩　</div>
        <div>
         <span class="numerator">${bunshi[11]}</span>
         <span class="denominator">${bunbo[11]}</span>
        </div>
      <div class="improper_fraction">+</div>
      <div>
      <span class="numerator">${bunshi_2[11]}</span>
      <span class="denominator">${bunbo[11]}</span>
      </div>
      <div class="improper_fraction">＝　　　　　　　</div>
    </div>
    <div  class="d-flex fraction">
      <div class="improper_fraction">⑪　</div>
        <div>
         <span class="numerator">${bunshi[12]}</span>
         <span class="denominator">${bunbo[12]}</span>
        </div>
      <div class="improper_fraction">+</div>
      <div>
        <span class="numerator">${bunshi_2[12]}</span>
        <span class="denominator">${bunbo[12]}</span>
      </div>
      <div class="improper_fraction">＝</div>
    </div>
    
    `;

    textContainer_10.innerHTML = `
    <div  class="d-flex fraction">
      <div class="improper_fraction">⑫　</div>
        <div>
         <span class="numerator">${bunshi[13]}</span>
         <span class="denominator">${bunbo[13]}</span>
        </div>
      <div class="improper_fraction">-</div>
      <div>
      <span class="numerator">${bunshi_2[13]}</span>
      <span class="denominator">${bunbo[13]}</span>
      </div>
      <div class="improper_fraction">＝　　　　　　　</div>
    </div>
    <div  class="d-flex fraction">
      <div class="improper_fraction">⑬</div>
      <div class="improper_fraction">${taibunsu[14]}</div>
        <div>
         <span class="numerator">${bunshi[14]}</span>
         <span class="denominator">${bunbo[14]}</span>
        </div>
      <div class="improper_fraction">-</div>
      <div>
        <span class="numerator">${bunshi_2[14]}</span>
        <span class="denominator">${bunbo[14]}</span>
      </div>
      <div class="improper_fraction">＝</div>
    </div>`;
    TBL.appendChild(textContainer_9);
    TBL.appendChild(textContainer_10);

    answerCreate(answer_array);
  }

  // 「ア」～「エ」の記号を追加
  function addLabel(index) {
    const label = document.createElement("div");
    label.classList.add("improper_fraction");
    label.textContent = fugou[index];
    return label;
  }

  // 番号を追加
  function addNumber(index) {
    const label = document.createElement("div");
    label.classList.add("improper_fraction");
    label.textContent = number[index];
    return label;
  }

  // 帯分数を追加
  function addCompoundNumber(taibunsuValue) {
    // 帯分数を生成
    const compoundNumber = document.createElement("div");
    compoundNumber.classList.add("improper_fraction");
    compoundNumber.textContent = taibunsuValue;
    return compoundNumber;
  }

  // 分数を生成する関数
  function generatingFractions(bunshiValue, bunboValue) {
    // 分子を生成
    const numerator = document.createElement("span");
    numerator.classList.add("numerator");
    numerator.textContent = bunshiValue;

    // 分母を生成
    const denominator = document.createElement("span");
    denominator.classList.add("denominator");
    denominator.textContent = bunboValue;

    // 分子と分母を一つにまとめる。
    const fractionWrapper = document.createElement("div");
    fractionWrapper.appendChild(numerator);
    fractionWrapper.appendChild(denominator);
    return fractionWrapper;
  }
}
