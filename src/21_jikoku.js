import * as se from "./se.js";
import { answerCreate } from "./answerCreate.js";

export function step21() {
  const TBL = document.getElementById("TBL");
  question.addEventListener("click", () => question_create());
  question_create();

  function question_create() {
    se.set.currentTime = 0;
    se.set.play();
    const ans = [];
    const l_val = [];
    const m_val = [];
    const r_val = [];
    for (let i = 0; i < 15; i++) {
      l_val[i] = Math.floor(Math.random() * 9 + 2) * 100 + Math.floor(Math.random() * 5 + 1) * 10;
      r_val[i] = Math.floor(Math.random() * 11 + 1) * 5;
      let minutes = Math.floor(l_val[i] / 100) * 60 + (l_val[i] % 100);
      let tmp;
      switch (i) {
        case 0:
        case 1:
          tmp = minutes - r_val[i];
          ans[i] = `${Math.floor(tmp / 60)}時${tmp % 60}分`;
          break;
        case 2:
        case 3:
          tmp = minutes + r_val[i];
          ans[i] = `${Math.floor(tmp / 60)}時${tmp % 60}分`;
          break;
        case 4:
        case 5:
          tmp = minutes + r_val[i];
          ans[i] = `${r_val[i]}分`;
          r_val[i] = `${Math.floor(tmp / 60)}時${tmp % 60}分`;
          break;
        case 6:
          ans[i] = `${Math.floor(60 + r_val[i])}分`;
          break;
        case 7:
          ans[i] = `${Math.floor(60 + r_val[i])}秒`;
          break;
        case 8:
          ans[i] = `１分${r_val[i]}秒`;
          break;
        case 9:
          l_val[i] = Math.floor(Math.random() * 2 + 9) * 100 + Math.floor(Math.random() * 5 + 1) * 10;
          let minutes_1 = Math.floor(l_val[i] / 100) * 60 + (l_val[i] % 100);
          r_val[i] = Math.floor(Math.random() * 3 + 14) * 100 + Math.floor(Math.random() * 5 + 1) * 10;
          let minutes_2 = Math.floor(r_val[i] / 100) * 60 + (r_val[i] % 100);
          tmp = minutes_2 - minutes_1;
          console.log(minutes_2, minutes_1, tmp);
          ans[i] = `${Math.floor(tmp / 60)}時間${tmp % 60}分`;
          break;
      }
    }
    TBL.innerHTML = `
    <div>
  <h3 class="1">次の　時こくを　もとめましょう。</h3>
  <h3 class="py-3">①　${Math.floor(l_val[0] / 100)}時${l_val[0] % 100}分の${r_val[0]}分前の時こく（　時　　分）</h3>
  <h3 class="py-3">②　${Math.floor(l_val[1] / 100)}時${l_val[1] % 100}分の${r_val[1]}分前の時こく（　時　　分）</h3>
  <h3 class="py-3">③　${Math.floor(l_val[2] / 100)}時${l_val[2] % 100}分から${r_val[2]}分あとの時こく（　時　　分）</h3>
  <h3 class="py-3">④　${Math.floor(l_val[3] / 100)}時${l_val[3] % 100}分から${r_val[3]}分あとの時こく（　時　　分）</h3>
  <h3 class="py-3">⑤　${Math.floor(l_val[4] / 100)}時${l_val[4] % 100}分から${r_val[4]}まで（　　分）</h3>
  <h3 class="py-3">⑥　${Math.floor(l_val[5] / 100)}時${l_val[5] % 100}分から${r_val[5]}まで（　　分）</h3>
  <h3 class="py-3">⑦　１時間${r_val[6]}分＝（　　分）</h3>
  <h3 class="py-3">⑧　１分${r_val[7]}秒＝（　　秒）</h3>
  <h3 class="py-3">⑨　${r_val[8] + 60}秒＝（　分　　秒）</h3>
  <h3 class="py-3">⑩　午前${Math.floor(l_val[9] / 100)}時${l_val[9] % 100}分から午後${Math.floor(
      r_val[9] / 100 - 12
    )}時${r_val[9] % 100}分まで</h3>
  <h3 style="text-align:right;">（　　時間　　分）</h3>
  
  </div>
  `;
    answerCreate(ans);
  }
}
