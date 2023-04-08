import { selectMenuCreate } from "./set.js";
import { duplicationCheck } from "./duplicationCheck.js";
import { oneLineFormulaCreate } from "./oneLineFormulaCreate.js";
import { answerCreate } from "./answerCreate.js";
import * as se from "./se.js";

export function step01() {
  const ANIMALS = ["dog", "duck", "frog", "horse", "monkey", "mouse"];
  const NUM = [1, 2, 3, 4, 5, 6];
  const DIR = ["ひだり", "みぎ"];
  let answer;
  let order = [0, 1, 2, 3, 4, 5];
  let index = 0;
  let direction = "ひだり";
  TBL.innerHTML = `
  <div class="h1">なんばんめですか。</div>
  <div class="h4 px-5 py-3" style="display:flex;border:solid 1px black;">
    <div class="pt-4">ひだり</div>
    <div id="imagePlace"></div>
    <div class="pt-4">みぎ　</div>
  </div>
  <div>
    <div class="h4">
      ①　<img src="../Images/dog.png"/ class="animal"/>は、ひだりから<input class="input-box mt-2"/>ばんめ
    </div>
    <br/>
    <div class="h4">
      ②　<img src="../Images/dog.png"/ class="animal"/>は、みぎから<input class="input-box mt-2"/>ばんめ
    </div>
    <br/>
    <div class="h4">
      ③　<img src="../Images/dog.png"/ class="animal"/>は、ひだりから<input class="input-box mt-2"/>ばんめ
    </div>
    <br/>
    <div class="h4">
      ④　<img src="../Images/dog.png"/ class="animal"/>は、<br/>
      　　ひだりから<input class="input-box mt-1"/>ばんめ、
      みぎから<input class="input-box mt-1"/>ばんめ
    </div>
    <br/>
    <div class="h4">
      ⑤　<img src="../Images/dog.png"/ class="animal"/>は、<br/>
      　　ひだりから<input class="input-box mt-1"/>ばんめ、
      みぎから<input class="input-box mt-1"/>ばんめ
    </div>
  </div>
  `;
  
  question_create();
  //問題作成を行うボタンの設置
  question.addEventListener("click", () => question_create());

  function question_create() {
    se.set.currentTime = 0;
    se.set.play();
    shuffleOrder();
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
    for (let i = 0; i < ANIMALS.length; i++) {
      const img = document.createElement("img");
      img.setAttribute("src", `../Images/${ANIMALS[order[i]]}.png`);
      img.setAttribute("class", "animal");
      imagePlace.appendChild(img);
    }
  }
}
