import { step01 } from "./01_nanbanme.js";
import { step02 } from "./02_tasu_1.js";
import { step03 } from "./03_hiku_1.js";
import { step04 } from "./04_nanji_1.js";
import { step05 } from "./05_3tuno.js";
import { step06 } from "./06_tasu_2.js";
import { step07 } from "./07_hiku_2.js";
import { step08 } from "./08_mono_hito.js";
import { step09 } from "./09_nanji_2.js";
import { step10 } from "./10_tasu_hiku.js";
import { step11 } from "./11_100made.js";

const TITLE = [
  // １年生
  "なんばんめ",
  "たしざん（１）",
  "ひきざん（１）",
  "なんじ　なんじはん",
  "３つの　かずの　けいさん",
  "たしざん（２）",
  "ひきざん（２）",
  "ものの　ひとと　かず",
  "なんじ　なんぷん",
  "たすのかな　ひくのかな",
  "１００までのかずのけいさん",
  // ２年生
  "ひょう・グラフと　時計",
  "たし算とひき算のひっ算（１）",
  "１０００までの数",
  "たし算とひき算のひっ算（２）",
  "かけ算（１）",
  "かけ算（２）",
  "１００００までの数",
  "かさ・長さのたんい",
  // ３年生
  "わり算",
  "時こくと時間",
  "あまりのあるわり算",
  "１けたをかけるかけ算の筆算",
  "２けたをかけるかけ算の筆算",
  // ４年生
  "１けたでわるわり算の筆算",
  "２けたでわるわり算の筆算",
  "小数のかけ算やわり算",
  "分数",
  // ５年生
  "体積",
  "小数のかけ算",
  "小数のわり算",
  "分数（１）",
  "単位量あたりの大きさ",
  "分数（２）",
  "速さ",
  // ６年生
  "文字と式",
  "分数×分数",
  "分数÷分数",
  "比例と反比例",
];

export function Menu_show() {
  // Topページのタイトル表示
  document.getElementById("title-header").innerHTML = `<div id="mainTitle" class="h2 text-center">
      <i class="fas fa-cat"></i>
        もとぷり（もっと学習プリント）
      <i class="fas fa-cat"></i>
   </div>`;

  // コンテンツメニューの表示　メニューをクリックするとコンテンツを呼び出す。
  for (let i = 0; i < TITLE.length; i++) {
    const btn = document.createElement("button");
    btn.classList.add("btn", "btn-outline-primary");
    btn.style.minWidth = "30%";
    btn.style.textAlign = "left";
    btn.innerHTML = `${i + 1}　${TITLE[i]}`;
    btn.addEventListener("click", () => {
      //ページの中を空にする。
      document.getElementById("mainTitle").innerHTML = "";
      document.getElementById("contents-menu").innerHTML = "";
      document.getElementById("comment").innerHTML = "";
      //タイトルの作成
      document.getElementById("title-header").innerHTML = `
      <tr>
        <td id="title">${i + 1}　${TITLE[i]}</td>
        <td id="grade">
         <ruby>名前 <rp>(</rp><rt>なまえ</rt><rp>)</rp></ruby>
       </td>
      </tr>
     `;
      Change_menu(i);
    });
    document.getElementById("contents-menu").appendChild(btn);
  }
}

function Change_menu(i) {
  switch (i) {
    case 0:
      step01();
      break;
    case 1:
      step02();
      break;
    case 2:
      step03();
      break;
    case 3:
      step04();
      break;
    case 4:
      step05();
      break;
    case 5:
      step06();
      break;
    case 6:
      step07();
      break;
    case 7:
      step08();
      break;
    case 8:
      step09();
      break;
    case 9:
      step10();
      break;
    case 10:
      step11();
      break;
  }
}
