import { selectMenuCreate } from "./set.js";
import { answerCreate } from "./answerCreate.js";
import { reduceFraction, bunsuMultiplication, createFractionFormula } from "./bunsuu.js";
import * as se from "./se.js";

export function step29() {
  const number = ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩", "⑪", "⑫", "⑬", "⑭", "⑮", "⑯", "⑰", "⑱", "⑲", "⑳"];
  const TBL = document.getElementById("TBL");

  //問題作成を行うボタンの設置
  document.getElementById("question").addEventListener("click", () => question_create());

  //問題作成の関数
  function question_create() {
    TBL.innerHTML = "";
    const answer_array = []; //答えを格納する
    se.set.currentTime = 0;
    se.set.play(); //答えを描画
    let a, b, c, d, e;

    for (let i = 0; i < 8; i++) {
      //ここに式を記述する。
      const textContainer = document.createElement("div");
      a = Math.floor(Math.random() * 8 + 2);
      b = Math.floor(Math.random() * 8 + 2);
      c = Math.floor(Math.random() * 8 + 2);
      d = Math.floor(Math.random() * 8 + 2);
      e = Math.floor(Math.random() * 8 + 2);

      switch (i) {
        case 0:
        case 1:
          textContainer.innerHTML = `
          <h5 style="width:18cm;">${number[i]}　1辺の長さが${a}cmの立方体の体積は何cm³ですか？</h5>
          `;
          answer_array[i] = `${a * a * a}cm³`;
          break;
        case 2:
        case 3:
          textContainer.innerHTML = `
          <h5 style="width:18cm;">${number[i]}　縦${a}cm、横${b}cm、高さ${c}cmの直方体の体積は何cm³ですか？</h5>
          `;
          answer_array[i] = `${a * b * c}cm³`;
          break;
        case 4:
          textContainer.innerHTML = `
          <h5 style="width:18cm;">${number[i]}　底辺${a}cm、高さ${b}cmの直角三角形が底面で、<br/>　　高さが${c}cmの立体の体積は何cm³ですか？</h5>`;
          answer_array[i] = `${(a * b * c) / 2}cm³`;
          break;
        case 5:
          textContainer.innerHTML = `
          <h5 style="width:18cm;">${number[i]}　上底${a}cm、下底${b}cm、高さ${c}cmの台形が底面で、<br/>　　高さが${d}cmの立体の体積は何cm³ですか？</h5>`;
          answer_array[i] = `${(((a + b) * c) / 2) * d}cm³`;
          break;
        case 6:
          textContainer.innerHTML = `
          <h5 style="width:18cm;">${number[i]}　半径${a}cmの円が底面で、<br/>　　高さが${b}cmの円柱の体積は何cm³ですか？</h5>`;
          answer_array[i] = `${Math.floor(a * a * b * 314) / 100}cm³`;
          break;
        case 7:
          textContainer.innerHTML = `
          <h5 style="width:18cm;">${number[i]}　直方体の体積が${
            a * b * c
          }cm³で、縦${a}cm、横${b}cmのとき、<br/>　　高さは何cmですか？</h5>`;
          answer_array[i] = `${c}cm`;
          break;
      }
      textContainer.innerHTML = `
      ${textContainer.innerHTML}
      <h5>　式</h5>
      <h5 style="text-align:right">答え（　　　　　　　　）</h5>
      </div>`;
      TBL.appendChild(textContainer);
    }
    answerCreate(answer_array);
  }

  // 1辺の長さが6cmの立方体を2つ組み合わせてできた直方体の体積は何cm³ですか？
  // 1辺の長さが3cm、4cm、5cmの立方体を組み合わせてできた直方体の体積は何cm³ですか？
  // 縦3cm、横4cm、高さ5cmの直方体を2つ組み合わせてできた直方体の体積は何cm³ですか？
  question_create();
}
