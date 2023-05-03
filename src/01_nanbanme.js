import { duplicationCheck } from "./duplicationCheck.js";
import * as se from "./se.js";

export function step01() {
  const ANIMALS = ["dog", "duck", "frog", "horse", "monkey", "mouse"];
  let order = [0, 1, 2, 3, 4, 5];
  TBL.innerHTML = `
  <div class="h1">なんばんめですか。</div>
  <div class="h4 px-5 py-3" style="display:flex;border:solid 1px black;">
    <div class="pt-4">ひだり</div>
    <div id="imagePlace"></div>
    <div class="pt-4">みぎ　</div>
  </div>
  <div>
    <div class="h4">
      ①　<img id="img_1" src="./Images/dog.png" class="animal"/>は、ひだりから<input class="input-box mt-2"/>ばんめ
    </div>
    <br/>
    <div class="h4">
      ②　<img id="img_2" src="./Images/dog.png"/ class="animal"/>は、みぎから<input class="input-box mt-2"/>ばんめ
    </div>
    <br/>
    <div class="h4">
      ③　<img id="img_3" src="./Images/dog.png"/ class="animal"/>は、<br/>
      　　ひだりから<input class="input-box mt-1"/>ばんめ、
      みぎから<input class="input-box mt-1"/>ばんめ
    </div>
    <br/>
    <div class="h4">
      ④　<img id="img_4" src="./Images/dog.png"/ class="animal"/>は、<br/>
      　　ひだりから<input class="input-box mt-1"/>ばんめ、
      みぎから<input class="input-box mt-1"/>ばんめ
    </div>
    <br/>
    <div class="h4">
      ⑤　<img id="img_5" src="./Images/dog.png"/ class="animal"/>は、<br/>
      　　ひだりから<input class="input-box mt-1"/>ばんめ、
      みぎから<input class="input-box mt-1"/>ばんめ
    </div>
  </div>
  `;

  question_create();
  //問題作成を行うボタンの設置
  question.addEventListener("click", () => question_create());

  function question_create() {
    shuffleOrder();
    const answer_array = []; //答えを格納する
    const check_array = []; //重複をチェックするための配列
    se.set.currentTime = 0;
    se.set.play();
    let ans;

    while (check_array.length < 5) {
      //重複のない式の組合せが必ず5以上になるようにする。
      ans = Math.floor(Math.random() * 6 + 1);
      const check = ans;
      const result = duplicationCheck(check, check_array);

      if (result) {
        check_array.push(check);
        answer_array.push(ans);
      }
    }

    console.log(ANIMALS);
    console.log("order=" + order);
    console.log("answer=" + answer_array);

    document.getElementById("img_1").src = `./Images/${ANIMALS[order[answer_array[0] - 1]]}.png`;
    document.getElementById("img_2").src = `./Images/${ANIMALS[order[answer_array[1] - 1]]}.png`;
    document.getElementById("img_3").src = `./Images/${ANIMALS[order[answer_array[2] - 1]]}.png`;
    document.getElementById("img_4").src = `./Images/${ANIMALS[order[answer_array[3] - 1]]}.png`;
    document.getElementById("img_5").src = `./Images/${ANIMALS[order[answer_array[4] - 1]]}.png`;

    const area = document.getElementById("answer-area");
    area.innerHTML = `
    ①　ひだりから${answer_array[0]}ばんめ　
    ②　みぎから${7 - answer_array[1]}ばんめ　
    ③　ひだりから${answer_array[2]}ばんめ
    、みぎから${7 - answer_array[2]}ばんめ
    <br/>
    ④　ひだりから${answer_array[3]}ばんめ
     、みぎから${7 - answer_array[3]}ばんめ　
    ⑤　ひだりから${answer_array[4]}ばんめ
     、みぎから${7 - answer_array[4]}ばんめ
    `;
  }
  function shuffleOrder() {
    order = [];
    let num = [0, 1, 2, 3, 4, 5];
    for (let i = 0; i < 6; i++) {
      order.push(...num.splice(Math.floor(Math.random() * num.length - 1), 1));
    }
    putAnimal();
  }
  function putAnimal() {
    const imagePlace = document.getElementById("imagePlace");
    imagePlace.innerHTML = "";
    for (let i = 0; i < ANIMALS.length; i++) {
      const img = document.createElement("img");
      img.setAttribute("src", `./Images/${ANIMALS[order[i]]}.png`);
      img.setAttribute("class", "animal");
      imagePlace.appendChild(img);
    }
  }
}
