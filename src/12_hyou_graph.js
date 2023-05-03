import * as se from "./se.js";

export function step12() {
  const ANIMALS = ["dog", "frog", "horse", "monkey"];
  const animals = ["いぬ", "かえる", "うま", "さる"];
  const table_items = [
    "どうぶつ",
    "いぬ",
    "かえる",
    "うま",
    "さる",
    "かず",
    "①　　　　　",
    "②　　　　　",
    "③　　　　　",
    "④　　　　　",
  ];
  let dog_length;
  let flog_length;
  let horse_length;
  let monky_length;
  let max_length;
  let min_length;
  let max_length_index;
  let min_length_index;
  let max_length_animal;
  let min_length_animal;

  const TBL = document.getElementById("TBL");
  TBL.innerHTML = `
  <h3>　どうぶつの　かずを　しらべます。</h3>
  <div id="animal_field" style="width:100%;height:200px;border:solid 1px gray;padding:20px;"></div>
  <br/>
  <h4>☆　どうぶつの　かずを　下の　ひょうに　かきましょう。</h4>
  <h5 style="text-align:center;">どうぶつの　かずしらべ</h5>
  <div id="animal_table"></div>
  <br/>
  <div style="display:flex;">
    <div style="width:60%;margin-right:20px;">
      <h4>☆　どうぶつの　かずを<br/>　●を　つかって、右のグラフに　<br/>　かきましょう。</h4>
      <br/>
      <h4>⑨　いちばん　おおい<br/>　どうぶつは　なんですか。</h4>
      <h3 style="text-align:right;">(　　　　　　　)</h3>
      <br/>
      <h4 id="text"></h4>
      <h3 style="text-align:right;">(　　　　　ひき)</h3>
    </div>
    <div id="animal_graph" style="margin-left:auto;"></div>
  </div>
  `;

  question_create();

  //問題作成を行うボタンの設置
  question.addEventListener("click", () => question_create());

  function question_create() {
    se.set.currentTime = 0;
    se.set.play();
    const order = [];
    let num = [2, 3, 4, 5, 6, 7, 8];
    for (let i = 0; i < 7; i++) {
      order.push(...num.splice(Math.floor(Math.random() * num.length - 1), 1));
    }
    dog_length = order[0];
    flog_length = order[1];
    horse_length = order[2];
    monky_length = order[3];
    const animal_length = [dog_length, flog_length, horse_length, monky_length];
    max_length = Math.max(dog_length, flog_length, horse_length, monky_length);
    max_length_index = animal_length.indexOf(max_length);
    max_length_animal = animals[max_length_index];
    min_length = Math.min(dog_length, flog_length, horse_length, monky_length);
    min_length_index = animal_length.indexOf(min_length);
    min_length_animal = animals[min_length_index];
    document.getElementById(
      "text"
    ).innerHTML = `⑩　${max_length_animal}は　${min_length_animal}より<br/>　なんびき　おおいですか。`;
    document.getElementById("animal_field").innerHTML = "";
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < animal_length[i]; j++) {
        const img = document.createElement("img");
        img.setAttribute("class", "animal");
        img.src = `./Images/${ANIMALS[i]}.png`;
        document.getElementById("animal_field").appendChild(img);
      }
    }

    const area = document.getElementById("answer-area");
    area.innerHTML = `
    ①　${dog_length}　
    ②　${flog_length}　
    ③　${horse_length}　
    ④　${monky_length}
    <br/>
    ⑤～⑧　あっているか　どうか　だれかに　みてもらいましょう。
    <br/>
    ⑨　${max_length_animal}　
    ⑩　${max_length - min_length}ひき
    `;
  }

  const animal_TBL = document.createElement("table");
  for (let i = 0; i < 2; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < 5; j++) {
      const td = document.createElement("td");
      td.classList.add("animal_td");
      td.innerHTML = table_items[i * 5 + j];
      td.style.height = `${30 + i * 20}px`;
      tr.appendChild(td);
    }
    animal_TBL.appendChild(tr);
  }

  const total_TBL = document.createElement("table");
  const bangou = ["⑤", "⑥", "⑦", "⑧"];
  for (let i = 0; i < 9; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < 4; j++) {
      const td = document.createElement("td");
      td.style.width = "60px";
      td.style.height = "40px";
      td.style.border = "solid 1px black";
      tr.appendChild(td);
      if (i === 8) {
        td.style.height = "80px";
        td.style.paddingTop = "5px";
        td.style.writingMode = "vertical-rl";
        td.innerHTML = `${bangou[j]}${animals[j]}`;
      }
    }
    total_TBL.appendChild(tr);
  }

  document.getElementById("animal_table").appendChild(animal_TBL);
  document.getElementById("animal_graph").appendChild(total_TBL);
}
