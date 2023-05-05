import * as se from "./se.js";

export function step19() {
  const TBL = document.getElementById("TBL");
  question.addEventListener("click", () => question_create());
  question_create();
  
  function question_create() {
    se.set.currentTime = 0;
    se.set.play();
    const ans = [];
    const left_value = [];
    const right_value = [];
    ans[0] = Math.floor(Math.random() * 9 + 1) * 10;
    ans[1] = Math.floor(Math.random() * 9 + 1);
    ans[2] = Math.floor(Math.random() * 9 + 1) * 10 + Math.floor(Math.random() * 9 + 1);
    ans[3] = Math.floor(Math.random() * 9 + 1) * 10 + Math.floor(Math.random() * 9 + 1);
    ans[4] = 100 + Math.floor(Math.random() * 19 + 1);
    ans[5] = 100 + Math.floor(Math.random() * 19 + 1);
    ans[6] = Math.floor(Math.random() * 9 + 1) * 10;
    ans[7] = Math.floor(Math.random() * 9 + 1);
    ans[8] = Math.floor(Math.random() * 9 + 1) * 100;
    ans[9] = Math.floor(Math.random() * 9 + 1) * 1000;
    for (let i = 10; i < 15; i++) {
      if (i === 10 || i === 12) {
        left_value[i - 10] = Math.floor(Math.random() * 9 + 1) * 10 + Math.floor(Math.random() * 8 + 1);
        right_value[i - 10] = Math.floor(Math.random() * (8 - (left_value[i - 10] % 10)) + 1);
        ans[i] = left_value[i - 10] + right_value[i - 10];
      } else if (i === 11 || i === 13) {
        left_value[i - 10] = Math.floor(Math.random() * 9 + 1) * 10 + Math.floor(Math.random() * 4 + 5);
        right_value[i - 10] = Math.floor(Math.random() * ((left_value[i - 10] % 10) - 1) + 1);
        ans[i] = left_value[i - 10] - right_value[i - 10];
      } else if (i === 14) {
        left_value[i - 10] = Math.floor(Math.random() * 8 + 1) * 10 + Math.floor(Math.random() * 9 + 1);
        right_value[i - 10] = Math.floor(Math.random() * (8 - Math.floor(left_value[i - 10] / 10)) + 1);
        ans[i] = left_value[i - 10] + right_value[i - 10] * 10;
      }
    }
    TBL.innerHTML = `
    <div>
  <h3 class="py-1">（　　）に　あてはまる　数を　かきましょう。</h3>
  <h3 class="py-1">①　${ans[0] / 10}cm=（　　）mm</h3>
  <h3 class="py-1">②　${ans[1] * 10}mm=（　　）cm</h3>
  <h3 class="py-1">③　${Math.floor(ans[2] / 10)}cm${ans[2] % 10}mm=（　　）mm</h3>
  <h3 class="py-1">④　${ans[3]}mm=（　　）cm（　　）mm</h3>
  <h3 class="py-1">⑤　${ans[4]}cm=（　　）m（　　）cm</h3>
  <h3 class="py-1">⑥　${Math.floor(ans[5] / 100)}m${ans[5] % 100}cm=（　　）cm</h3>
  <h3 class="py-1">⑦　${ans[6] / 10}L=（　　）dL</h3>
  <h3 class="py-1">⑧　${ans[7] * 10}dL=（　　）L</h3>
  <h3 class="py-1">⑨　${ans[8] / 100}dL=（　　）mL</h3>
  <h3 class="py-1">⑩　${ans[9] / 1000}L=（　　）mL</h3>
  <h3 class="py-1">計算を　しましょう。</h3>
  <h3 class="py-1">⑪　${Math.floor(left_value[0] / 10)}cm${left_value[0] % 10}mm + ${right_value[0]}mm</h3>
  <h3 class="py-1">⑫　${Math.floor(left_value[1] / 10)}cm${left_value[1] % 10}mm - ${right_value[1]}mm</h3>
  <h3 class="py-1">⑬　${Math.floor(left_value[2] / 10)}L${left_value[2] % 10}dL + ${right_value[2]}dL</h3>
  <h3 class="py-1">⑭　${Math.floor(left_value[3] / 10)}L${left_value[3] % 10}dL - ${right_value[3]}dL</h3>
  <h3 class="py-1">⑮　${Math.floor(left_value[4] / 10)}L${left_value[4] % 10}dL + ${right_value[4]}L</h3>
  </div>
  `;
    const area = document.getElementById("answer-area");
    area.innerHTML = `
  ①　${ans[0]}mm　
  ②　${ans[1]}cm　
  ③　${ans[2]}mm　
  ④　${Math.floor(ans[3] / 10)}cm${ans[3] % 10}mm　
  ⑤　${Math.floor(ans[4] / 100)}cm${ans[4] % 100}mm　<br>
  ⑥　${ans[5]}cm　
  ⑦　${ans[6]}dL　
  ⑧　${ans[7]}L　
  ⑨　${ans[8]}mL　
  ⑩　${ans[9]}mL　<br>
  ⑪　${Math.floor(ans[10] / 10)}cm${ans[10] % 10}mm　
  ⑫　${Math.floor(ans[11] / 10)}cm${ans[11] % 10}mm　
  ⑬　${Math.floor(ans[12] / 10)}L${ans[12] % 10}dL　
  ⑭　${Math.floor(ans[13] / 10)}L${ans[13] % 10}dL　
  ⑮　${Math.floor(ans[14] / 10)}L${ans[14] % 10}dL
  `;
  }
}
