import { answerCreate } from "./answerCreate.js";
import * as se from "./se.js";

export function step28() {
  const bangou = ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩", "⑪", "⑫", "⑬", "⑭", "⑮", "⑯", "⑰", "⑱", "⑲", "⑳"];
  const fugou = ["ア", "イ", "ウ", "エ"];
  const bunbo = [];
  const bunshi = [];
  const bunshi_2 = [];
  const taibunsu = [];
  const taibunsu_2 = [];

  const answer_array = []; //答えを格納する
  const TBL = document.getElementById("TBL");

  //問題作成を行うボタンの設置
  document.getElementById("question").addEventListener("click", () => question_create());
  question_create();

  function question_create() {
    TBL.innerHTML = "";
    const shinbunsu = [];
    const kabunsu = [];
    // 問題１…次の分数を真分数と仮分数に分ける
    const text_1 = document.createElement("div");
    text_1.innerHTML = `<h3>☆次の分数を真分数と仮分数に分けましょう。</h3>`;
    TBL.appendChild(text_1);

    const text_2 = document.createElement("div");
    text_2.style.display = "flex";
    for (let i = 0; i < 4; i++) {
      bunshi[i] = Math.floor(Math.random() * 8 + 2);
      bunbo[i] = Math.floor(Math.random() * 7 + 3);
      if (bunshi[i] < bunbo[i]) {
        shinbunsu.push(fugou[i]);
      } else {
        kabunsu.push(fugou[i]);
      }
    }
    answer_array[0] = shinbunsu;
    answer_array[1] = kabunsu;

    text_2.innerHTML = `
    <div  class="d-flex fraction">
      <div class="improper_fraction">ア　</div>
      <div>
        <span class="numerator">${bunshi[0]}</span>
        <span class="denominator">${bunbo[0]}</span>
      </div>
       <div class="improper_fraction">　，　</div>
    </div>
    <div  class="d-flex fraction">
      <div class="improper_fraction">イ　</div>
      <div>
        <span class="numerator">${bunshi[1]}</span>
        <span class="denominator">${bunbo[1]}</span>
      </div>
       <div class="improper_fraction">　，　</div>
    </div>
    <div  class="d-flex fraction">
      <div class="improper_fraction">ウ　</div>
      <div>
        <span class="numerator">${bunshi[2]}</span>
        <span class="denominator">${bunbo[2]}</span>
      </div>
       <div class="improper_fraction">　，　</div>
    </div>
    <div  class="d-flex fraction">
      <div class="improper_fraction">エ　</div>
      <div>
        <span class="numerator">${bunshi[3]}</span>
        <span class="denominator">${bunbo[3]}</span>
      </div>
    </div>
    `;

    TBL.appendChild(text_2);

    const text_3 = document.createElement("div");
    text_3.innerHTML = `<h4>①真分数は（　　　　）,　②仮分数は（　　　　）</h4><br/>`;
    TBL.appendChild(text_3);

    // 問題２…次の帯分数を仮分数になおす。
    const text_4 = document.createElement("div");
    text_4.innerHTML = `<h3>☆次の帯分数を仮分数になおしましょう。</h3>`;
    TBL.appendChild(text_4);

    const text_5 = document.createElement("div");
    text_5.style.display = "flex";
    for (let i = 4; i < 8; i++) {
      bunbo[i] = Math.floor(Math.random() * 8 + 2);
      bunshi[i] = Math.floor(Math.random() * (bunbo[i]-1) + 1);
      taibunsu[i] = Math.floor(Math.random() * 3 + 1);
      const kabunsu = bunbo[i] * taibunsu[i] + bunshi[i];

      answer_array[i - 2] = `
     <div  class="d-flex fraction">
      <div>
        <span class="numerator">${kabunsu}</span>
        <span class="denominator">${bunbo[i]}</span>
      </div>
    </div>`;
    }

    text_5.innerHTML = `
  <div  class="d-flex fraction">
    <div class="improper_fraction">③</div>
    <div class="improper_fraction">${taibunsu[4]}</div>
    <div>
      <span class="numerator">${bunshi[4]}</span>
      <span class="denominator">${bunbo[4]}</span>
    </div>
     <div class="improper_fraction">＝　　　</div>
  </div>
  <div  class="d-flex fraction">
    <div class="improper_fraction">④</div>
    <div class="improper_fraction">${taibunsu[5]}</div>
    <div>
      <span class="numerator">${bunshi[5]}</span>
      <span class="denominator">${bunbo[5]}</span>
    </div>
     <div class="improper_fraction">＝　　　</div>
  </div>
  <div  class="d-flex fraction">
    <div class="improper_fraction">⑤</div>
    <div class="improper_fraction">${taibunsu[6]}</div>
    <div>
      <span class="numerator">${bunshi[6]}</span>
      <span class="denominator">${bunbo[6]}</span>
    </div>
     <div class="improper_fraction">＝　　　</div>
  </div>
  <div  class="d-flex fraction">
    <div class="improper_fraction">⑥</div>
    <div class="improper_fraction">${taibunsu[7]}</div>
    <div>
      <span class="numerator">${bunshi[7]}</span>
      <span class="denominator">${bunbo[7]}</span>
    </div>
     <div class="improper_fraction">＝　　　</div>
  </div>
  `;
    TBL.appendChild(text_5);

    // 問題３…次の数の大きさをくらべ、等号や不等号を使って式に表す。
    const text_6 = document.createElement("div");
    text_6.innerHTML = `<br/><h3>☆次の数の大きさをくらべ、等号や不等号を使って<br/>　式に表しましょう。</h3>`;
    TBL.appendChild(text_6);

    const text_7 = document.createElement("div");
    text_7.style.display = "flex";
    for (let i = 8; i < 11; i++) {
      bunbo[i] = Math.floor(Math.random() * 8 + 2);
      if (i === 10) {
        bunshi[i] = 0;
      } else {
        bunshi[i] = Math.floor(Math.random() * (bunbo[i] - 1) + 1);
      }
      taibunsu[i] = Math.floor(Math.random() * 3 + 1);
      const kabunsu = bunbo[i] * taibunsu[i] + bunshi[i];

      bunshi_2[i] = Math.floor(Math.random() * kabunsu + bunbo[i]);

      if (kabunsu > bunshi_2[i]) {
        answer_array[i - 2] = ">";
      } else if (kabunsu < bunshi_2[i]) {
        answer_array[i - 2] = "<";
      } else if (kabunsu === bunshi_2[i]) {
        answer_array[i - 2] = "=";
      }
    }
    text_7.innerHTML = `
  <div  class="d-flex fraction">
    <div class="improper_fraction">⑦　</div>
    <div class="improper_fraction">${taibunsu[8]}</div>
      <div>
       <span class="numerator">${bunshi[8]}</span>
       <span class="denominator">${bunbo[8]}</span>
      </div>
    <div class="improper_fraction">　</div>
    <div>
      <span class="numerator">${bunshi_2[8]}</span>
      <span class="denominator">${bunbo[8]}</span>
    </div>
    　　　
  </div>
  <div  class="d-flex fraction">
    <div class="improper_fraction">⑧　</div>
    <div class="improper_fraction">${taibunsu[9]}</div>
      <div>
       <span class="numerator">${bunshi[9]}</span>
       <span class="denominator">${bunbo[9]}</span>
      </div>
    <div class="improper_fraction">　</div>
    <div>
      <span class="numerator">${bunshi_2[9]}</span>
      <span class="denominator">${bunbo[9]}</span>
    </div>
    　　　
  </div>
  <div  class="d-flex fraction">
    <div class="improper_fraction">⑨　</div>
    <div class="improper_fraction">${taibunsu[10]}</div>
    
    <div class="improper_fraction">　</div>
    <div>
      <span class="numerator">${bunshi_2[10]}</span>
      <span class="denominator">${bunbo[10]}</span>
    </div>
  </div>
  `;
    TBL.appendChild(text_7);

    // 問題４…次の計算をする。
    const text_8 = document.createElement("div");
    text_8.innerHTML = `<br/><h3>☆次の計算をしましょう。</h3>`;
    TBL.appendChild(text_8);

    const text_9 = document.createElement("div");
    const text_10 = document.createElement("div");
    text_9.style.display = "flex";
    text_10.style.display = "flex";
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
        const kabunsu = bunbo[i] * taibunsu[i] + bunshi[i];
        bunshi_result = kabunsu - bunshi_2[i];
      }

      answer_array[i - 2] = `
       <div  class="d-flex fraction">
        <div>
         <span class="numerator">${bunshi_result}</span>
         <span class="denominator">${bunbo[i]}</span>
        </div>
       </div>`;
    }
    text_9.innerHTML = `
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

    text_10.innerHTML = `
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
    TBL.appendChild(text_9);
    TBL.appendChild(text_10);

    answerCreate(answer_array);
  }
}
