import * as se from "./se.js";
import { duplicationCheck } from "./duplicationCheck.js";
import { answerCreate } from "./answerCreate.js";

export function step09() {
  TBL.innerHTML = `
  <div style="display: flex;justify-content:space-between;flex-wrap:wrap;">
    <div style="display:flex;font-size:20px;">
      <div>①</div>
      <div>
        <canvas width="400" height="400" class="clock" style="zoom:65%;margin-top:-25px;"></canvas>
        <div class="clock_answer_text">  　　じ　　ふん</div>
      </div>
    </div>
    <div style="display:flex;font-size:20px;">
      <div>②</div>
      <div>
        <canvas width="400" height="400" class="clock" style="zoom:65%;margin-top:-25px;"></canvas>
        <div class="clock_answer_text">  　　じ　　ふん</div>
      </div>
    </div>
    <div style="display:flex;font-size:20px;">
      <div>③</div>
      <div>
        <canvas width="400" height="400" class="clock" style="zoom:65%;margin-top:-25px;"></canvas>
        <div class="clock_answer_text">  　　じ　　ふん</div>
      </div>
    </div>
    <div style="display:flex;font-size:20px;">
      <div>④</div>
      <div>
        <canvas width="400" height="400" class="clock" style="zoom:65%;margin-top:-25px;"></canvas>
        <div class="clock_answer_text">  　　じ　　ふん</div>
      </div>
    </div>
    <div style="display:flex;font-size:20px;">
      <div>⑤</div>
      <div>
        <canvas width="400" height="400" class="clock" style="zoom:65%;margin-top:-25px;"></canvas>
        <div class="clock_answer_text">  　　じ　　ふん</div>
      </div>
    </div>
    <div style="display:flex;font-size:20px;">
      <div>⑥</div>
      <div>
        <canvas width="400" height="400" class="clock" style="zoom:65%;margin-top:-25px;"></canvas>
        <div class="clock_answer_text">  　　じ　　ふん</div>
      </div>
    </div>
  </div>
  `;
  //問題作成を行うボタンの設置
  document.getElementById("question").addEventListener("click", () => question_create());
  question_create();

  //問題作成
  function question_create() {
    const answer_array = []; //答えを格納する
    const check_array = []; //重複をチェックするための配列
    let hours, minutes, Hint, ans;
    let count = 0;
    se.set.currentTime = 0;
    se.set.play();

    //ここに式を記述する。
    while (check_array.length < 6) {
      //重複のない式の組合せが必ず6以上になるようにする。
      const canvas = document.getElementsByClassName("clock")[count];
      const ctx = canvas.getContext("2d");
      hours = Math.floor(Math.random() * 12 + 1);
      minutes = Math.floor(Math.random() * 60);
      ans = `${hours}じ　${minutes}ふん`;

      const check = +(hours * 100 + minutes); //チェック用の値
      const result = duplicationCheck(check, check_array);

      if (result) {
        check_array.push(check);
        answer_array.push(ans);
        if (count < 2) {
          Hint = "hint1";
        } else {
          Hint = "";
        }
        count++;
        draw(canvas, ctx, hours, minutes, Hint);
      }
    }
    answerCreate(answer_array);
  }

  function mRotate(ctx, minutes) {
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.lineWidth = 3.0;
    ctx.lineTo(
      200 + 130 * Math.cos((Math.PI / 180) * (270 + 6 * minutes)),
      200 + 130 * Math.sin((Math.PI / 180) * (270 + 6 * minutes))
    );
    ctx.strokeStyle = "blue";
    ctx.stroke();
  }

  function hRotate(ctx, hours, minutes) {
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.lineWidth = 6.0;
    ctx.lineTo(
      200 + 100 * Math.cos((Math.PI / 180) * (270 + 30 * (hours + minutes / 60))),
      200 + 100 * Math.sin((Math.PI / 180) * (270 + 30 * (hours + minutes / 60)))
    );
    ctx.strokeStyle = "red";
    ctx.stroke();
  }

  function rotate(ctx, hours, minutes) {
    mRotate(ctx, minutes);
    hRotate(ctx, hours, minutes);
  }

  function drawText(ctx, Hint) {
    ctx.font = "30px 'ＭＳ ゴシック'";
    ctx.textAlign = "center";
    const textArrX = [260, 305, 325, 310, 265, 200, 140, 95, 75, 95, 135, 200];
    const textArrY = [105, 150, 210, 275, 320, 335, 320, 270, 210, 150, 105, 85];
    const textArrX2 = [200, 280, 340, 360, 340, 280, 200, 120, 60, 40, 60, 120];
    const textArrY2 = [45, 65, 125, 205, 285, 345, 365, 345, 285, 205, 125, 65];
    for (let i = 0; i <= 11; i++) {
      ctx.fillText(i + 1, textArrX[i], textArrY[i]);
    }
    ctx.font = "15px 'ＭＳ ゴシック'";
    if (Hint == "hint1") {
      for (let i = 0; i <= 11; i++) {
        ctx.fillText(i * 5, textArrX2[i], textArrY2[i]);
      }
    } else if (Hint == "hint2") {
      for (let i = 0; i < 60; i++) {
        ctx.fillText(
          i,
          200 + 160 * Math.cos((Math.PI / 180) * (270 + i * 6)),
          205 + 160 * Math.sin((Math.PI / 180) * (270 + i * 6))
        );
      }
    }
    ctx.font = "10px 'ＭＳ ゴシック'";
  }

  function drawScale(ctx) {
    for (let l = 0; l < 60; l++) {
      ctx.beginPath();
      ctx.moveTo(
        200 + 150 * Math.cos((Math.PI / 180) * (270 + l * 6)),
        200 + 150 * Math.sin((Math.PI / 180) * (270 + l * 6))
      );
      ctx.lineTo(
        200 + 145 * Math.cos((Math.PI / 180) * (270 + l * 6)),
        200 + 145 * Math.sin((Math.PI / 180) * (270 + l * 6))
      );
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = "black";
      ctx.stroke();
    }
    for (let m = 0; m < 12; m++) {
      ctx.beginPath();
      ctx.moveTo(
        200 + 150 * Math.cos((Math.PI / 180) * (270 + m * 30)),
        200 + 150 * Math.sin((Math.PI / 180) * (270 + m * 30))
      );
      ctx.lineTo(
        200 + 140 * Math.cos((Math.PI / 180) * (270 + m * 30)),
        200 + 140 * Math.sin((Math.PI / 180) * (270 + m * 30))
      );
      ctx.lineWidth = 3.0;
      ctx.strokeStyle = "black";
      ctx.stroke();
    }
  }

  function drawBoard(canvas, ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(200, 200, 150, 0, Math.PI * 2);
    ctx.lineWidth = 1.0;
    ctx.strokeStyle = "black";
    ctx.stroke();
  }

  function draw(canvas, ctx, hours, minutes, Hint) {
    drawBoard(canvas, ctx, canvas);
    drawScale(ctx);
    drawText(ctx, Hint);
    rotate(ctx, hours, minutes);
  }
}
