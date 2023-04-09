import { duplicationCheck } from "./duplicationCheck.js";
import * as se from "./se.js";
let text_1a, text_1b, text_2a, text_2b, text_2c, text_3a, text_3b, text_4a, text_5a, text_6a;

export function step10() {
  let order = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
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
    const kigo_array = ["+", "-", "+", "-", "-", "+", "-", "-", "+", "+"];
    const tani_array = ["人", "人", "本", "本", "本", "こ", "こ", "だん", "こ", "人"];
    const check_array = []; //重複をチェックするための配列
    se.set.currentTime = 0;
    se.set.play();
    let a,
      b,
      count = 0,
      ans;

    while (check_array.length < 10) {
      //重複のない式の組合せが必ず10以上になるようにする。
      a = Math.floor(Math.random() * 9 + 2);
      b = Math.floor(Math.random() * a);
      if (kigo_array[count] === "+") {
        ans = Math.floor(a + b);
      } else {
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

    text_1a = `
  こどもが　${left_array[0]}人　あそんでいました。<br/>
  そこへ、　${right_array[0]}人　やってきました。<br/>
  みんなで　なん人になりましたか。<br/>
  `;
    text_1b = `
  こどもが　${left_array[1]}人　あそんでいました。<br/>
  ${right_array[1]}人　かえっていきました。<br/>
  のこりは　なん人になりましたか。<br/>
  `;
    text_2a = `
  あかい　かさが　${left_array[2]}本，　<br/>
  きいろい　かさが、　${right_array[2]}本　あります。<br/>
  かさは　ぜんぶで　なん本　ですか。<br/>
  `;
    text_2b = `
  あかい　かさが　${left_array[3]}本，　<br/>
  きいろい　かさが、　${right_array[3]}本　あります。<br/>
  あかい　かさは、きいろい　かさより、<br/>
  なん本　おおいですか。<br/>
  `;
    text_2c = `
  あかい　かさが　${left_array[4]}本，　<br/>
  きいろい　かさが、　${right_array[4]}本　あります。<br/>
  きいろい　かさは、あかい　かさより、<br/>
  なん本　すくないですか。<br/>
  `;
    text_3a = `
  あめが　${left_array[5]}こ，あります。<br/>
  そこへ、　${right_array[5]}こ　もらいました。<br/>
  あめは　ぜんぶで　なんこ　ありますか。<br/>
  `;
    text_3b = `
  あめが　${left_array[6]}こ，あります。<br/>
  ${right_array[6]}こ　たべました。<br/>
  あめは　のこり　なんこに　なりましたか。<br/>
  `;
    text_4a = `
  かいだんが　ぜんぶで　${left_array[7]}だん，あります。<br/>
  ${right_array[7]}だんめまで　のぼりました。<br/>
  あと　なんだん　ありますか。
  `;
    text_5a = `
  いすに　${left_array[8]}人，すわっています。<br/>
  あいている　いすは　${right_array[8]}こ　あります。<br/>
  いすは、みんなで　いくつ　ありますか。<br/>
  `;
    text_6a = `
  たろうさんは、うしろから　${left_array[9]}ばんめに　います。<br/>
  たろうさんの　まえに　${right_array[9]}人　います。<br/>
  みんなで　なん人　いますか。<br/>
  `;
    const TEXT = [text_1a, text_1b, text_2a, text_2b, text_2c, text_3a, text_3b, text_4a, text_5a, text_6a];
    document.getElementById("quest_1").innerHTML = TEXT[order[0]];
    document.getElementById("quest_2").innerHTML = TEXT[order[1]];
    document.getElementById("quest_3").innerHTML = TEXT[order[2]];
    document.getElementById("quest_4").innerHTML = TEXT[order[3]];

    const area = document.getElementById("answer-area");
    area.innerHTML =`
    ①　${answer_array[order[0]]}　　
    ②　${answer_array[order[1]]}</br>
    ③　${answer_array[order[2]]}　　
    ④　${answer_array[order[3]]}
    `
  }

  function shuffleOrder() {
    order = [];
    let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < 10; i++) {
      order.push(...num.splice(Math.floor(Math.random() * num.length - 1), 1));
    }
  }
}
