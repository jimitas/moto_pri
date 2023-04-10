import { duplicationCheck } from "./duplicationCheck.js";
import * as se from "./se.js";
let text_1, text_2, text_3, text_4;

export function step08() {
  let order = [0, 1, 2, 3];
  TBL.innerHTML = `
  <div class="h4">
    <div style="display:flex;">
      <div>①　</div>
      <div id="quest_1"></div>
    </div>
    <div>　　（しき）</div>
    <div style="width:180mm;text-align:right;">（こたえ）　　　　　　　</div> 
    <div style="width:180mm;text-align:right;">＿＿＿＿＿＿＿</div> 
    <br/>
    </div>
    
    <div class="h4">
    <div style="display:flex;">
    <div>②　</div>
    <div id="quest_2"></div>
    </div>
    <div>　　（しき）</div>
    <div style="width:180mm;text-align:right;">（こたえ）　　　　　　　</div> 
    <div style="width:180mm;text-align:right;">＿＿＿＿＿＿＿</div> 
    <br/>
    </div>
    
    <div class="h4">
    <div style="display:flex;">
    <div>③　</div>
    <div id="quest_3"></div>
    </div>
    <div>　　（しき）</div>
    <div style="width:180mm;text-align:right;">（こたえ）　　　　　　　</div> 
    <div style="width:180mm;text-align:right;">＿＿＿＿＿＿＿</div> 
    <br/>
    </div>
    <div class="h4">
    <div style="display:flex;">
    <div>④　</div>
    <div id="quest_4"></div>
    </div>
    <div>　　（しき）</div>
    <div style="width:180mm;text-align:right;">（こたえ）　　　　　　　</div> 
    <div style="width:180mm;text-align:right;">＿＿＿＿＿＿＿</div> 
    <br/>
    </div>
`;
  question_create();
  //問題作成を行うボタンの設置
  question.addEventListener("click", () => question_create());

  function question_create() {
    shuffleOrder();
    const left_array = []; //式の左の値を格納する
    const right_array = []; //式の右の値を格納する
    const answer_array = []; //答えを格納する
    const kigo_array = ["-", "+", "+", "-"];
    const tani_array = ["まい", "人", "人", "人"];
    const check_array = []; //重複をチェックするための配列
    se.set.currentTime = 0;
    se.set.play();
    let a,
      b,
      count = 0,
      ans;

    while (check_array.length < 10) {
      //重複のない式の組合せが必ず10以上になるようにする。
      if (kigo_array[count] === "+") {
        a = Math.floor(Math.random() * 9 + 2);
        b = Math.floor(Math.random() * 9 + 2);
        ans = Math.floor(a + b);
      } else {
        a = Math.floor(Math.random() * 9 + 5);
        b = Math.floor(Math.random() * (a - 1) + 2);
        ans = Math.floor(a - b);
      }

      const check = +(a * 100 + b); //チェック用の値
      const result = duplicationCheck(check, check_array);

      if (result) {
        check_array.push(check);
        left_array.push(a);
        right_array.push(b);
        answer_array.push(`しき　${a}${kigo_array[count]}${b}=${ans}　こたえ　${ans}${tani_array[count]}`);
        count++;
      }
    }

    text_1 = `
  のりものの　けんが　${left_array[0]}まい　あります。<br/>
  ${right_array[0]}人の　こどもに　１まいずつ<br/>
  わたすと、なんまい　のこりますか。<br/>
  `;

    text_2 = `
  しゃしんを　とります。<br/>
  ${left_array[1]}つの　いすに，ひとりずつ　すわり、<br/>
  うしろに　${right_array[1]}人　たちます。<br/>
  なん人で　しゃしんを　とりますか。<br/>
  `;

    text_3 = `
  ひかるさんは　まえから　${left_array[2]}ばんめに　ならんでいます。<br/>
  ひかるさんの　うしろには　${right_array[2]}人　います。<br/>
  みんなで　なん人　ならんで　いますか。<br/>
  `;
    text_4 = `
  ${left_array[3]}人　ならんで　います。<br/>
  かおるさんは　まえから　${right_array[3]}ばんめに　います。<br/>
  かおるさんの　うしろには　なんにん　いますか。<br/>
  `;
    const TEXT = [text_1, text_2, text_3, text_4];
    document.getElementById("quest_1").innerHTML = TEXT[order[0]];
    document.getElementById("quest_2").innerHTML = TEXT[order[1]];
    document.getElementById("quest_3").innerHTML = TEXT[order[2]];
    document.getElementById("quest_4").innerHTML = TEXT[order[3]];

    const area = document.getElementById("answer-area");
    area.innerHTML = `
    ①　${answer_array[order[0]]}　　
    ②　${answer_array[order[1]]}</br>
    ③　${answer_array[order[2]]}　　
    ④　${answer_array[order[3]]}
    `;
  }

  function shuffleOrder() {
    order = [];
    let num = [0, 1, 2, 3];
    for (let i = 0; i < 4; i++) {
      order.push(...num.splice(Math.floor(Math.random() * num.length - 1), 1));
    }
  }
}
