import * as se from "./se.js";

export function step28() {
  const bangou = ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩", "⑪", "⑫", "⑬", "⑭", "⑮", "⑯", "⑰", "⑱", "⑲", "⑳"];
  const fugou = ["ア", "イ", "ウ", "エ"];
  const bunbo = [];
  const bunshi = [];
  const shinbunsu = [];
  const kabunsu = [];
  const taibunsu = [];
  const answer_array = []; //答えを格納する
  const TBL = document.getElementById("TBL");

  // 問題１…次の分数を真分数と仮分数に分ける
  const text_1 = document.createElement("div");
  text_1.innerHTML = `<h3>☆次の分数を真分数と仮分数に分けましょう。</h3>`;
  TBL.appendChild(text_1);

  const text_2 = document.createElement("div");
  text_2.style.display = "flex";
  for (let i = 0; i < 4; i++) {
    bunshi[i] = Math.floor(Math.random() * 9 + 1);
    bunbo[i] = Math.floor(Math.random() * 9 + 1);
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
    bunshi[i] = Math.floor(Math.random() * bunbo[i] + 1);
    taibunsu[i] = Math.floor(Math.random() * 3 + 1);
    answer_array[i - 2] = `
     <div  class="d-flex fraction">
      <div>
        <span class="numerator">${taibunsu[i] * bunbo[i] + bunshi[i]}</span>
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
  text_6.innerHTML = `<h3>☆次の数の大きさをくらべ、等号や不等号を使って<br/>　式に表しましょう。</h3>`;
  TBL.appendChild(text_6);


  const area = document.getElementById("answer-area");
  area.innerHTML = "";
  for (let i = 0; i < answer_array.length; i++) {
    const div = document.createElement("div");
    const len = Math.floor(answer_array.length + 0.5);
    const width = 100 / len;
    div.style.width = width + "%";
    div.style.display = "flex";
    div.innerHTML = `${bangou[i]}　${answer_array[i]}`;
    area.appendChild(div);
  }

  function display_fractions(bunshi, bunbo, kabunsu) {
    const bunsu_elm = document.createElement("div");
    bunsu_elm.innerHTML = `
    <div  class="d-flex fraction">
      <div class="improper_fraction">${kabunsu}</div>
      <div>
        <span class="numerator">${bunshi}</span>
        <span class="denominator">${bunbo}</span>
      </div>
    </div>
    `;
    return bunsu_elm;
  }

  // function bunsu(bunshi, bunbo, kabunsu) {
  //   const bunsu_elm = document.createElement("div");
  //   bunsu_elm.innerHTML = `
  //   <div  class="d-flex">
  //   <div  class="d-flex fraction">
  //     <div class="improper_fraction">${kabunsu}</div>
  //     <div>
  //       <span class="numerator">${bunshi}</span>
  //       <span class="denominator">${bunbo}</span>
  //     </div>
  //   </div>
  //   <div class="kigo">+</div>
  //   <div  class="d-flex fraction">
  //     <div class="improper_fraction">${kabunsu}</div>
  //     <div>
  //       <span class="numerator">${bunshi}</span>
  //       <span class="denominator">${bunbo}</span>
  //     </div>
  //   </div>
  //   </div>
  //   `;
  //   return bunsu_elm;
  // }
}
