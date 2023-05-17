import { answerCreate } from "./answerCreate.js";
import { addNumber, generatingFractions, reduceFraction, bunsuAdd, bunsuMinus } from "./bunsuu.js";
import * as se from "./se.js";

export function step35() {
  const number = ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩", "⑪", "⑫", "⑬", "⑭", "⑮", "⑯", "⑰", "⑱", "⑲", "⑳"];
  const TBL = document.getElementById("TBL");

  //問題作成を行うボタンの設置
  document.getElementById("question").addEventListener("click", () => question_create());

  //問題作成の関数
  function question_create() {
    TBL.innerHTML = "";
    const answer_array = []; //答えを格納する
    se.set.currentTime = 0;
    se.set.play();
    let a, b, c, d, e;

    for (let i = 0; i < 8; i++) {
      //ここに式を記述する。
      const textContainer = document.createElement("div");
      a = Math.floor(Math.random() * 8 + 2);
      b = Math.floor(Math.random() * 8 + 2);
      c = Math.floor(Math.random() * 4 + 2);
      d = Math.floor(Math.random() * 8 + 2);
      e = Math.floor(Math.random() * 8 + 2);
      switch (i) {
        case 0:
          textContainer.innerHTML = `
          <h5 style="width:18cm;">${number[i]}　自動車が時速${a * 10}kmで${b}時間進んだとき、道のりは何kmですか。</h5>
          `;
          answer_array[i] = `${a * b * 10}km`;
          break;
        case 1:
          textContainer.innerHTML = `
          <h5 style="width:18cm;">${number[i]}　${a * b}mの道のりを${a}秒で進んだとき、速さは秒速何mですか。</h5>
          `;
          answer_array[i] = `秒速${b}m`;
          break;
        case 2:
          textContainer.innerHTML = `
          <h5 style="width:18cm;">${number[i]}　${a * b * 10}mの道のりを分速${
            a * 10
          }mで進んだとき、かかった時間は何分ですか。</h5>
          `;
          answer_array[i] = `${b}分`;
          break;
        case 3:
          textContainer.innerHTML = `
          <h5 style="width:18cm;">${number[i]}　時速${c * 12}kmは、分速何mですか。</h5>
          `;
          answer_array[i] = `分速${c * 200}m`;
          break;
        case 4:
          textContainer.innerHTML = `
          <h5 style="width:18cm;">${number[i]}　秒速${a}kmは、時速何kmですか。</h5>
          `;
          answer_array[i] = `${(a * 3600) / 1000}分`;
          break;
        case 5:
          textContainer.innerHTML = `
          <h5 style="width:18cm;">${number[i]}　時速${720}km飛行機が${b}秒進んだとき、道のりは何kmですか。</h5>
          `;
          answer_array[i] = `${b / 5}km`;
          break;
        case 6:
          textContainer.innerHTML = `
          <h5 style="width:18cm;">${number[i]}　${a * 200}mの道のりを${12}分で進んだとき、速さは時速何kmですか。</h5>
          `;
          answer_array[i] = `時速${a}km`;
          break;
        case 7:
          textContainer.innerHTML = `
          <h5 style="width:18cm;">${number[i]}　${a * b}kmの道のりを時速${
            a * 10
          }kmで進んだとき、かかった時間は何分ですか。</h5>
          `;
          answer_array[i] = `${b * 6}分`;
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
  question_create();
}
