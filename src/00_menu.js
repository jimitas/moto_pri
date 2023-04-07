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
import { step12 } from "./12_hyou_graph.js";
import { step13 } from "./13_tasu_hiku_hissan1.js";
import { step14 } from "./14_1000made.js";
import { step15 } from "./15_tasu_hiku_hissan2.js";
import { step16 } from "./16_kake1.js";
import { step17 } from "./17_kake2.js";
import { step18 } from "./18_10000made.js";
import { step19 } from "./19_kasa_nagasa.js";
import { step20 } from "./20_warizan.js";
import { step21 } from "./21_jikoku.js";
import { step22 } from "./22_wari_amari.js";
import { step23 } from "./23_kake_hissan1.js";
import { step24 } from "./24_kake_hissan2.js";
import { step25 } from "./25_wari_hissan1.js";
import { step26 } from "./26_wari_hissan2.js";
import { step27 } from "./27_shousu_kakewari_kiso.js";
import { step28 } from "./28_bunsu_kiso.js";
import { step29 } from "./29_taiseki.js";
import { step30 } from "./30_shousu_kakezan.js";
import { step31 } from "./31_shousu_warizan.js";
import { step32 } from "./32_bunsu1.js";
import { step33 } from "./33_taniryouatari.js";
import { step34 } from "./34_bunsu2.js";
import { step35 } from "./35_hayasa.js";
import { step36 } from "./36_mojitoshiki.js";
import { step37 } from "./37_bunsuu_kakezan.js";
import { step38 } from "./38_bunsuu_warizan.js";
import { step39 } from "./39_hirei_hanpirei.js";

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
    case 11:
      step12();
      break;
    case 12:
      step13();
      break;
    case 13:
      step14();
      break;
    case 14:
      step15();
      break;
    case 15:
      step16();
      break;
    case 16:
      step17();
      break;
    case 17:
      step18();
      break;
    case 18:
      step19();
      break;
    case 19:
      step20();
      break;
    case 20:
      step21();
      break;
    case 21:
      step22();
      break;
    case 22:
      step23();
      break;
    case 23:
      step24();
      break;
    case 24:
      step25();
      break;
    case 25:
      step26();
      break;
    case 26:
      step27();
      break;
    case 27:
      step28();
      break;
    case 28:
      step29();
      break;
    case 29:
      step30();
      break;
    case 30:
      step31();
      break;
    case 31:
      step32();
      break;
    case 32:
      step33();
      break;
    case 33:
      step34();
      break;
    case 34:
      step35();
      break;
    case 35:
      step36();
      break;
    case 36:
      step37();
      break;
    case 37:
      step38();
      break;
    case 38:
      step39();
      break;
  }
}
