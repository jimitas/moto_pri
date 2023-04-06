import { Select_create } from "./set.js";
import { TBL_A_create } from "./set.js";
import { Answer_A_create } from "./set.js";
import * as se from "./se.js";

//初期設定
const kigo = "+";
const select_menu = ["10+□,□+10", "１□+□,□+１□", "20までのたしざん"];

export function step06() {
  let index = "0";
  Select_create(select_menu, index);
  TBL_A_create(kigo);
  Question_create(index);

  // セレクトモードの作成・設定
  document.getElementById("question").addEventListener("click", () => Question_create(index));
  select.addEventListener("change", () => {
    index = select.value;
    Question_create(index);
  });

  //問題セット
  function Question_create(index) {
    var a, b, ans,mode;
    se.set.currentTime = 0;
    se.set.play();
    const kaitou = [];
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 2; col++) {
        switch (index) {
          case "0": {
            ans = Math.floor(Math.random() * 10 + 11);
            mode = Math.floor(Math.random() * 2 + 1);
            if (mode === 1) {
              a = 10;
              b = ans - a;
            } else if (mode === 2) {
              b = 10;
              a = ans - b;
            }
            break;
            // 
          }
          case "1": {
            ans = Math.floor(Math.random() * 9 + 12);
            mode = Math.floor(Math.random() * 2 + 1);
            if (mode === 1) {
              a = Math.floor(Math.random() * (ans - 11) + 1);
              b = ans - a;
            } else if (mode === 2) {
              b = Math.floor(Math.random() * (ans - 11) + 1);
              a = ans - b;
            }
            break;
          }
          case "2": {
            a = Math.floor(Math.random() * 9 + 2);
            b = Math.floor(Math.random() * a + (10 - a) + 1);
            ans = Math.floor(a + b);
            break;
          }
        }
        kaitou.push(ans);
        TBL.rows[row].cells[col * 5 + 1].innerHTML = a;
        TBL.rows[row].cells[col * 5 + 3].innerHTML = b;
      }
    }
    Answer_A_create(kaitou);
    console.log(ans)
  }
}
