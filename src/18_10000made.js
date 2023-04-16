import { duplicationCheck } from "./duplicationCheck.js";
import * as se from "./se.js";

export function step18() {
  const TBL = document.getElementById("TBL");
  //問題作成を行うボタンの設置
  question.addEventListener("click", () => question_create());
  question_create();

  function question_create() {
    const ans = []; //答えを格納する
    const ans_1000 = []; //答えを格納する
    const ans_100 = []; //答えを格納する
    const ans_10 = []; //答えを格納する
    const ans_1 = []; //答えを格納する
    const check_array = []; //重複をチェックするための配列
    se.set.currentTime = 0;
    se.set.play();
    let answer;

    while (check_array.length < 10) {
      const a = Math.floor(Math.random() * 9 + 1);
      const b = Math.floor(Math.random() * 9 + 1);
      const c = Math.floor(Math.random() * 9 + 1);
      const d = Math.floor(Math.random() * 9 + 1);
      answer = a * 1000 + b * 100 + c * 10 + d;
      const check = answer;
      const result = duplicationCheck(check, check_array);

      if (result) {
        check_array.push(check);
        ans_1000.push(a);
        ans_100.push(b);
        ans_10.push(c);
        ans_1.push(d);
        ans.push(answer);
      }
    }

    TBL.innerHTML = `
    <div class="h4" style="line-height:34px;">
      <div class="py-2">①　1000を${ans_1000[0]}こ、100を${ans_100[0]}こ、10を${ans_10[0]}こ、1を${
      ans_1[0]
    }こ<br>　あわせた　数は　（　　　　）です。</div>
      <div class="py-2">①　1000を${ans_1000[1]}こ、100を${ans_100[1]}こ、10を${ans_10[1]}こ、1を${
      ans_1[1]
    }こ<br>　あわせた　数は　（　　　　）です。</div>

      <div class="py-2">③　${ans[2]}は、1000を（　　）こ、100を（　　）こ、<br>　10を（　　）こ　１を（　　）こ　あわせた　数です。</div>
      <div class="py-2">④　${ans[3]}は、1000を（　　）こ、100を（　　）こ、<br>　10を（　　）こ　１を（　　）こ　あわせた　数です。</div>

      <div class="py-2">⑤　${ans[4] - ans_100[4] * 100}は、1000を（　　）こ、<br>　10を（　　）こ、　１を（　　）こ　あわせた　数です。</div>
      <div class="py-2">⑥　${ans[5] - ans_10[5] * 10}は、1000を（　　）こ、　100を（　　）こ、<br>　１を（　　）こ　あわせた　数です。</div>
      <div class="py-2">⑦　100を　${ans_1000[6] * 10 + ans_100[6] * 1}こ　あつめた　数は、<br>　（　　　　）です。</div>
      <div class="py-2">⑧　100を　${ans_1000[7] * 10 + ans_100[7] * 1}こ　あつめた　数は、<br>　（　　　　）です。</div>
      <div class="py-2">⑨　${ans_1000[8] * 1000 + ans_100[8] * 100}は　100を（　　　）こあつめた数です。<br>　また、10を（　　　）こあつめた数です。</div>
      <div class="py-2">⑩　${ans_1000[9] * 1000 + ans_100[9] * 100}は　100を（　　　）こあつめた数です。<br>　また、10を（　　　）こあつめた数です。</div>
    </div>
    `;

    const area = document.getElementById("answer-area");
    area.innerHTML = `
    ①　${ans[0]}　　
    ②　${ans[1]}　　
    ③　${ans_1000[2]}こ,${ans_100[2]}こ,${ans_10[2]}こ,${ans_1[2]}こ　　
    ④　${ans_1000[3]}こ,${ans_100[3]}こ,${ans_10[3]}こ,${ans_1[3]}こ　　
    </br>
    ⑤　1000を${ans_1000[4]}こ,100を${ans_10[4]}こ,1を${ans_1[4]}こ　
    ⑥　1000を${ans_1000[5]}こ,100を${ans_100[5]}こ,1を${ans_1[5]}こ　
    </br>
    ⑦　${ans_1000[6] * 1000 + ans_100[6] * 100}　　
    ⑧　${ans_1000[7] * 1000 + ans_100[7] * 100}　　
    ⑨　${ans_1000[8] * 10 + ans_100[8] * 1}こ、　${ans_1000[8] * 100 + ans_100[8] * 10}こ　　
    ⑩　${ans_1000[9] * 10 + ans_100[9] * 1}こ、　${ans_1000[9] * 100 + ans_100[9] * 10}こ
    `;
  }
}
