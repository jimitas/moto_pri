(() => {
  "use strict";
  function n(n, t) {
    for (var e = !1, a = 0; a < t.length; a++) t[a] === n && (e = !0);
    return !e;
  }
  new Audio("./Sounds/pi.mp3");
  var t = new Audio("./Sounds/set.mp3");
  function e(n, t) {
    (null == t || t > n.length) && (t = n.length);
    for (var e = 0, a = new Array(t); e < t; e++) a[e] = n[e];
    return a;
  }
  function a(n) {
    n.length > 1 ? (select.style.backgroundColor = "pink") : (select.style.backgroundColor = "none");
    for (var t = 0; t < n.length; t++) {
      var e = document.createElement("option");
      (e.value = t), (e.textContent = n[t]), select.appendChild(e);
    }
  }
  new Audio("./Sounds/reset.mp3"),
    new Audio("./Sounds/right.mp3"),
    new Audio("./Sounds/move1.mp3"),
    new Audio("./Sounds/move2.mp3"),
    new Audio("./Sounds/kako.mp3");
  var r = ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩", "⑪", "⑫", "⑬", "⑭", "⑮", "⑯", "⑰", "⑱", "⑲", "⑳"];
  function o(n, t, e) {
    var a = document.getElementById("TBL");
    a.innerHTML = "";
    for (var o = 0; o < 10; o++) {
      for (var c = document.createElement("tr"), l = 0; l < 10; l++) {
        var i = document.createElement("td");
        i.classList.add("td_oneLine"), c.appendChild(i);
      }
      a.appendChild(c);
    }
    for (var s = 0; s < 10; s++)
      for (var d = 0; d < 2; d++)
        (a.rows[s].cells[5 * d].innerHTML = r[10 * d + s]),
          (a.rows[s].cells[5 * d + 1].innerHTML = n[10 * d + s]),
          (a.rows[s].cells[5 * d + 2].innerHTML = t),
          (a.rows[s].cells[5 * d + 3].innerHTML = e[10 * d + s]),
          (a.rows[s].cells[5 * d + 4].innerHTML = "=");
  }
  var c = ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩", "⑪", "⑫", "⑬", "⑭", "⑮", "⑯", "⑰", "⑱", "⑲", "⑳"];
  function l(n) {
    var t = document.getElementById("answer-area");
    t.innerHTML = "";
    for (var e = 0; e < n.length; e++) {
      var a = document.createElement("div");
      (a.style.width = "10%"), (a.innerHTML = "".concat(c[e], "　").concat(n[e])), t.appendChild(a);
    }
  }
  var i = ["10までのたしざん"],
    s = document.getElementById("select"),
    d = document.getElementById("question"),
    h = ["10までのひきざん"],
    u = document.getElementById("select"),
    m = document.getElementById("question"),
    f = ["〇+〇+〇", "〇―〇―〇", "+と-のまじった"],
    M = document.getElementById("select"),
    v = document.getElementById("question");
  var p,
    g,
    y,
    b,
    L,
    E,
    T,
    w,
    k,
    I,
    B = ["20までのたしざん"],
    H = ["くりさがり　あり", "１□-□"],
    x = document.getElementById("select"),
    A = document.getElementById("question");
  function q(n, t) {
    (null == t || t > n.length) && (t = n.length);
    for (var e = 0, a = new Array(t); e < t; e++) a[e] = n[e];
    return a;
  }
  var _ = ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩", "⑪", "⑫", "⑬", "⑭", "⑮"];
  function C(n, t, e, a) {
    var r = document.getElementById("TBL");
    (r.innerHTML = ""), void 0 === a && (a = 5);
    for (var o = 0; o < 20; o++) {
      for (var c = document.createElement("tr"), l = 0; l < 12; l++) {
        var i = document.createElement("td");
        i.classList.add("td_2column"), c.appendChild(i);
      }
      r.appendChild(c);
    }
    for (var s = 0; s < a; s++)
      for (var d = 0; d < 3; d++) {
        (r.rows[4 * s + 1].cells[4 * d].innerHTML = _[3 * s + d]),
          (r.rows[4 * s + 2].cells[4 * d].innerHTML = t),
          (r.rows[4 * s + 2].cells[4 * d].style.borderBottom = "solid 1px black"),
          (r.rows[4 * s + 2].cells[4 * d + 1].style.borderBottom = "solid 1px black"),
          (r.rows[4 * s + 2].cells[4 * d + 2].style.borderBottom = "solid 1px black"),
          4 === a && (r.rows[4 * s + 3].cells[4 * d + 3].style.height = "20mm"),
          3 === a && (r.rows[4 * s + 3].cells[4 * d + 3].style.height = "38mm");
        var h = n[3 * s + d],
          u = e[3 * s + d];
        0 != Math.floor(h / 10) && (r.rows[4 * s + 1].cells[4 * d + 1].innerHTML = Math.floor(h / 10)),
          0 != Math.floor(u / 10) && (r.rows[4 * s + 2].cells[4 * d + 1].innerHTML = Math.floor(u / 10)),
          (r.rows[4 * s + 1].cells[4 * d + 2].innerHTML = h % 10),
          (r.rows[4 * s + 2].cells[4 * d + 2].innerHTML = u % 10);
      }
  }
  function S(n, t, e, a) {
    var r = document.getElementById("TBL");
    (r.innerHTML = ""), void 0 === a && (a = 5);
    for (var o = 0; o < 20; o++) {
      for (var c = document.createElement("tr"), l = 0; l < 15; l++) {
        var i = document.createElement("td");
        i.classList.add("td_3column"), c.appendChild(i);
      }
      r.appendChild(c);
    }
    for (var s = 0; s < a; s++)
      for (var d = 0; d < 3; d++) {
        (r.rows[4 * s + 1].cells[5 * d].innerHTML = _[3 * s + d]),
          (r.rows[4 * s + 2].cells[5 * d].innerHTML = t),
          (r.rows[4 * s + 2].cells[5 * d].style.borderBottom = "solid 1px black"),
          (r.rows[4 * s + 2].cells[5 * d + 1].style.borderBottom = "solid 1px black"),
          (r.rows[4 * s + 2].cells[5 * d + 2].style.borderBottom = "solid 1px black"),
          (r.rows[4 * s + 2].cells[5 * d + 3].style.borderBottom = "solid 1px black"),
          4 === a
            ? (r.rows[4 * s + 3].cells[5 * d + 3].style.height = "20mm")
            : 3 === a && (r.rows[4 * s + 3].cells[5 * d + 3].style.height = "38mm");
        var h = n[3 * s + d],
          u = e[3 * s + d];
        0 != Math.floor(h / 100)
          ? (r.rows[4 * s + 1].cells[5 * d + 1].innerHTML = Math.floor(h / 100))
          : (r.rows[4 * s + 1].cells[5 * d + 1].innerHTML = ""),
          (r.rows[4 * s + 1].cells[5 * d + 2].innerHTML = Math.floor((h % 100) / 10)),
          (r.rows[4 * s + 1].cells[5 * d + 3].innerHTML = (h % 100) % 10),
          0 != Math.floor(u / 10)
            ? (r.rows[4 * s + 2].cells[5 * d + 2].innerHTML = Math.floor(u / 10))
            : (r.rows[4 * s + 2].cells[5 * d + 2].innerHTML = ""),
          (r.rows[4 * s + 2].cells[5 * d + 3].innerHTML = u % 10);
      }
  }
  var j,
    z,
    O,
    D,
    P = ["+くり上がりなし", "+くり上がりあり", "-くりさがりなし", "-くりさがりあり"],
    U = ["100をこえるたし算", "99+99まで", "100をこえる引き算", "1○○-○○"],
    $ = ["かけざん(2～5)のだん"],
    W = document.getElementById("select"),
    Y = document.getElementById("question"),
    F = ["かけざん(6～9)のだん", "かけざん(2～9)のだん"],
    G = document.getElementById("select"),
    J = document.getElementById("question"),
    K = ["わり算のれんしゅう"],
    N = document.getElementById("select"),
    Q = document.getElementById("question"),
    R = ["あまりのあるわり算"],
    V = document.getElementById("select"),
    X = document.getElementById("question"),
    Z = ["くり上がりなし", "くり上がり1回A", "くり上がり1回B", "くり上がり2回"],
    nn = ["2けた×2けた", "3けた×2けた"],
    tn = [
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
      "ひょう・グラフと　時計",
      "たし算とひき算のひっ算（１）",
      "１０００までの数",
      "たし算とひき算のひっ算（２）",
      "かけ算（１）",
      "かけ算（２）",
      "１００００までの数",
      "かさ・長さのたんい",
      "わり算",
      "時こくと時間",
      "あまりのあるわり算",
      "１けたをかけるかけ算の筆算",
      "２けたをかけるかけ算の筆算",
      "１けたでわるわり算の筆算",
      "２けたでわるわり算の筆算",
      "小数のかけ算やわり算",
      "分数",
      "体積",
      "小数のかけ算",
      "小数のわり算",
      "分数（１）",
      "単位量あたりの大きさ",
      "分数（２）",
      "速さ",
      "文字と式",
      "分数×分数",
      "分数÷分数",
      "比例と反比例",
    ];
  (document.body.style.zoom = document.getElementById("zoom").value / 125),
    document.getElementById("zoom").addEventListener("change", function () {
      document.body.style.zoom = document.getElementById("zoom").value / 125;
    }),
    (function () {
      document.getElementById("title-header").innerHTML =
        '<div id="mainTitle" class="h2 text-center">\n      <i class="fas fa-cat"></i>\n        もとぷり（もっと学習プリント）\n      <i class="fas fa-cat"></i>\n   </div>';
      for (
        var c = function (c) {
            var _ = document.createElement("button");
            _.classList.add("btn", "btn-outline-primary"),
              (_.style.minWidth = "30%"),
              (_.style.textAlign = "left"),
              (_.innerHTML = "".concat(c + 1, "　").concat(tn[c])),
              _.addEventListener("click", function () {
                (document.getElementById("mainTitle").innerHTML = ""),
                  (document.getElementById("contents-menu").innerHTML = ""),
                  (document.getElementById("comment").innerHTML = ""),
                  (document.getElementById("title-header").innerHTML = '\n      <tr>\n        <td id="title">'
                    .concat(c + 1, "　")
                    .concat(
                      tn[c],
                      '</td>\n        <td id="grade">\n         <ruby>名前 <rp>(</rp><rt>なまえ</rt><rp>)</rp></ruby>\n       </td>\n      </tr>\n     '
                    )),
                  (function (c) {
                    switch (c) {
                      case 0:
                        !(function () {
                          var a = ["dog", "duck", "frog", "horse", "monkey", "mouse"],
                            r = [0, 1, 2, 3, 4, 5];
                          function o() {
                            !(function () {
                              r = [];
                              for (var n = [0, 1, 2, 3, 4, 5], t = 0; t < 6; t++) {
                                var o;
                                (o = r).push.apply(
                                  o,
                                  (function (n) {
                                    if (Array.isArray(n)) return e(n);
                                  })((c = n.splice(Math.floor(Math.random() * n.length - 1), 1))) ||
                                    (function (n) {
                                      if (
                                        ("undefined" != typeof Symbol && null != n[Symbol.iterator]) ||
                                        null != n["@@iterator"]
                                      )
                                        return Array.from(n);
                                    })(c) ||
                                    (function (n, t) {
                                      if (n) {
                                        if ("string" == typeof n) return e(n, t);
                                        var a = Object.prototype.toString.call(n).slice(8, -1);
                                        return (
                                          "Object" === a && n.constructor && (a = n.constructor.name),
                                          "Map" === a || "Set" === a
                                            ? Array.from(n)
                                            : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
                                            ? e(n, t)
                                            : void 0
                                        );
                                      }
                                    })(c) ||
                                    (function () {
                                      throw new TypeError(
                                        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                                      );
                                    })()
                                );
                              }
                              var c;
                              !(function () {
                                var n = document.getElementById("imagePlace");
                                n.innerHTML = "";
                                for (var t = 0; t < a.length; t++) {
                                  var e = document.createElement("img");
                                  e.setAttribute("src", "./Images/".concat(a[r[t]], ".png")),
                                    e.setAttribute("class", "animal"),
                                    n.appendChild(e);
                                }
                              })();
                            })();
                            var o,
                              c = [],
                              l = [];
                            for (t.currentTime = 0, t.play(); l.length < 5; ) {
                              var i = (o = Math.floor(6 * Math.random() + 1));
                              n(i, l) && (l.push(i), c.push(o));
                            }
                            console.log(a),
                              console.log("order=" + r),
                              console.log("answer=" + c),
                              (document.getElementById("img_1").src = "./Images/".concat(a[r[c[0] - 1]], ".png")),
                              (document.getElementById("img_2").src = "./Images/".concat(a[r[c[1] - 1]], ".png")),
                              (document.getElementById("img_3").src = "./Images/".concat(a[r[c[2] - 1]], ".png")),
                              (document.getElementById("img_4").src = "./Images/".concat(a[r[c[3] - 1]], ".png")),
                              (document.getElementById("img_5").src = "./Images/".concat(a[r[c[4] - 1]], ".png")),
                              (document.getElementById("answer-area").innerHTML = "\n    ①　ひだりから"
                                .concat(c[0], "ばんめ　\n    ②　みぎから")
                                .concat(7 - c[1], "ばんめ　\n    ③　ひだりから")
                                .concat(c[2], "ばんめ\n    、みぎから")
                                .concat(7 - c[2], "ばんめ\n    <br/>\n    ④　ひだりから")
                                .concat(c[3], "ばんめ\n     、みぎから")
                                .concat(7 - c[3], "ばんめ　\n    ⑤　ひだりから")
                                .concat(c[4], "ばんめ\n     、みぎから")
                                .concat(7 - c[4], "ばんめ\n    "));
                          }
                          (TBL.innerHTML =
                            '\n  <div class="h1">なんばんめですか。</div>\n  <div class="h4 px-5 py-3" style="display:flex;border:solid 1px black;">\n    <div class="pt-4">ひだり</div>\n    <div id="imagePlace"></div>\n    <div class="pt-4">みぎ　</div>\n  </div>\n  <div>\n    <div class="h4">\n      ①　<img id="img_1" src="./Images/dog.png" class="animal"/>は、ひだりから<input class="input-box mt-2"/>ばんめ\n    </div>\n    <br/>\n    <div class="h4">\n      ②　<img id="img_2" src="./Images/dog.png"/ class="animal"/>は、みぎから<input class="input-box mt-2"/>ばんめ\n    </div>\n    <br/>\n    <div class="h4">\n      ③　<img id="img_3" src="./Images/dog.png"/ class="animal"/>は、<br/>\n      　　ひだりから<input class="input-box mt-1"/>ばんめ、\n      みぎから<input class="input-box mt-1"/>ばんめ\n    </div>\n    <br/>\n    <div class="h4">\n      ④　<img id="img_4" src="./Images/dog.png"/ class="animal"/>は、<br/>\n      　　ひだりから<input class="input-box mt-1"/>ばんめ、\n      みぎから<input class="input-box mt-1"/>ばんめ\n    </div>\n    <br/>\n    <div class="h4">\n      ⑤　<img id="img_5" src="./Images/dog.png"/ class="animal"/>は、<br/>\n      　　ひだりから<input class="input-box mt-1"/>ばんめ、\n      みぎから<input class="input-box mt-1"/>ばんめ\n    </div>\n  </div>\n  '),
                            o(),
                            question.addEventListener("click", function () {
                              return o();
                            });
                        })();
                        break;
                      case 1:
                        !(function () {
                          function e() {
                            var e,
                              a,
                              r,
                              c = [],
                              i = [],
                              s = [],
                              d = [];
                            for (t.currentTime = 0, t.play(); d.length < 20; ) {
                              r = Math.floor(9 * Math.random() + 2);
                              var h = +(100 * (e = Math.floor(Math.random() * (r - 1) + 1)) + (a = r - e));
                              n(h, d) && (d.push(h), c.push(e), i.push(a), s.push(r));
                            }
                            o(c, "+", i), l(s);
                          }
                          a(i),
                            e(),
                            s.addEventListener("change", function () {
                              s.value, e();
                            }),
                            d.addEventListener("click", function () {
                              return e();
                            });
                        })();
                        break;
                      case 2:
                        !(function () {
                          function e() {
                            var e,
                              a,
                              r,
                              c = [],
                              i = [],
                              s = [],
                              d = [];
                            for (t.currentTime = 0, t.play(); d.length < 20; ) {
                              r =
                                (e = Math.floor(9 * Math.random() + 2)) - (a = Math.floor(Math.random() * (e - 1) + 1));
                              var h = +(100 * e + a);
                              n(h, d) && (d.push(h), c.push(e), i.push(a), s.push(r));
                            }
                            o(c, "-", i), l(s);
                          }
                          a(h),
                            e(),
                            u.addEventListener("change", function () {
                              u.value, e();
                            }),
                            m.addEventListener("click", function () {
                              return e();
                            });
                        })();
                        break;
                      case 3:
                      case 7:
                      case 8:
                      case 10:
                        break;
                      case 4:
                        !(function () {
                          var e = "0";
                          function o() {
                            var a,
                              o,
                              c,
                              i,
                              s,
                              d,
                              h = [],
                              u = [],
                              m = [],
                              f = [],
                              M = [],
                              v = [],
                              p = [];
                            for (t.currentTime = 0, t.play(); p.length < 10; ) {
                              switch (e) {
                                case "0":
                                  (a = Math.floor(9 * Math.random() + 1)),
                                    (o = Math.floor(9 * Math.random() + 1)),
                                    (c = Math.floor(Math.random() * Math.min(20 - (a + o), 9) + 1)),
                                    (d = Math.floor(a + o + c)),
                                    (i = "+"),
                                    (s = "+");
                                  break;
                                case "1":
                                  (a = Math.floor(14 * Math.random() + 5)),
                                    (o = Math.floor(Math.random() * Math.min(a - 2, 9) + 1)),
                                    (c = Math.floor(Math.random() * Math.min(a - o - 1, 9) + 1)),
                                    (d = Math.floor(a - o - c)),
                                    (i = "-"),
                                    (s = "-");
                                  break;
                                case "2":
                                  1 === Math.floor(2 * Math.random() + 1)
                                    ? ((a = Math.floor(9 * Math.random() + 1)),
                                      (o = Math.floor(9 * Math.random() + 1)),
                                      (c = Math.floor(Math.random() * (a + o - 1) + 1)),
                                      (d = Math.floor(a + o - c)),
                                      (i = "+"),
                                      (s = "-"))
                                    : ((a = Math.floor(14 * Math.random() + 5)),
                                      (o = Math.floor(Math.random() * Math.min(a, 9) + 1)),
                                      (c = Math.floor(Math.random() * Math.min(20 - (a - o), 9) + 1)),
                                      (d = Math.floor(a - o + c)),
                                      (i = "-"),
                                      (s = "+"));
                              }
                              var g = +(100 * a + 10 * o + c);
                              n(g, p) && (p.push(g), h.push(a), m.push(o), M.push(c), u.push(i), f.push(s), v.push(d));
                            }
                            !(function (n, t, e, a, o) {
                              var c = document.getElementById("TBL");
                              c.innerHTML = "";
                              for (var l = 0; l < 10; l++) {
                                for (var i = document.createElement("tr"), s = 0; s < 7; s++) {
                                  var d = document.createElement("td");
                                  d.classList.add("td_oneLine_3formura"), i.appendChild(d);
                                }
                                c.appendChild(i);
                              }
                              for (var h = 0; h < 10; h++)
                                for (var u = 0; u < 1; u++)
                                  (c.rows[h].cells[5 * u].innerHTML = r[10 * u + h]),
                                    (c.rows[h].cells[5 * u + 1].innerHTML = n[10 * u + h]),
                                    (c.rows[h].cells[5 * u + 2].innerHTML = t[10 * u + h]),
                                    (c.rows[h].cells[5 * u + 3].innerHTML = e[10 * u + h]),
                                    (c.rows[h].cells[5 * u + 4].innerHTML = a[10 * u + h]),
                                    (c.rows[h].cells[5 * u + 5].innerHTML = o[10 * u + h]),
                                    (c.rows[h].cells[5 * u + 6].innerHTML = "=");
                            })(h, u, m, f, M),
                              l(v);
                          }
                          a(f),
                            o(),
                            M.addEventListener("change", function () {
                              (e = M.value), o();
                            }),
                            v.addEventListener("click", function () {
                              return o();
                            });
                        })();
                        break;
                      case 5:
                        !(function () {
                          function e() {
                            var e,
                              a,
                              r,
                              c = [],
                              i = [],
                              s = [],
                              d = [];
                            for (t.currentTime = 0, t.play(); d.length < 20; ) {
                              (e = Math.floor(8 * Math.random() + 2)),
                                (a = Math.floor(Math.random() * e + (8 - e) + 2)),
                                (r = Math.floor(e + a));
                              var h = +(100 * e + a);
                              n(h, d) && (d.push(h), c.push(e), i.push(a), s.push(r));
                            }
                            o(c, "+", i), l(s);
                          }
                          a(B),
                            e(),
                            select.addEventListener("change", function () {
                              select.value, e();
                            }),
                            document.getElementById("question").addEventListener("click", function () {
                              return e();
                            });
                        })();
                        break;
                      case 6:
                        !(function () {
                          var e = "0";
                          function r() {
                            var a,
                              r,
                              c,
                              i = [],
                              s = [],
                              d = [],
                              h = [];
                            for (t.currentTime = 0, t.play(); h.length < 20; ) {
                              switch (e) {
                                case "0":
                                  var u = 20 - (a = Math.floor(9 * Math.random() + 11));
                                  r = Math.floor(Math.random() * u + (10 - u));
                                  break;
                                case "1":
                                  (a = Math.floor(9 * Math.random() + 11)),
                                    (r = Math.floor(Math.random() * (a - 11) + 1));
                              }
                              c = a - r;
                              var m = +(100 * a + r);
                              n(m, h) && (h.push(m), i.push(a), s.push(r), d.push(c));
                            }
                            o(i, "-", s), l(d);
                          }
                          a(H),
                            r(),
                            x.addEventListener("change", function () {
                              (e = x.value), r();
                            }),
                            A.addEventListener("click", function () {
                              return r();
                            });
                        })();
                        break;
                      case 9:
                        !(function () {
                          var e = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
                          function a() {
                            !(function () {
                              e = [];
                              for (var n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], t = 0; t < 10; t++) {
                                var a;
                                (a = e).push.apply(
                                  a,
                                  (function (n) {
                                    if (Array.isArray(n)) return q(n);
                                  })((r = n.splice(Math.floor(Math.random() * n.length - 1), 1))) ||
                                    (function (n) {
                                      if (
                                        ("undefined" != typeof Symbol && null != n[Symbol.iterator]) ||
                                        null != n["@@iterator"]
                                      )
                                        return Array.from(n);
                                    })(r) ||
                                    (function (n, t) {
                                      if (n) {
                                        if ("string" == typeof n) return q(n, t);
                                        var e = Object.prototype.toString.call(n).slice(8, -1);
                                        return (
                                          "Object" === e && n.constructor && (e = n.constructor.name),
                                          "Map" === e || "Set" === e
                                            ? Array.from(n)
                                            : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                                            ? q(n, t)
                                            : void 0
                                        );
                                      }
                                    })(r) ||
                                    (function () {
                                      throw new TypeError(
                                        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                                      );
                                    })()
                                );
                              }
                              var r;
                            })();
                            var a = [],
                              r = [],
                              o = [],
                              c = ["+", "-", "+", "-", "-", "+", "-", "-", "+", "+"],
                              l = ["人", "人", "本", "本", "本", "こ", "こ", "だん", "こ", "人"],
                              i = [];
                            (t.currentTime = 0), t.play();
                            for (var s, d, h, u = 0; i.length < 10; ) {
                              (s = Math.floor(9 * Math.random() + 2)),
                                (d = Math.floor(Math.random() * s)),
                                (h = "+" === c[u] ? Math.floor(s + d) : Math.floor(s - d));
                              var m = +(100 * s + d);
                              n(m, i) &&
                                (i.push(m),
                                a.push(s),
                                r.push(d),
                                o.push(
                                  "しき　"
                                    .concat(s)
                                    .concat(c[u])
                                    .concat(d, "=")
                                    .concat(h, "　こたえ　")
                                    .concat(h)
                                    .concat(l[u])
                                ),
                                u++);
                            }
                            (p = "\n  こどもが　"
                              .concat(a[0], "人　あそんでいました。<br/>\n  そこへ、　")
                              .concat(r[0], "人　やってきました。<br/>\n  みんなで　なん人になりましたか。<br/>\n  ")),
                              (g = "\n  こどもが　"
                                .concat(a[1], "人　あそんでいました。<br/>\n  ")
                                .concat(
                                  r[1],
                                  "人　かえっていきました。<br/>\n  のこりは　なん人になりましたか。<br/>\n  "
                                )),
                              (y = "\n  あかい　かさが　"
                                .concat(a[2], "本，　<br/>\n  きいろい　かさが、　")
                                .concat(r[2], "本　あります。<br/>\n  かさは　ぜんぶで　なん本　ですか。<br/>\n  ")),
                              (b = "\n  あかい　かさが　"
                                .concat(a[3], "本，　<br/>\n  きいろい　かさが、　")
                                .concat(
                                  r[3],
                                  "本　あります。<br/>\n  あかい　かさは、きいろい　かさより、<br/>\n  なん本　おおいですか。<br/>\n  "
                                )),
                              (L = "\n  あかい　かさが　"
                                .concat(a[4], "本，　<br/>\n  きいろい　かさが、　")
                                .concat(
                                  r[4],
                                  "本　あります。<br/>\n  きいろい　かさは、あかい　かさより、<br/>\n  なん本　すくないですか。<br/>\n  "
                                )),
                              (E = "\n  あめが　"
                                .concat(a[5], "こ，あります。<br/>\n  そこへ、　")
                                .concat(
                                  r[5],
                                  "こ　もらいました。<br/>\n  あめは　ぜんぶで　なんこ　ありますか。<br/>\n  "
                                )),
                              (T = "\n  あめが　"
                                .concat(a[6], "こ，あります。<br/>\n  ")
                                .concat(
                                  r[6],
                                  "こ　たべました。<br/>\n  あめは　のこり　なんこに　なりましたか。<br/>\n  "
                                )),
                              (w = "\n  かいだんが　ぜんぶで　"
                                .concat(a[7], "だん，あります。<br/>\n  ")
                                .concat(r[7], "だんめまで　のぼりました。<br/>\n  あと　なんだん　ありますか。\n  ")),
                              (k = "\n  いすに　"
                                .concat(a[8], "人，すわっています。<br/>\n  あいている　いすは　")
                                .concat(
                                  r[8],
                                  "こ　あります。<br/>\n  いすは、みんなで　いくつ　ありますか。<br/>\n  "
                                )),
                              (I = "\n  たろうさんは、うしろから　"
                                .concat(a[9], "ばんめに　います。<br/>\n  たろうさんの　まえに　")
                                .concat(r[9], "人　います。<br/>\n  みんなで　なん人　いますか。<br/>\n  "));
                            var f = [p, g, y, b, L, E, T, w, k, I];
                            (document.getElementById("quest_1").innerHTML = f[e[0]]),
                              (document.getElementById("quest_2").innerHTML = f[e[1]]),
                              (document.getElementById("quest_3").innerHTML = f[e[2]]),
                              (document.getElementById("quest_4").innerHTML = f[e[3]]),
                              (document.getElementById("answer-area").innerHTML = "\n    ①　"
                                .concat(o[e[0]], "　　\n    ②　")
                                .concat(o[e[1]], "</br>\n    ③　")
                                .concat(o[e[2]], "　　\n    ④　")
                                .concat(o[e[3]], "\n    "));
                          }
                          (TBL.innerHTML =
                            '\n  <div class="h4">\n    <div style="display:flex;">\n      <div>①　</div>\n      <div id="quest_1"></div>\n    </div>\n    <div>　　（しき）</div>\n    <div style="width:180mm;text-align:right;">（こたえ）　　　　　　　</div> \n    <div style="width:180mm;text-align:right;">＿＿＿＿＿＿＿</div> \n    <br/>\n    </div>\n    \n    <div class="h4">\n    <div style="display:flex;">\n    <div>②　</div>\n    <div id="quest_2"></div>\n    </div>\n    <div>　　（しき）</div>\n    <div style="width:180mm;text-align:right;">（こたえ）　　　　　　　</div> \n    <div style="width:180mm;text-align:right;">＿＿＿＿＿＿＿</div> \n    <br/>\n    </div>\n    \n    <div class="h4">\n    <div style="display:flex;">\n    <div>③　</div>\n    <div id="quest_3"></div>\n    </div>\n    <div>　　（しき）</div>\n    <div style="width:180mm;text-align:right;">（こたえ）　　　　　　　</div> \n    <div style="width:180mm;text-align:right;">＿＿＿＿＿＿＿</div> \n    <br/>\n    </div>\n    <div class="h4">\n    <div style="display:flex;">\n    <div>④　</div>\n    <div id="quest_4"></div>\n    </div>\n    <div>　　（しき）</div>\n    <div style="width:180mm;text-align:right;">（こたえ）　　　　　　　</div> \n    <div style="width:180mm;text-align:right;">＿＿＿＿＿＿＿</div> \n    <br/>\n    </div>\n'),
                            a(),
                            question.addEventListener("click", function () {
                              return a();
                            });
                        })();
                        break;
                      case 11:
                      case 13:
                      case 17:
                      case 18:
                      case 20:
                      case 24:
                      case 25:
                      case 26:
                      case 27:
                      case 28:
                      case 29:
                      case 30:
                      case 31:
                      case 32:
                      case 33:
                      case 34:
                      case 35:
                      case 36:
                      case 37:
                      case 38:
                        document.getElementById("TBL").innerHTML = "<h1>作成中</h1>";
                        break;
                      case 12:
                        !(function () {
                          var e = "0";
                          function r() {
                            var a,
                              r,
                              o,
                              c,
                              i = [],
                              s = [],
                              d = [],
                              h = [];
                            for (t.currentTime = 0, t.play(); h.length < 15; ) {
                              switch (e) {
                                case "0":
                                  var u = Math.floor(8 * Math.random() + 1),
                                    m = Math.floor(Math.random() * (9 - u) + 1),
                                    f = Math.floor(9 * Math.random() + 1),
                                    M = Math.floor(Math.random() * (9 - f));
                                  (a = Math.floor(10 * u) + Math.floor(f)),
                                    (r = Math.floor(10 * m) + Math.floor(M)),
                                    (o = Math.floor(a + r)),
                                    (c = "+");
                                  break;
                                case "1":
                                  var v = Math.floor(7 * Math.random() + 1),
                                    p = Math.floor(Math.random() * (7 - v) + 1),
                                    g = Math.floor(8 * Math.random() + 2),
                                    y = Math.floor(Math.random() * g + (8 - g) + 2);
                                  (a = Math.floor(10 * v) + Math.floor(g)),
                                    (r = Math.floor(10 * p) + Math.floor(y)),
                                    (o = Math.floor(a + r)),
                                    (c = "+");
                                  break;
                                case "2":
                                  (o =
                                    (a = 10 * Math.floor(4 * Math.random() + 5) + Math.floor(4 * Math.random() + 5)) -
                                    (r = 10 * Math.floor(4 * Math.random() + 1) + Math.floor(4 * Math.random() + 1))),
                                    (c = "-");
                                  break;
                                case "3":
                                  (o =
                                    (a = 10 * Math.floor(4 * Math.random() + 5) + Math.floor(4 * Math.random() + 1)) -
                                    (r = 10 * Math.floor(4 * Math.random() + 1) + Math.floor(4 * Math.random() + 5))),
                                    (c = "-");
                              }
                              var b = +(100 * a + r);
                              n(b, h) && (h.push(b), i.push(a), s.push(r), d.push(o));
                            }
                            C(i, c, s), l(d);
                          }
                          a(P),
                            r(),
                            select.addEventListener("change", function () {
                              (e = select.value), r();
                            }),
                            document.getElementById("question").addEventListener("click", function () {
                              return r();
                            });
                        })();
                        break;
                      case 14:
                        !(function () {
                          var e = "0";
                          function r() {
                            var a,
                              r,
                              o,
                              c,
                              i = [],
                              s = [],
                              d = [],
                              h = [];
                            for (t.currentTime = 0, t.play(); h.length < 15; ) {
                              switch (e) {
                                case "0":
                                  (a = Math.floor(10 * Math.random() + 100)),
                                    (a -= r = Math.floor(Math.random() * (a - 20) + 10)),
                                    (o = Math.floor(a + r)),
                                    (c = "+");
                                  break;
                                case "1":
                                  (a = Math.floor(49 * Math.random() + 50)),
                                    (r = Math.floor(49 * Math.random() + 50)),
                                    (o = Math.floor(a + r)),
                                    (c = "+");
                                  break;
                                case "2":
                                  (o =
                                    (a = Math.floor(49 * Math.random() + 150)) -
                                    (r = Math.floor(49 * Math.random() + 1))),
                                    (c = "-");
                                  break;
                                case "3":
                                  (o =
                                    (a = Math.floor(9 * Math.random() + 100)) -
                                    (r = Math.floor(99 * Math.random() + 1))),
                                    (c = "-");
                              }
                              var u = +(1e3 * a + r);
                              n(u, h) && (h.push(u), i.push(a), s.push(r), d.push(o));
                            }
                            switch ((C(i, c, s), e)) {
                              case "0":
                              case "1":
                                C(i, c, s);
                                break;
                              case "2":
                              case "3":
                                S(i, c, s);
                            }
                            l(d);
                          }
                          a(U),
                            r(),
                            select.addEventListener("change", function () {
                              (e = select.value), r();
                            }),
                            document.getElementById("question").addEventListener("click", function () {
                              return r();
                            });
                        })();
                        break;
                      case 15:
                        !(function () {
                          function e() {
                            var e,
                              a,
                              r,
                              c = [],
                              i = [],
                              s = [],
                              d = [];
                            for (t.currentTime = 0, t.play(); d.length < 20; ) {
                              r = (e = Math.floor(4 * Math.random() + 2)) * (a = Math.floor(9 * Math.random() + 1));
                              var h = +(100 * e + a);
                              n(h, d) && (d.push(h), c.push(e), i.push(a), s.push(r));
                            }
                            o(c, "×", i), l(s);
                          }
                          a($),
                            e(),
                            W.addEventListener("change", function () {
                              W.value, e();
                            }),
                            Y.addEventListener("click", function () {
                              return e();
                            });
                        })();
                        break;
                      case 16:
                        !(function () {
                          var e = "0";
                          function r() {
                            var a,
                              r,
                              c,
                              i = [],
                              s = [],
                              d = [],
                              h = [];
                            for (t.currentTime = 0, t.play(); h.length < 20; ) {
                              switch (e) {
                                case "0":
                                  (a = Math.floor(4 * Math.random() + 6)), (r = Math.floor(9 * Math.random() + 1));
                                  break;
                                case "1":
                                  (a = Math.floor(8 * Math.random() + 2)), (r = Math.floor(9 * Math.random() + 1));
                              }
                              c = a * r;
                              var u = +(100 * a + r);
                              n(u, h) && (h.push(u), i.push(a), s.push(r), d.push(c));
                            }
                            o(i, "×", s), l(d);
                          }
                          a(F),
                            r(),
                            G.addEventListener("change", function () {
                              (e = G.value), r();
                            }),
                            J.addEventListener("click", function () {
                              return r();
                            });
                        })();
                        break;
                      case 19:
                        !(function () {
                          function e() {
                            var e,
                              a,
                              r,
                              c = [],
                              i = [],
                              s = [],
                              d = [];
                            for (t.currentTime = 0, t.play(); d.length < 20; ) {
                              var h = +(
                                100 *
                                  (e =
                                    (r = Math.floor(8 * Math.random() + 2)) * (a = Math.floor(8 * Math.random() + 2))) +
                                a
                              );
                              n(h, d) && (d.push(h), c.push(e), i.push(a), s.push(r));
                            }
                            o(c, "÷", i), l(s);
                          }
                          a(K),
                            e(),
                            N.addEventListener("change", function () {
                              N.value, e();
                            }),
                            Q.addEventListener("click", function () {
                              return e();
                            });
                        })();
                        break;
                      case 21:
                        !(function () {
                          function e() {
                            var e,
                              a,
                              r,
                              c,
                              i = [],
                              s = [],
                              d = [],
                              h = [];
                            for (t.currentTime = 0, t.play(); h.length < 20; ) {
                              (c = Math.floor(8 * Math.random() + 2)),
                                (a = Math.floor(8 * Math.random() + 2)),
                                (r = Math.floor(Math.random() * (a - 1) + 1));
                              var u = +(100 * (e = Math.floor(c * a + r)) + a);
                              n(u, h) && (h.push(u), i.push(e), s.push(a), (c = c + "…" + r), d.push(c));
                            }
                            o(i, "÷", s), l(d);
                          }
                          a(R),
                            e(),
                            (comment.innerHTML = "こたえにある「…」は「あまり」を表しています。"),
                            V.addEventListener("change", function () {
                              V.value, e();
                            }),
                            X.addEventListener("click", function () {
                              return e();
                            });
                        })();
                        break;
                      case 22:
                        !(function () {
                          var e = "0";
                          function r() {
                            var a,
                              r,
                              o,
                              c,
                              i = [],
                              s = [],
                              d = [],
                              h = [];
                            for (t.currentTime = 0, t.play(); h.length < 15; ) {
                              switch (
                                (r = "0" == e ? Math.floor(9 * Math.random() + 1) : Math.floor(8 * Math.random() + 2))
                              ) {
                                case 1:
                                  o = 9;
                                  break;
                                case 2:
                                  o = 4;
                                  break;
                                case 3:
                                  o = 3;
                                  break;
                                case 4:
                                  o = 2;
                                  break;
                                default:
                                  o = 1;
                              }
                              switch (e) {
                                case "0":
                                  a = 10 * Math.floor(Math.random() * o + 1) + Math.floor(Math.random() * o + 1);
                                  break;
                                case "1":
                                  a =
                                    10 * Math.floor(Math.random() * (9 - o) + o + 1) +
                                    Math.floor(Math.random() * o + 1);
                                  break;
                                case "2":
                                  a =
                                    10 * Math.floor(Math.random() * o + 1) +
                                    Math.floor(Math.random() * (9 - o) + o + 1);
                                  break;
                                case "3":
                                  a =
                                    10 * Math.floor(Math.random() * (9 - o) + o + 1) +
                                    Math.floor(Math.random() * (9 - o) + o + 1);
                              }
                              c = Math.floor(a * r);
                              var u = +(100 * a + r);
                              n(u, h) && (h.push(u), i.push(a), s.push(r), d.push(c));
                            }
                            C(i, "×", s), l(d);
                          }
                          a(Z),
                            r(),
                            select.addEventListener("change", function () {
                              (e = select.value), r();
                            }),
                            document.getElementById("question").addEventListener("click", function () {
                              return r();
                            });
                        })();
                        break;
                      case 23:
                        !(function () {
                          var e = "0";
                          function r() {
                            var a,
                              r,
                              o,
                              c = [],
                              i = [],
                              s = [],
                              d = [];
                            for (t.currentTime = 0, t.play(); d.length < 9; ) {
                              switch (e) {
                                case "0":
                                  (a = Math.floor(90 * Math.random() + 10)), (r = Math.floor(90 * Math.random() + 10));
                                  break;
                                case "1":
                                  (a = Math.floor(889 * Math.random() + 100)),
                                    (r = Math.floor(90 * Math.random() + 10));
                              }
                              o = Math.floor(a * r);
                              var h = +(100 * a + r);
                              n(h, d) && (d.push(h), c.push(a), i.push(r), s.push(o));
                            }
                            switch (e) {
                              case "0":
                                C(c, "×", i, 3);
                                break;
                              case "1":
                                S(c, "×", i, 3);
                            }
                            l(s);
                          }
                          a(nn),
                            r(),
                            select.addEventListener("change", function () {
                              (e = select.value), r();
                            }),
                            document.getElementById("question").addEventListener("click", function () {
                              return r();
                            });
                        })();
                    }
                  })(c);
              }),
              document.getElementById("contents-menu").appendChild(_);
          },
          _ = 0;
        _ < tn.length;
        _++
      )
        c(_);
    })(),
    (z = (j = new Date()).getYear() + 1900),
    (O = j.getMonth() + 1),
    (D = j.getDate()),
    (document.getElementById("dateArea").innerHTML = "".concat(z, "/").concat(O, "/").concat(D));
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxFQUFHQSxFQUFJNkQsR0FBTTVELE9BQVFELElBQUssRUFBOUJBLEdSekZYeUgsR0FNUS9ELEdBREFELEVBQU0sSUFBSWlFLE1BQ0lDLFVBQVksS0FDMUJoRSxFQUFXRixFQUFJbUUsV0FBYSxFQUM1QmhFLEVBQVVILEVBQUlvRSxVQUNwQm5ILFNBQVNXLGVBQWUsWUFBWUMsVUFBcEMsVUFBbURvQyxFQUFuRCxZQUE4REMsRUFBOUQsWUFBMEVDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3RvcHJpLy4vc3JjL2R1cGxpY2F0aW9uQ2hlY2suanMiLCJ3ZWJwYWNrOi8vbW90b3ByaS8uL3NyYy9zZS5qcyIsIndlYnBhY2s6Ly9tb3RvcHJpLy4vc3JjL3NldC5qcyIsIndlYnBhY2s6Ly9tb3RvcHJpLy4vc3JjL29uZUxpbmVGb3JtdWxhQ3JlYXRlLmpzIiwid2VicGFjazovL21vdG9wcmkvLi9zcmMvYW5zd2VyQ3JlYXRlLmpzIiwid2VicGFjazovL21vdG9wcmkvLi9zcmMvMDJfdGFzdV8xLmpzIiwid2VicGFjazovL21vdG9wcmkvLi9zcmMvMDNfaGlrdV8xLmpzIiwid2VicGFjazovL21vdG9wcmkvLi9zcmMvMDVfM3R1bm8uanMiLCJ3ZWJwYWNrOi8vbW90b3ByaS8uL3NyYy8wNl90YXN1XzIuanMiLCJ3ZWJwYWNrOi8vbW90b3ByaS8uL3NyYy8xMF90YXN1X2hpa3UuanMiLCJ3ZWJwYWNrOi8vbW90b3ByaS8uL3NyYy8wN19oaWt1XzIuanMiLCJ3ZWJwYWNrOi8vbW90b3ByaS8uL3NyYy9jb2x1bW5DYWxjQ3JlYXRlLmpzIiwid2VicGFjazovL21vdG9wcmkvLi9zcmMvMTNfdGFzdV9oaWt1X2hpc3NhbjEuanMiLCJ3ZWJwYWNrOi8vbW90b3ByaS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9tb3RvcHJpLy4vc3JjLzE1X3Rhc3VfaGlrdV9oaXNzYW4yLmpzIiwid2VicGFjazovL21vdG9wcmkvLi9zcmMvMTZfa2FrZTEuanMiLCJ3ZWJwYWNrOi8vbW90b3ByaS8uL3NyYy8xN19rYWtlMi5qcyIsIndlYnBhY2s6Ly9tb3RvcHJpLy4vc3JjLzIwX3dhcml6YW4uanMiLCJ3ZWJwYWNrOi8vbW90b3ByaS8uL3NyYy8yMl93YXJpX2FtYXJpLmpzIiwid2VicGFjazovL21vdG9wcmkvLi9zcmMvMjNfa2FrZV9oaXNzYW4xLmpzIiwid2VicGFjazovL21vdG9wcmkvLi9zcmMvMjRfa2FrZV9oaXNzYW4yLmpzIiwid2VicGFjazovL21vdG9wcmkvLi9zcmMvMDBfbWVudS5qcyIsIndlYnBhY2s6Ly9tb3RvcHJpLy4vc3JjLzAxX25hbmJhbm1lLmpzIiwid2VicGFjazovL21vdG9wcmkvLi9zcmMvMzlfaGlyZWlfaGFucGlyZWkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8g5ZWP6aGM44Gu6YeN6KSH44KS44OB44Kn44OD44Kv44GZ44KLXHJcbmV4cG9ydCBmdW5jdGlvbiBkdXBsaWNhdGlvbkNoZWNrKGNoZWNrLCBjaGVja19hcnJheSkge1xyXG4gIGxldCBkdXBsaWNhdGlvbkZsYWcgPSBmYWxzZTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNoZWNrX2FycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoY2hlY2tfYXJyYXlbaV0gPT09IGNoZWNrKSB7XHJcbiAgICAgIGR1cGxpY2F0aW9uRmxhZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIOOCguOBl+OCgumHjeikh+OBjOOBquOBi+OBo+OBn+OCieagvOe0jeOBmeOCi+OAglxyXG4gIGlmICghZHVwbGljYXRpb25GbGFnKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsIi8v44Kz44Oz44OG44Oz44OE5YWx6YCa44Gu5Yq55p6c6Z+z44Gu55m76YyyXHJcbmV4cG9ydCBjb25zdCBwaSA9IG5ldyBBdWRpbyhcIi4uL1NvdW5kcy9waS5tcDNcIik7XHJcbmV4cG9ydCBjb25zdCBzZXQgPSBuZXcgQXVkaW8oXCIuLi9Tb3VuZHMvc2V0Lm1wM1wiKTtcclxuZXhwb3J0IGNvbnN0IHJlc2V0ID0gbmV3IEF1ZGlvKFwiLi4vU291bmRzL3Jlc2V0Lm1wM1wiKTtcclxuZXhwb3J0IGNvbnN0IHJpZ2h0ID0gbmV3IEF1ZGlvKFwiLi4vU291bmRzL3JpZ2h0Lm1wM1wiKTtcclxuZXhwb3J0IGNvbnN0IG1vdmUxID0gbmV3IEF1ZGlvKFwiLi4vU291bmRzL21vdmUxLm1wM1wiKTtcclxuZXhwb3J0IGNvbnN0IG1vdmUyID0gbmV3IEF1ZGlvKFwiLi4vU291bmRzL21vdmUyLm1wM1wiKTtcclxuZXhwb3J0IGNvbnN0IGtha28gPSBuZXcgQXVkaW8oXCIuLi9Tb3VuZHMva2Frby5tcDNcIik7XHJcbiIsImNvbnN0IGJhbmdvdSA9IFtcIuKRoFwiLCBcIuKRoVwiLCBcIuKRolwiLCBcIuKRo1wiLCBcIuKRpFwiLCBcIuKRpVwiLCBcIuKRplwiLCBcIuKRp1wiLCBcIuKRqFwiLCBcIuKRqVwiLCBcIuKRqlwiLCBcIuKRq1wiLCBcIuKRrFwiLCBcIuKRrVwiLCBcIuKRrlwiLCBcIuKRr1wiLCBcIuKRsFwiLCBcIuKRsVwiLCBcIuKRslwiLCBcIuKRs1wiXTtcclxuXHJcbi8v44K744Os44Kv44OI44Oh44OL44Ol44O844Gu5L2c5oiQXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RNZW51Q3JlYXRlKHNlbGVjdF9tZW51X2FycmF5KSB7XHJcbiAgaWYgKHNlbGVjdF9tZW51X2FycmF5Lmxlbmd0aCA+IDEpIHtcclxuICAgIHNlbGVjdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInBpbmtcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgc2VsZWN0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwibm9uZVwiO1xyXG4gIH1cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdF9tZW51X2FycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgb3B0aW9uLnZhbHVlID0gaTtcclxuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHNlbGVjdF9tZW51X2FycmF5W2ldO1xyXG4gICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgfVxyXG59XHJcblxyXG4vL+ihqOOBruS9nOaIkFxyXG5leHBvcnQgZnVuY3Rpb24gVEJMX0FfY3JlYXRlKGtpZ28pIHtcclxuICBUQkwuaW5uZXJIVE1MID0gXCJcIjtcclxuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcclxuICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTA7IGNvbCsrKSB7XHJcbiAgICAgIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICB0ZC5jbGFzc0xpc3QuYWRkKFwidGRfb25lTGluZVwiKTtcclxuICAgICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xyXG4gICAgfVxyXG4gICAgVEJMLmFwcGVuZENoaWxkKHRyKTtcclxuICB9XHJcbiAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdysrKSB7XHJcbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAyOyBjb2wrKykge1xyXG4gICAgICBUQkwucm93c1tyb3ddLmNlbGxzW2NvbCAqIDVdLmlubmVySFRNTCA9IGJhbmdvdVtjb2wgKiAxMCArIHJvd107XHJcbiAgICAgIFRCTC5yb3dzW3Jvd10uY2VsbHNbY29sICogNSArIDJdLmlubmVySFRNTCA9IGtpZ287XHJcbiAgICAgIFRCTC5yb3dzW3Jvd10uY2VsbHNbY29sICogNSArIDRdLmlubmVySFRNTCA9IFwiPVwiO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRCTF9CX2NyZWF0ZShraWdvKSB7XHJcbiAgVEJMLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMjA7IHJvdysrKSB7XHJcbiAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEyOyBjb2wrKykge1xyXG4gICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgdGQuY2xhc3NMaXN0LmFkZChcInRkXzJjb2x1bW5cIik7XHJcbiAgICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcclxuICAgIH1cclxuICAgIFRCTC5hcHBlbmRDaGlsZCh0cik7XHJcbiAgfVxyXG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDU7IHJvdysrKSB7XHJcbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAzOyBjb2wrKykge1xyXG4gICAgICBUQkwucm93c1tyb3cgKiA0ICsgMV0uY2VsbHNbY29sICogNF0uaW5uZXJIVE1MID0gYmFuZ291W3JvdyAqIDMgKyBjb2xdO1xyXG4gICAgICBUQkwucm93c1tyb3cgKiA0ICsgMl0uY2VsbHNbY29sICogNF0uaW5uZXJIVE1MID0ga2lnbztcclxuICAgICAgVEJMLnJvd3Nbcm93ICogNCArIDJdLmNlbGxzW2NvbCAqIDRdLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwic29saWQgMXB4IGJsYWNrXCI7XHJcbiAgICAgIFRCTC5yb3dzW3JvdyAqIDQgKyAyXS5jZWxsc1tjb2wgKiA0ICsgMV0uc3R5bGUuYm9yZGVyQm90dG9tID0gXCJzb2xpZCAxcHggYmxhY2tcIjtcclxuICAgICAgVEJMLnJvd3Nbcm93ICogNCArIDJdLmNlbGxzW2NvbCAqIDQgKyAyXS5zdHlsZS5ib3JkZXJCb3R0b20gPSBcInNvbGlkIDFweCBibGFja1wiO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRCTF9DX2NyZWF0ZShraWdvKSB7XHJcbiAgVEJMLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMjA7IHJvdysrKSB7XHJcbiAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDE1OyBjb2wrKykge1xyXG4gICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgdGQuY2xhc3NMaXN0LmFkZChcInRkXzNjb2x1bW5cIik7XHJcbiAgICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcclxuICAgIH1cclxuICAgIFRCTC5hcHBlbmRDaGlsZCh0cik7XHJcbiAgfVxyXG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDU7IHJvdysrKSB7XHJcbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAzOyBjb2wrKykge1xyXG4gICAgICBUQkwucm93c1tyb3cgKiA0ICsgMV0uY2VsbHNbY29sICogNV0uaW5uZXJIVE1MID0gYmFuZ291W3JvdyAqIDMgKyBjb2xdO1xyXG4gICAgICBUQkwucm93c1tyb3cgKiA0ICsgMl0uY2VsbHNbY29sICogNV0uaW5uZXJIVE1MID0ga2lnbztcclxuICAgICAgVEJMLnJvd3Nbcm93ICogNCArIDJdLmNlbGxzW2NvbCAqIDVdLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwic29saWQgMXB4IGJsYWNrXCI7XHJcbiAgICAgIFRCTC5yb3dzW3JvdyAqIDQgKyAyXS5jZWxsc1tjb2wgKiA1ICsgMV0uc3R5bGUuYm9yZGVyQm90dG9tID0gXCJzb2xpZCAxcHggYmxhY2tcIjtcclxuICAgICAgVEJMLnJvd3Nbcm93ICogNCArIDJdLmNlbGxzW2NvbCAqIDUgKyAyXS5zdHlsZS5ib3JkZXJCb3R0b20gPSBcInNvbGlkIDFweCBibGFja1wiO1xyXG4gICAgICBUQkwucm93c1tyb3cgKiA0ICsgMl0uY2VsbHNbY29sICogNSArIDNdLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwic29saWQgMXB4IGJsYWNrXCI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vL+ino+etlOOCu+ODg+ODiFxyXG5leHBvcnQgZnVuY3Rpb24gQW5zd2VyX0FfY3JlYXRlKGthaXRvdSkge1xyXG4gIGNvbnN0IGJhbmdvdSA9IFtcIuKRoFwiLCBcIuKRoVwiLCBcIuKRolwiLCBcIuKRo1wiLCBcIuKRpFwiLCBcIuKRpVwiLCBcIuKRplwiLCBcIuKRp1wiLCBcIuKRqFwiLCBcIuKRqVwiLCBcIuKRqlwiLCBcIuKRq1wiLCBcIuKRrFwiLCBcIuKRrVwiLCBcIuKRrlwiLCBcIuKRr1wiLCBcIuKRsFwiLCBcIuKRsVwiLCBcIuKRslwiLCBcIuKRs1wiXTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuc3dlci1hcmVhXCIpLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDI7IHJvdysrKSB7XHJcbiAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wrKykge1xyXG4gICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgaWYgKHJvdyA9PSAwKSB7XHJcbiAgICAgICAgdGQuaW5uZXJIVE1MID0gYmFuZ291W3JvdyAqIDEwICsgY29sXSArIFwi44CAXCIgKyBrYWl0b3VbY29sICogMl0gKyBcIuOAgFwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRkLmlubmVySFRNTCA9IGJhbmdvdVtyb3cgKiAxMCArIGNvbF0gKyBcIuOAgFwiICsga2FpdG91W2NvbCAqIDIgKyAxXSArIFwi44CAXCI7XHJcbiAgICAgIH1cclxuICAgICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbnN3ZXItYXJlYVwiKS5hcHBlbmRDaGlsZCh0cik7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBBbnN3ZXJfQl9jcmVhdGUoa2FpdG91KSB7XHJcbiAgY29uc3QgYmFuZ291ID0gW1wi4pGgXCIsIFwi4pGhXCIsIFwi4pGiXCIsIFwi4pGjXCIsIFwi4pGkXCIsIFwi4pGlXCIsIFwi4pGmXCIsIFwi4pGnXCIsIFwi4pGoXCIsIFwi4pGpXCIsIFwi4pGqXCIsIFwi4pGrXCIsIFwi4pGsXCIsIFwi4pGtXCIsIFwi4pGuXCJdO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5zd2VyLWFyZWFcIikuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMjsgcm93KyspIHtcclxuICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgODsgY29sKyspIHtcclxuICAgICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgIGlmIChyb3cgPT0gMCkge1xyXG4gICAgICAgIHRkLmlubmVySFRNTCA9IGJhbmdvdVtyb3cgKiA4ICsgY29sXSArIFwi44CAXCIgKyBrYWl0b3Vbcm93ICogOCArIGNvbF0gKyBcIuOAgFwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChjb2wgPCA3KSB7XHJcbiAgICAgICAgICB0ZC5pbm5lckhUTUwgPSBiYW5nb3Vbcm93ICogOCArIGNvbF0gKyBcIuOAgFwiICsga2FpdG91W3JvdyAqIDggKyBjb2xdICsgXCLjgIBcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbnN3ZXItYXJlYVwiKS5hcHBlbmRDaGlsZCh0cik7XHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IGJhbmdvdSA9IFtcIuKRoFwiLCBcIuKRoVwiLCBcIuKRolwiLCBcIuKRo1wiLCBcIuKRpFwiLCBcIuKRpVwiLCBcIuKRplwiLCBcIuKRp1wiLCBcIuKRqFwiLCBcIuKRqVwiLCBcIuKRqlwiLCBcIuKRq1wiLCBcIuKRrFwiLCBcIuKRrVwiLCBcIuKRrlwiLCBcIuKRr1wiLCBcIuKRsFwiLCBcIuKRsVwiLCBcIuKRslwiLCBcIuKRs1wiXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbmVMaW5lRm9ybXVsYUNyZWF0ZShsZWZ0X2FycmF5LCBraWdvLCByaWdodF9hcnJheSkge1xyXG4gIGNvbnN0IFRCTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiVEJMXCIpO1xyXG4gIFRCTC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xyXG4gICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sKyspIHtcclxuICAgICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgIHRkLmNsYXNzTGlzdC5hZGQoXCJ0ZF9vbmVMaW5lXCIpO1xyXG4gICAgICB0ci5hcHBlbmRDaGlsZCh0ZCk7XHJcbiAgICB9XHJcbiAgICBUQkwuYXBwZW5kQ2hpbGQodHIpO1xyXG4gIH1cclxuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcclxuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDI7IGNvbCsrKSB7XHJcbiAgICAgIFRCTC5yb3dzW3Jvd10uY2VsbHNbY29sICogNV0uaW5uZXJIVE1MID0gYmFuZ291W2NvbCAqIDEwICsgcm93XTtcclxuICAgICAgVEJMLnJvd3Nbcm93XS5jZWxsc1tjb2wgKiA1ICsgMV0uaW5uZXJIVE1MID0gbGVmdF9hcnJheVtjb2wgKiAxMCArIHJvd107XHJcbiAgICAgIFRCTC5yb3dzW3Jvd10uY2VsbHNbY29sICogNSArIDJdLmlubmVySFRNTCA9IGtpZ287XHJcbiAgICAgIFRCTC5yb3dzW3Jvd10uY2VsbHNbY29sICogNSArIDNdLmlubmVySFRNTCA9IHJpZ2h0X2FycmF5W2NvbCAqIDEwICsgcm93XTtcclxuICAgICAgVEJMLnJvd3Nbcm93XS5jZWxsc1tjb2wgKiA1ICsgNF0uaW5uZXJIVE1MID0gXCI9XCI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyDvvJPooYzjga7lvI/jga7mj4/nlLtcclxuZXhwb3J0IGZ1bmN0aW9uIG9uZUxpbmUzRm9ybXVsYUNyZWF0ZShsZWZ0X2FycmF5LCBraWdvMSwgbWlkX2FycmF5LCBraWdvMiwgcmlnaHRfYXJyYXkpIHtcclxuICBjb25zdCBUQkwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlRCTFwiKTtcclxuICBUQkwuaW5uZXJIVE1MID0gXCJcIjtcclxuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcclxuICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgNzsgY29sKyspIHtcclxuICAgICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgIHRkLmNsYXNzTGlzdC5hZGQoXCJ0ZF9vbmVMaW5lXzNmb3JtdXJhXCIpO1xyXG4gICAgICB0ci5hcHBlbmRDaGlsZCh0ZCk7XHJcbiAgICB9XHJcbiAgICBUQkwuYXBwZW5kQ2hpbGQodHIpO1xyXG4gIH1cclxuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcclxuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDE7IGNvbCsrKSB7XHJcbiAgICAgIFRCTC5yb3dzW3Jvd10uY2VsbHNbY29sICogNV0uaW5uZXJIVE1MID0gYmFuZ291W2NvbCAqIDEwICsgcm93XTtcclxuICAgICAgVEJMLnJvd3Nbcm93XS5jZWxsc1tjb2wgKiA1ICsgMV0uaW5uZXJIVE1MID0gbGVmdF9hcnJheVtjb2wgKiAxMCArIHJvd107XHJcbiAgICAgIFRCTC5yb3dzW3Jvd10uY2VsbHNbY29sICogNSArIDJdLmlubmVySFRNTCA9IGtpZ28xW2NvbCAqIDEwICsgcm93XTtcclxuICAgICAgVEJMLnJvd3Nbcm93XS5jZWxsc1tjb2wgKiA1ICsgM10uaW5uZXJIVE1MID0gbWlkX2FycmF5W2NvbCAqIDEwICsgcm93XTtcclxuICAgICAgVEJMLnJvd3Nbcm93XS5jZWxsc1tjb2wgKiA1ICsgNF0uaW5uZXJIVE1MID0ga2lnbzJbY29sICogMTAgKyByb3ddO1xyXG4gICAgICBUQkwucm93c1tyb3ddLmNlbGxzW2NvbCAqIDUgKyA1XS5pbm5lckhUTUwgPSByaWdodF9hcnJheVtjb2wgKiAxMCArIHJvd107XHJcbiAgICAgIFRCTC5yb3dzW3Jvd10uY2VsbHNbY29sICogNSArIDZdLmlubmVySFRNTCA9IFwiPVwiO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJjb25zdCBiYW5nb3UgPSBbXCLikaBcIiwgXCLikaFcIiwgXCLikaJcIiwgXCLikaNcIiwgXCLikaRcIiwgXCLikaVcIiwgXCLikaZcIiwgXCLikadcIiwgXCLikahcIiwgXCLikalcIiwgXCLikapcIiwgXCLikatcIiwgXCLikaxcIiwgXCLika1cIiwgXCLika5cIiwgXCLika9cIiwgXCLikbBcIiwgXCLikbFcIiwgXCLikbJcIiwgXCLikbNcIl07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYW5zd2VyQ3JlYXRlKGFuc3dlcl9hcnJheSkge1xyXG4gIGNvbnN0IGFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuc3dlci1hcmVhXCIpO1xyXG4gIGFyZWEuaW5uZXJIVE1MID0gXCJcIjtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFuc3dlcl9hcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRpdi5zdHlsZS53aWR0aCA9IFwiMTAlXCI7XHJcbiAgICBkaXYuaW5uZXJIVE1MID0gYCR7YmFuZ291W2ldfeOAgCR7YW5zd2VyX2FycmF5W2ldfWA7XHJcbiAgICBhcmVhLmFwcGVuZENoaWxkKGRpdik7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHNlbGVjdE1lbnVDcmVhdGUgfSBmcm9tIFwiLi9zZXQuanNcIjtcclxuaW1wb3J0IHsgZHVwbGljYXRpb25DaGVjayB9IGZyb20gXCIuL2R1cGxpY2F0aW9uQ2hlY2suanNcIjtcclxuaW1wb3J0IHsgb25lTGluZUZvcm11bGFDcmVhdGUgfSBmcm9tIFwiLi9vbmVMaW5lRm9ybXVsYUNyZWF0ZS5qc1wiO1xyXG5pbXBvcnQgeyBhbnN3ZXJDcmVhdGUgfSBmcm9tIFwiLi9hbnN3ZXJDcmVhdGUuanNcIjtcclxuaW1wb3J0ICogYXMgc2UgZnJvbSBcIi4vc2UuanNcIjtcclxuXHJcbi8v5Yid5pyf6Kit5a6aXHJcbmNvbnN0IHNlbGVjdF9tZW51X2FycmF5ID0gW1wiMTDjgb7jgafjga7jgZ/jgZfjgZbjgpNcIl07XHJcbmNvbnN0IGtpZ28gPSBcIitcIjtcclxuY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3RcIik7XHJcbmNvbnN0IHF1ZXN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdWVzdGlvblwiKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdGVwMDIoKSB7XHJcbiAgbGV0IGluZGV4ID0gXCIwXCI7XHJcbiAgc2VsZWN0TWVudUNyZWF0ZShzZWxlY3RfbWVudV9hcnJheSk7XHJcbiAgcXVlc3Rpb25fY3JlYXRlKCk7XHJcbiAgLy8g44K744Os44Kv44OI44Oi44O844OJ44Gu5L2c5oiQ44O76Kit5a6aXHJcbiAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgaW5kZXggPSBzZWxlY3QudmFsdWU7XHJcbiAgICBxdWVzdGlvbl9jcmVhdGUoKTtcclxuICB9KTtcclxuICAvL+WVj+mhjOS9nOaIkOOCkuihjOOBhuODnOOCv+ODs+OBruioree9rlxyXG4gIHF1ZXN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBxdWVzdGlvbl9jcmVhdGUoKSk7XHJcbiAgLy/llY/poYzkvZzmiJBcclxuICBmdW5jdGlvbiBxdWVzdGlvbl9jcmVhdGUoKSB7XHJcbiAgICBjb25zdCBsZWZ0X2FycmF5ID0gW107IC8v5byP44Gu5bem44Gu5YCk44KS5qC857SN44GZ44KLXHJcbiAgICBjb25zdCByaWdodF9hcnJheSA9IFtdOyAvL+W8j+OBruWPs+OBruWApOOCkuagvOe0jeOBmeOCi1xyXG4gICAgY29uc3QgYW5zd2VyX2FycmF5ID0gW107IC8v562U44GI44KS5qC857SN44GZ44KLXHJcbiAgICBjb25zdCBjaGVja19hcnJheSA9IFtdOyAvL+mHjeikh+OCkuODgeOCp+ODg+OCr+OBmeOCi+OBn+OCgeOBrumFjeWIl1xyXG4gICAgc2Uuc2V0LmN1cnJlbnRUaW1lID0gMDtcclxuICAgIHNlLnNldC5wbGF5KCk7XHJcbiAgICBsZXQgYSwgYiwgYW5zO1xyXG5cclxuICAgIC8v44GT44GT44Gr5byP44KS6KiY6L+w44GZ44KL44CCXHJcbiAgICB3aGlsZSAoY2hlY2tfYXJyYXkubGVuZ3RoIDwgMjApIHtcclxuICAgICAgLy/ph43opIfjga7jgarjgYTlvI/jga7ntYTlkIjjgZvjgYzlv4XjgZoyMOS7peS4iuOBq+OBquOCi+OCiOOBhuOBq+OBmeOCi+OAglxyXG4gICAgICBhbnMgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5ICsgMik7XHJcbiAgICAgIGEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoYW5zIC0gMSkgKyAxKTtcclxuICAgICAgYiA9IGFucyAtIGE7XHJcblxyXG4gICAgICBjb25zdCBjaGVjayA9ICsoYSAqIDEwMCArIGIpOyAvL+ODgeOCp+ODg+OCr+eUqOOBruWApFxyXG4gICAgICBjb25zdCByZXN1bHQgPSBkdXBsaWNhdGlvbkNoZWNrKGNoZWNrLCBjaGVja19hcnJheSk7XHJcblxyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgY2hlY2tfYXJyYXkucHVzaChjaGVjayk7XHJcbiAgICAgICAgbGVmdF9hcnJheS5wdXNoKGEpO1xyXG4gICAgICAgIHJpZ2h0X2FycmF5LnB1c2goYik7XHJcbiAgICAgICAgYW5zd2VyX2FycmF5LnB1c2goYW5zKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25lTGluZUZvcm11bGFDcmVhdGUobGVmdF9hcnJheSwga2lnbywgcmlnaHRfYXJyYXksIGFuc3dlcl9hcnJheSk7XHJcbiAgICBhbnN3ZXJDcmVhdGUoYW5zd2VyX2FycmF5KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgc2VsZWN0TWVudUNyZWF0ZSB9IGZyb20gXCIuL3NldC5qc1wiO1xyXG5pbXBvcnQgeyBkdXBsaWNhdGlvbkNoZWNrIH0gZnJvbSBcIi4vZHVwbGljYXRpb25DaGVjay5qc1wiO1xyXG5pbXBvcnQgeyBvbmVMaW5lRm9ybXVsYUNyZWF0ZSB9IGZyb20gXCIuL29uZUxpbmVGb3JtdWxhQ3JlYXRlLmpzXCI7XHJcbmltcG9ydCB7IGFuc3dlckNyZWF0ZSB9IGZyb20gXCIuL2Fuc3dlckNyZWF0ZS5qc1wiO1xyXG5pbXBvcnQgKiBhcyBzZSBmcm9tIFwiLi9zZS5qc1wiO1xyXG5cclxuLy/liJ3mnJ/oqK3lrppcclxuY29uc3Qgc2VsZWN0X21lbnVfYXJyYXkgPSBbXCIxMOOBvuOBp+OBruOBsuOBjeOBluOCk1wiXTtcclxuY29uc3Qga2lnbyA9IFwiLVwiO1xyXG5jb25zdCBzZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdFwiKTtcclxuY29uc3QgcXVlc3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF1ZXN0aW9uXCIpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXAwMygpIHtcclxuICBsZXQgaW5kZXggPSBcIjBcIjtcclxuICBzZWxlY3RNZW51Q3JlYXRlKHNlbGVjdF9tZW51X2FycmF5KTtcclxuICBxdWVzdGlvbl9jcmVhdGUoKTtcclxuXHJcbiAgLy8g44K744Os44Kv44OI44Oi44O844OJ44Gu5L2c5oiQ44O76Kit5a6aXHJcbiAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgaW5kZXggPSBzZWxlY3QudmFsdWU7XHJcbiAgICBxdWVzdGlvbl9jcmVhdGUoKTtcclxuICB9KTtcclxuICAvL+WVj+mhjOS9nOaIkOOCkuihjOOBhuODnOOCv+ODs+OBruioree9rlxyXG4gIHF1ZXN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBxdWVzdGlvbl9jcmVhdGUoKSk7XHJcbiAgLy/llY/poYzkvZzmiJBcclxuICBmdW5jdGlvbiBxdWVzdGlvbl9jcmVhdGUoKSB7XHJcbiAgICBjb25zdCBsZWZ0X2FycmF5ID0gW107IC8v5byP44Gu5bem44Gu5YCk44KS5qC857SN44GZ44KLXHJcbiAgICBjb25zdCByaWdodF9hcnJheSA9IFtdOyAvL+W8j+OBruWPs+OBruWApOOCkuagvOe0jeOBmeOCi1xyXG4gICAgY29uc3QgYW5zd2VyX2FycmF5ID0gW107IC8v562U44GI44KS5qC857SN44GZ44KLXHJcbiAgICBjb25zdCBjaGVja19hcnJheSA9IFtdOyAvL+mHjeikh+OCkuODgeOCp+ODg+OCr+OBmeOCi+OBn+OCgeOBrumFjeWIl1xyXG4gICAgc2Uuc2V0LmN1cnJlbnRUaW1lID0gMDtcclxuICAgIHNlLnNldC5wbGF5KCk7XHJcbiAgICBsZXQgYSwgYiwgYW5zO1xyXG5cclxuICAgIC8v44GT44GT44Gr5byP44KS6KiY6L+w44GZ44KL44CCXHJcbiAgICB3aGlsZSAoY2hlY2tfYXJyYXkubGVuZ3RoIDwgMjApIHtcclxuICAgICAgLy/ph43opIfjga7jgarjgYTlvI/jga7ntYTlkIjjgZvjgYzlv4XjgZoyMOS7peS4iuOBq+OBquOCi+OCiOOBhuOBq+OBmeOCi+OAglxyXG4gICAgICBhID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSArIDIpO1xyXG4gICAgICBiID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGEgLSAxKSArIDEpO1xyXG4gICAgICBhbnMgPSBhIC0gYjtcclxuXHJcbiAgICAgIGNvbnN0IGNoZWNrID0gKyhhICogMTAwICsgYik7IC8v44OB44Kn44OD44Kv55So44Gu5YCkXHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGR1cGxpY2F0aW9uQ2hlY2soY2hlY2ssIGNoZWNrX2FycmF5KTtcclxuXHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICBjaGVja19hcnJheS5wdXNoKGNoZWNrKTtcclxuICAgICAgICBsZWZ0X2FycmF5LnB1c2goYSk7XHJcbiAgICAgICAgcmlnaHRfYXJyYXkucHVzaChiKTtcclxuICAgICAgICBhbnN3ZXJfYXJyYXkucHVzaChhbnMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBvbmVMaW5lRm9ybXVsYUNyZWF0ZShsZWZ0X2FycmF5LCBraWdvLCByaWdodF9hcnJheSwgYW5zd2VyX2FycmF5KTtcclxuICAgIGFuc3dlckNyZWF0ZShhbnN3ZXJfYXJyYXkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBzZWxlY3RNZW51Q3JlYXRlIH0gZnJvbSBcIi4vc2V0LmpzXCI7XHJcbmltcG9ydCB7IGR1cGxpY2F0aW9uQ2hlY2sgfSBmcm9tIFwiLi9kdXBsaWNhdGlvbkNoZWNrLmpzXCI7XHJcbmltcG9ydCB7IG9uZUxpbmUzRm9ybXVsYUNyZWF0ZSB9IGZyb20gXCIuL29uZUxpbmVGb3JtdWxhQ3JlYXRlLmpzXCI7XHJcbmltcG9ydCB7IGFuc3dlckNyZWF0ZSB9IGZyb20gXCIuL2Fuc3dlckNyZWF0ZS5qc1wiO1xyXG5pbXBvcnQgKiBhcyBzZSBmcm9tIFwiLi9zZS5qc1wiO1xyXG5cclxuLy/liJ3mnJ/oqK3lrppcclxuY29uc3Qgc2VsZWN0X21lbnVfYXJyYXkgPSBbXCLjgIcr44CHK+OAh1wiLCBcIuOAh+KAleOAh+KAleOAh1wiLCBcIivjgagt44Gu44G+44GY44Gj44GfXCJdO1xyXG5jb25zdCBzZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdFwiKTtcclxuY29uc3QgcXVlc3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF1ZXN0aW9uXCIpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXAwNSgpIHtcclxuICBsZXQgaW5kZXggPSBcIjBcIjtcclxuICBzZWxlY3RNZW51Q3JlYXRlKHNlbGVjdF9tZW51X2FycmF5KTtcclxuICBxdWVzdGlvbl9jcmVhdGUoKTtcclxuICAvLyDjgrvjg6zjgq/jg4jjg6Ljg7zjg4njga7kvZzmiJDjg7voqK3lrppcclxuICBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICBpbmRleCA9IHNlbGVjdC52YWx1ZTtcclxuICAgIHF1ZXN0aW9uX2NyZWF0ZSgpO1xyXG4gIH0pO1xyXG4gIC8v5ZWP6aGM5L2c5oiQ44KS6KGM44GG44Oc44K/44Oz44Gu6Kit572uXHJcbiAgcXVlc3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHF1ZXN0aW9uX2NyZWF0ZSgpKTtcclxuICAvL+WVj+mhjOS9nOaIkFxyXG4gIGZ1bmN0aW9uIHF1ZXN0aW9uX2NyZWF0ZSgpIHtcclxuICAgIGNvbnN0IGxlZnRfYXJyYXkgPSBbXTsgLy/lvI/jga7lt6bjga7lgKTjgpLmoLzntI3jgZnjgotcclxuICAgIGNvbnN0IGtpZ28xX2FycmF5ID0gW107IC8v5byP44Gu77yR44Gk44Gu55uu44Gu6KiY5Y+344KS5qC857SN44GZ44KLXHJcbiAgICBjb25zdCBtaWRfYXJyYXkgPSBbXTsgLy/lvI/jga7kuK3jga7lgKTjgpLmoLzntI3jgZnjgotcclxuICAgIGNvbnN0IGtpZ28yX2FycmF5ID0gW107IC8v5byP44Gu77yR44Gk44Gu55uu44Gu6KiY5Y+344KS5qC857SN44GZ44KLXHJcbiAgICBjb25zdCByaWdodF9hcnJheSA9IFtdOyAvL+W8j+OBruWPs+OBruWApOOCkuagvOe0jeOBmeOCi1xyXG4gICAgY29uc3QgYW5zd2VyX2FycmF5ID0gW107IC8v562U44GI44KS5qC857SN44GZ44KLXHJcbiAgICBjb25zdCBjaGVja19hcnJheSA9IFtdOyAvL+mHjeikh+OCkuODgeOCp+ODg+OCr+OBmeOCi+OBn+OCgeOBrumFjeWIl1xyXG4gICAgc2Uuc2V0LmN1cnJlbnRUaW1lID0gMDtcclxuICAgIHNlLnNldC5wbGF5KCk7XHJcbiAgICBsZXQgYSwgYiwgYywga2lnbzEsIGtpZ28yLCBhbnM7XHJcblxyXG4gICAgLy/jgZPjgZPjgavlvI/jgpLoqJjov7DjgZnjgovjgIJcclxuICAgIHdoaWxlIChjaGVja19hcnJheS5sZW5ndGggPCAxMCkge1xyXG4gICAgICAvL+mHjeikh+OBruOBquOBhOW8j+OBrue1hOWQiOOBm+OBjOW/heOBmjEw5Lul5LiK44Gr44Gq44KL44KI44GG44Gr44GZ44KL44CCXHJcblxyXG4gICAgICBzd2l0Y2ggKGluZGV4KSB7XHJcbiAgICAgICAgY2FzZSBcIjBcIjpcclxuICAgICAgICAgIGEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5ICsgMSk7XHJcbiAgICAgICAgICBiID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSArIDEpO1xyXG4gICAgICAgICAgYyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGgubWluKDIwIC0gKGEgKyBiKSwgOSkgKyAxKTtcclxuICAgICAgICAgIGFucyA9IE1hdGguZmxvb3IoYSArIGIgKyBjKTtcclxuICAgICAgICAgIGtpZ28xID0gXCIrXCI7XHJcbiAgICAgICAgICBraWdvMiA9IFwiK1wiO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIjFcIjpcclxuICAgICAgICAgIGEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNCArIDUpO1xyXG4gICAgICAgICAgYiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGgubWluKGEgLSAyLCA5KSArIDEpO1xyXG4gICAgICAgICAgYyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGgubWluKGEgLSBiIC0gMSwgOSkgKyAxKTtcclxuICAgICAgICAgIGFucyA9IE1hdGguZmxvb3IoYSAtIGIgLSBjKTtcclxuICAgICAgICAgIGtpZ28xID0gXCItXCI7XHJcbiAgICAgICAgICBraWdvMiA9IFwiLVwiO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIjJcIjpcclxuICAgICAgICAgIGNvbnN0IG1vZGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyICsgMSk7XHJcbiAgICAgICAgICBpZiAobW9kZSA9PT0gMSkge1xyXG4gICAgICAgICAgICBhID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSArIDEpO1xyXG4gICAgICAgICAgICBiID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSArIDEpO1xyXG4gICAgICAgICAgICBjID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGEgKyBiIC0gMSkgKyAxKTtcclxuICAgICAgICAgICAgYW5zID0gTWF0aC5mbG9vcihhICsgYiAtIGMpO1xyXG4gICAgICAgICAgICBraWdvMSA9IFwiK1wiO1xyXG4gICAgICAgICAgICBraWdvMiA9IFwiLVwiO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE0ICsgNSk7XHJcbiAgICAgICAgICAgIGIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLm1pbihhLCA5KSArIDEpO1xyXG4gICAgICAgICAgICBjID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5taW4oMjAgLSAoYSAtIGIpLCA5KSArIDEpO1xyXG4gICAgICAgICAgICBhbnMgPSBNYXRoLmZsb29yKGEgLSBiICsgYyk7XHJcbiAgICAgICAgICAgIGtpZ28xID0gXCItXCI7XHJcbiAgICAgICAgICAgIGtpZ28yID0gXCIrXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgY2hlY2sgPSArKGEgKiAxMDAgKyBiICogMTAgKyBjKTsgLy/jg4Hjgqfjg4Pjgq/nlKjjga7lgKRcclxuICAgICAgY29uc3QgcmVzdWx0ID0gZHVwbGljYXRpb25DaGVjayhjaGVjaywgY2hlY2tfYXJyYXkpO1xyXG5cclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIGNoZWNrX2FycmF5LnB1c2goY2hlY2spO1xyXG4gICAgICAgIGxlZnRfYXJyYXkucHVzaChhKTtcclxuICAgICAgICBtaWRfYXJyYXkucHVzaChiKTtcclxuICAgICAgICByaWdodF9hcnJheS5wdXNoKGMpO1xyXG4gICAgICAgIGtpZ28xX2FycmF5LnB1c2goa2lnbzEpO1xyXG4gICAgICAgIGtpZ28yX2FycmF5LnB1c2goa2lnbzIpO1xyXG4gICAgICAgIGFuc3dlcl9hcnJheS5wdXNoKGFucyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIG9uZUxpbmUzRm9ybXVsYUNyZWF0ZShsZWZ0X2FycmF5LCBraWdvMV9hcnJheSwgbWlkX2FycmF5LCBraWdvMl9hcnJheSwgcmlnaHRfYXJyYXkpO1xyXG4gICAgYW5zd2VyQ3JlYXRlKGFuc3dlcl9hcnJheSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHNlbGVjdE1lbnVDcmVhdGUgfSBmcm9tIFwiLi9zZXQuanNcIjtcclxuaW1wb3J0IHsgZHVwbGljYXRpb25DaGVjayB9IGZyb20gXCIuL2R1cGxpY2F0aW9uQ2hlY2suanNcIjtcclxuaW1wb3J0IHsgb25lTGluZUZvcm11bGFDcmVhdGUgfSBmcm9tIFwiLi9vbmVMaW5lRm9ybXVsYUNyZWF0ZS5qc1wiO1xyXG5pbXBvcnQgeyBhbnN3ZXJDcmVhdGUgfSBmcm9tIFwiLi9hbnN3ZXJDcmVhdGUuanNcIjtcclxuaW1wb3J0ICogYXMgc2UgZnJvbSBcIi4vc2UuanNcIjtcclxuXHJcbi8v5Yid5pyf6Kit5a6aXHJcbmNvbnN0IHNlbGVjdF9tZW51X2FycmF5ID0gW1wiMjDjgb7jgafjga7jgZ/jgZfjgZbjgpNcIl07XHJcbmNvbnN0IGtpZ28gPSBcIitcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdGVwMDYoKSB7XHJcbiAgbGV0IGluZGV4ID0gXCIwXCI7XHJcbiAgc2VsZWN0TWVudUNyZWF0ZShzZWxlY3RfbWVudV9hcnJheSk7XHJcbiAgcXVlc3Rpb25fY3JlYXRlKCk7XHJcblxyXG4gIC8vIOOCu+ODrOOCr+ODiOODouODvOODieOBruS9nOaIkOODu+ioreWumlxyXG4gIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICAgIGluZGV4ID0gc2VsZWN0LnZhbHVlO1xyXG4gICAgcXVlc3Rpb25fY3JlYXRlKCk7XHJcbiAgfSk7XHJcblxyXG4gIC8v5ZWP6aGM5L2c5oiQ44KS6KGM44GG44Oc44K/44Oz44Gu6Kit572uXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdWVzdGlvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gcXVlc3Rpb25fY3JlYXRlKCkpO1xyXG5cclxuICAvL+WVj+mhjOS9nOaIkFxyXG4gIGZ1bmN0aW9uIHF1ZXN0aW9uX2NyZWF0ZSgpIHtcclxuICAgIGNvbnN0IGxlZnRfYXJyYXkgPSBbXTsgLy/lvI/jga7lt6bjga7lgKTjgpLmoLzntI3jgZnjgotcclxuICAgIGNvbnN0IHJpZ2h0X2FycmF5ID0gW107IC8v5byP44Gu5Y+z44Gu5YCk44KS5qC857SN44GZ44KLXHJcbiAgICBjb25zdCBhbnN3ZXJfYXJyYXkgPSBbXTsgLy/nrZTjgYjjgpLmoLzntI3jgZnjgotcclxuICAgIGNvbnN0IGNoZWNrX2FycmF5ID0gW107IC8v6YeN6KSH44KS44OB44Kn44OD44Kv44GZ44KL44Gf44KB44Gu6YWN5YiXXHJcbiAgICBzZS5zZXQuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgc2Uuc2V0LnBsYXkoKTtcclxuICAgIGxldCBhLCBiLCBhbnM7XHJcblxyXG4gICAgLy/jgZPjgZPjgavlvI/jgpLoqJjov7DjgZnjgovjgIJcclxuICAgIHdoaWxlIChjaGVja19hcnJheS5sZW5ndGggPCAyMCkge1xyXG4gICAgICAvL+mHjeikh+OBruOBquOBhOW8j+OBrue1hOWQiOOBm+OBjOW/heOBmjIw5Lul5LiK44Gr44Gq44KL44KI44GG44Gr44GZ44KL44CCXHJcblxyXG4gICAgICBhID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOCArIDIpO1xyXG4gICAgICBiID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYSArICg4IC0gYSkgKyAyKTtcclxuICAgICAgYW5zID0gTWF0aC5mbG9vcihhICsgYik7XHJcblxyXG4gICAgICBjb25zdCBjaGVjayA9ICsoYSAqIDEwMCArIGIpOyAvL+ODgeOCp+ODg+OCr+eUqOOBruWApFxyXG4gICAgICBjb25zdCByZXN1bHQgPSBkdXBsaWNhdGlvbkNoZWNrKGNoZWNrLCBjaGVja19hcnJheSk7XHJcblxyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgY2hlY2tfYXJyYXkucHVzaChjaGVjayk7XHJcbiAgICAgICAgbGVmdF9hcnJheS5wdXNoKGEpO1xyXG4gICAgICAgIHJpZ2h0X2FycmF5LnB1c2goYik7XHJcbiAgICAgICAgYW5zd2VyX2FycmF5LnB1c2goYW5zKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25lTGluZUZvcm11bGFDcmVhdGUobGVmdF9hcnJheSwga2lnbywgcmlnaHRfYXJyYXksIGFuc3dlcl9hcnJheSk7XHJcbiAgICBhbnN3ZXJDcmVhdGUoYW5zd2VyX2FycmF5KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZHVwbGljYXRpb25DaGVjayB9IGZyb20gXCIuL2R1cGxpY2F0aW9uQ2hlY2suanNcIjtcclxuaW1wb3J0ICogYXMgc2UgZnJvbSBcIi4vc2UuanNcIjtcclxubGV0IHRleHRfMWEsIHRleHRfMWIsIHRleHRfMmEsIHRleHRfMmIsIHRleHRfMmMsIHRleHRfM2EsIHRleHRfM2IsIHRleHRfNGEsIHRleHRfNWEsIHRleHRfNmE7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RlcDEwKCkge1xyXG4gIGxldCBvcmRlciA9IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5XTtcclxuICBUQkwuaW5uZXJIVE1MID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJoNFwiPlxyXG4gICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6ZmxleDtcIj5cclxuICAgICAgPGRpdj7ikaDjgIA8L2Rpdj5cclxuICAgICAgPGRpdiBpZD1cInF1ZXN0XzFcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj7jgIDjgIDvvIjjgZfjgY3vvIk8L2Rpdj5cclxuICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDoxODBtbTt0ZXh0LWFsaWduOnJpZ2h0O1wiPu+8iOOBk+OBn+OBiO+8ieOAgOOAgOOAgOOAgOOAgOOAgOOAgDwvZGl2PiBcclxuICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDoxODBtbTt0ZXh0LWFsaWduOnJpZ2h0O1wiPu+8v++8v++8v++8v++8v++8v++8vzwvZGl2PiBcclxuICAgIDxici8+XHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgPGRpdiBjbGFzcz1cImg0XCI+XHJcbiAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTpmbGV4O1wiPlxyXG4gICAgPGRpdj7ikaHjgIA8L2Rpdj5cclxuICAgIDxkaXYgaWQ9XCJxdWVzdF8yXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+44CA44CA77yI44GX44GN77yJPC9kaXY+XHJcbiAgICA8ZGl2IHN0eWxlPVwid2lkdGg6MTgwbW07dGV4dC1hbGlnbjpyaWdodDtcIj7vvIjjgZPjgZ/jgYjvvInjgIDjgIDjgIDjgIDjgIDjgIDjgIA8L2Rpdj4gXHJcbiAgICA8ZGl2IHN0eWxlPVwid2lkdGg6MTgwbW07dGV4dC1hbGlnbjpyaWdodDtcIj7vvL/vvL/vvL/vvL/vvL/vvL/vvL88L2Rpdj4gXHJcbiAgICA8YnIvPlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICAgIDxkaXYgY2xhc3M9XCJoNFwiPlxyXG4gICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6ZmxleDtcIj5cclxuICAgIDxkaXY+4pGi44CAPC9kaXY+XHJcbiAgICA8ZGl2IGlkPVwicXVlc3RfM1wiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PuOAgOOAgO+8iOOBl+OBje+8iTwvZGl2PlxyXG4gICAgPGRpdiBzdHlsZT1cIndpZHRoOjE4MG1tO3RleHQtYWxpZ246cmlnaHQ7XCI+77yI44GT44Gf44GI77yJ44CA44CA44CA44CA44CA44CA44CAPC9kaXY+IFxyXG4gICAgPGRpdiBzdHlsZT1cIndpZHRoOjE4MG1tO3RleHQtYWxpZ246cmlnaHQ7XCI+77y/77y/77y/77y/77y/77y/77y/PC9kaXY+IFxyXG4gICAgPGJyLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImg0XCI+XHJcbiAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTpmbGV4O1wiPlxyXG4gICAgPGRpdj7ikaPjgIA8L2Rpdj5cclxuICAgIDxkaXYgaWQ9XCJxdWVzdF80XCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXY+44CA44CA77yI44GX44GN77yJPC9kaXY+XHJcbiAgICA8ZGl2IHN0eWxlPVwid2lkdGg6MTgwbW07dGV4dC1hbGlnbjpyaWdodDtcIj7vvIjjgZPjgZ/jgYjvvInjgIDjgIDjgIDjgIDjgIDjgIDjgIA8L2Rpdj4gXHJcbiAgICA8ZGl2IHN0eWxlPVwid2lkdGg6MTgwbW07dGV4dC1hbGlnbjpyaWdodDtcIj7vvL/vvL/vvL/vvL/vvL/vvL/vvL88L2Rpdj4gXHJcbiAgICA8YnIvPlxyXG4gICAgPC9kaXY+XHJcbmA7XHJcbiAgcXVlc3Rpb25fY3JlYXRlKCk7XHJcbiAgLy/llY/poYzkvZzmiJDjgpLooYzjgYbjg5zjgr/jg7Pjga7oqK3nva5cclxuICBxdWVzdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gcXVlc3Rpb25fY3JlYXRlKCkpO1xyXG5cclxuICBmdW5jdGlvbiBxdWVzdGlvbl9jcmVhdGUoKSB7XHJcbiAgICBzaHVmZmxlT3JkZXIoKTtcclxuICAgIGNvbnN0IGxlZnRfYXJyYXkgPSBbXTsgLy/lvI/jga7lt6bjga7lgKTjgpLmoLzntI3jgZnjgotcclxuICAgIGNvbnN0IHJpZ2h0X2FycmF5ID0gW107IC8v5byP44Gu5Y+z44Gu5YCk44KS5qC857SN44GZ44KLXHJcbiAgICBjb25zdCBhbnN3ZXJfYXJyYXkgPSBbXTsgLy/nrZTjgYjjgpLmoLzntI3jgZnjgotcclxuICAgIGNvbnN0IGtpZ29fYXJyYXkgPSBbXCIrXCIsIFwiLVwiLCBcIitcIiwgXCItXCIsIFwiLVwiLCBcIitcIiwgXCItXCIsIFwiLVwiLCBcIitcIiwgXCIrXCJdO1xyXG4gICAgY29uc3QgdGFuaV9hcnJheSA9IFtcIuS6ulwiLCBcIuS6ulwiLCBcIuacrFwiLCBcIuacrFwiLCBcIuacrFwiLCBcIuOBk1wiLCBcIuOBk1wiLCBcIuOBoOOCk1wiLCBcIuOBk1wiLCBcIuS6ulwiXTtcclxuICAgIGNvbnN0IGNoZWNrX2FycmF5ID0gW107IC8v6YeN6KSH44KS44OB44Kn44OD44Kv44GZ44KL44Gf44KB44Gu6YWN5YiXXHJcbiAgICBzZS5zZXQuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgc2Uuc2V0LnBsYXkoKTtcclxuICAgIGxldCBhLFxyXG4gICAgICBiLFxyXG4gICAgICBjb3VudCA9IDAsXHJcbiAgICAgIGFucztcclxuXHJcbiAgICB3aGlsZSAoY2hlY2tfYXJyYXkubGVuZ3RoIDwgMTApIHtcclxuICAgICAgLy/ph43opIfjga7jgarjgYTlvI/jga7ntYTlkIjjgZvjgYzlv4XjgZoxMOS7peS4iuOBq+OBquOCi+OCiOOBhuOBq+OBmeOCi+OAglxyXG4gICAgICBhID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSArIDIpO1xyXG4gICAgICBiID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYSk7XHJcbiAgICAgIGlmIChraWdvX2FycmF5W2NvdW50XSA9PT0gXCIrXCIpIHtcclxuICAgICAgICBhbnMgPSBNYXRoLmZsb29yKGEgKyBiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhbnMgPSBNYXRoLmZsb29yKGEgLSBiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgY2hlY2sgPSArKGEgKiAxMDAgKyBiKTsgLy/jg4Hjgqfjg4Pjgq/nlKjjga7lgKRcclxuICAgICAgY29uc3QgcmVzdWx0ID0gZHVwbGljYXRpb25DaGVjayhjaGVjaywgY2hlY2tfYXJyYXkpO1xyXG5cclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIGNoZWNrX2FycmF5LnB1c2goY2hlY2spO1xyXG4gICAgICAgIGxlZnRfYXJyYXkucHVzaChhKTtcclxuICAgICAgICByaWdodF9hcnJheS5wdXNoKGIpO1xyXG4gICAgICAgIGFuc3dlcl9hcnJheS5wdXNoKGDjgZfjgY3jgIAke2F9JHtraWdvX2FycmF5W2NvdW50XX0ke2J9PSR7YW5zfeOAgOOBk+OBn+OBiOOAgCR7YW5zfSR7dGFuaV9hcnJheVtjb3VudF19YCk7XHJcbiAgICAgICAgY291bnQrKztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRleHRfMWEgPSBgXHJcbiAg44GT44Gp44KC44GM44CAJHtsZWZ0X2FycmF5WzBdfeS6uuOAgOOBguOBneOCk+OBp+OBhOOBvuOBl+OBn+OAgjxici8+XHJcbiAg44Gd44GT44G444CB44CAJHtyaWdodF9hcnJheVswXX3kurrjgIDjgoTjgaPjgabjgY3jgb7jgZfjgZ/jgII8YnIvPlxyXG4gIOOBv+OCk+OBquOBp+OAgOOBquOCk+S6uuOBq+OBquOCiuOBvuOBl+OBn+OBi+OAgjxici8+XHJcbiAgYDtcclxuICAgIHRleHRfMWIgPSBgXHJcbiAg44GT44Gp44KC44GM44CAJHtsZWZ0X2FycmF5WzFdfeS6uuOAgOOBguOBneOCk+OBp+OBhOOBvuOBl+OBn+OAgjxici8+XHJcbiAgJHtyaWdodF9hcnJheVsxXX3kurrjgIDjgYvjgYjjgaPjgabjgYTjgY3jgb7jgZfjgZ/jgII8YnIvPlxyXG4gIOOBruOBk+OCiuOBr+OAgOOBquOCk+S6uuOBq+OBquOCiuOBvuOBl+OBn+OBi+OAgjxici8+XHJcbiAgYDtcclxuICAgIHRleHRfMmEgPSBgXHJcbiAg44GC44GL44GE44CA44GL44GV44GM44CAJHtsZWZ0X2FycmF5WzJdfeacrO+8jOOAgDxici8+XHJcbiAg44GN44GE44KN44GE44CA44GL44GV44GM44CB44CAJHtyaWdodF9hcnJheVsyXX3mnKzjgIDjgYLjgorjgb7jgZnjgII8YnIvPlxyXG4gIOOBi+OBleOBr+OAgOOBnOOCk+OBtuOBp+OAgOOBquOCk+acrOOAgOOBp+OBmeOBi+OAgjxici8+XHJcbiAgYDtcclxuICAgIHRleHRfMmIgPSBgXHJcbiAg44GC44GL44GE44CA44GL44GV44GM44CAJHtsZWZ0X2FycmF5WzNdfeacrO+8jOOAgDxici8+XHJcbiAg44GN44GE44KN44GE44CA44GL44GV44GM44CB44CAJHtyaWdodF9hcnJheVszXX3mnKzjgIDjgYLjgorjgb7jgZnjgII8YnIvPlxyXG4gIOOBguOBi+OBhOOAgOOBi+OBleOBr+OAgeOBjeOBhOOCjeOBhOOAgOOBi+OBleOCiOOCiuOAgTxici8+XHJcbiAg44Gq44KT5pys44CA44GK44GK44GE44Gn44GZ44GL44CCPGJyLz5cclxuICBgO1xyXG4gICAgdGV4dF8yYyA9IGBcclxuICDjgYLjgYvjgYTjgIDjgYvjgZXjgYzjgIAke2xlZnRfYXJyYXlbNF195pys77yM44CAPGJyLz5cclxuICDjgY3jgYTjgo3jgYTjgIDjgYvjgZXjgYzjgIHjgIAke3JpZ2h0X2FycmF5WzRdfeacrOOAgOOBguOCiuOBvuOBmeOAgjxici8+XHJcbiAg44GN44GE44KN44GE44CA44GL44GV44Gv44CB44GC44GL44GE44CA44GL44GV44KI44KK44CBPGJyLz5cclxuICDjgarjgpPmnKzjgIDjgZnjgY/jgarjgYTjgafjgZnjgYvjgII8YnIvPlxyXG4gIGA7XHJcbiAgICB0ZXh0XzNhID0gYFxyXG4gIOOBguOCgeOBjOOAgCR7bGVmdF9hcnJheVs1XX3jgZPvvIzjgYLjgorjgb7jgZnjgII8YnIvPlxyXG4gIOOBneOBk+OBuOOAgeOAgCR7cmlnaHRfYXJyYXlbNV1944GT44CA44KC44KJ44GE44G+44GX44Gf44CCPGJyLz5cclxuICDjgYLjgoHjga/jgIDjgZzjgpPjgbbjgafjgIDjgarjgpPjgZPjgIDjgYLjgorjgb7jgZnjgYvjgII8YnIvPlxyXG4gIGA7XHJcbiAgICB0ZXh0XzNiID0gYFxyXG4gIOOBguOCgeOBjOOAgCR7bGVmdF9hcnJheVs2XX3jgZPvvIzjgYLjgorjgb7jgZnjgII8YnIvPlxyXG4gICR7cmlnaHRfYXJyYXlbNl1944GT44CA44Gf44G544G+44GX44Gf44CCPGJyLz5cclxuICDjgYLjgoHjga/jgIDjga7jgZPjgorjgIDjgarjgpPjgZPjgavjgIDjgarjgorjgb7jgZfjgZ/jgYvjgII8YnIvPlxyXG4gIGA7XHJcbiAgICB0ZXh0XzRhID0gYFxyXG4gIOOBi+OBhOOBoOOCk+OBjOOAgOOBnOOCk+OBtuOBp+OAgCR7bGVmdF9hcnJheVs3XX3jgaDjgpPvvIzjgYLjgorjgb7jgZnjgII8YnIvPlxyXG4gICR7cmlnaHRfYXJyYXlbN11944Gg44KT44KB44G+44Gn44CA44Gu44G844KK44G+44GX44Gf44CCPGJyLz5cclxuICDjgYLjgajjgIDjgarjgpPjgaDjgpPjgIDjgYLjgorjgb7jgZnjgYvjgIJcclxuICBgO1xyXG4gICAgdGV4dF81YSA9IGBcclxuICDjgYTjgZnjgavjgIAke2xlZnRfYXJyYXlbOF195Lq677yM44GZ44KP44Gj44Gm44GE44G+44GZ44CCPGJyLz5cclxuICDjgYLjgYTjgabjgYTjgovjgIDjgYTjgZnjga/jgIAke3JpZ2h0X2FycmF5WzhdfeOBk+OAgOOBguOCiuOBvuOBmeOAgjxici8+XHJcbiAg44GE44GZ44Gv44CB44G/44KT44Gq44Gn44CA44GE44GP44Gk44CA44GC44KK44G+44GZ44GL44CCPGJyLz5cclxuICBgO1xyXG4gICAgdGV4dF82YSA9IGBcclxuICDjgZ/jgo3jgYbjgZXjgpPjga/jgIHjgYbjgZfjgo3jgYvjgonjgIAke2xlZnRfYXJyYXlbOV1944Gw44KT44KB44Gr44CA44GE44G+44GZ44CCPGJyLz5cclxuICDjgZ/jgo3jgYbjgZXjgpPjga7jgIDjgb7jgYjjgavjgIAke3JpZ2h0X2FycmF5WzldfeS6uuOAgOOBhOOBvuOBmeOAgjxici8+XHJcbiAg44G/44KT44Gq44Gn44CA44Gq44KT5Lq644CA44GE44G+44GZ44GL44CCPGJyLz5cclxuICBgO1xyXG4gICAgY29uc3QgVEVYVCA9IFt0ZXh0XzFhLCB0ZXh0XzFiLCB0ZXh0XzJhLCB0ZXh0XzJiLCB0ZXh0XzJjLCB0ZXh0XzNhLCB0ZXh0XzNiLCB0ZXh0XzRhLCB0ZXh0XzVhLCB0ZXh0XzZhXTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXVlc3RfMVwiKS5pbm5lckhUTUwgPSBURVhUW29yZGVyWzBdXTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXVlc3RfMlwiKS5pbm5lckhUTUwgPSBURVhUW29yZGVyWzFdXTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXVlc3RfM1wiKS5pbm5lckhUTUwgPSBURVhUW29yZGVyWzJdXTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXVlc3RfNFwiKS5pbm5lckhUTUwgPSBURVhUW29yZGVyWzNdXTtcclxuXHJcbiAgICBjb25zdCBhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbnN3ZXItYXJlYVwiKTtcclxuICAgIGFyZWEuaW5uZXJIVE1MID1gXHJcbiAgICDikaDjgIAke2Fuc3dlcl9hcnJheVtvcmRlclswXV1944CA44CAXHJcbiAgICDikaHjgIAke2Fuc3dlcl9hcnJheVtvcmRlclsxXV19PC9icj5cclxuICAgIOKRouOAgCR7YW5zd2VyX2FycmF5W29yZGVyWzJdXX3jgIDjgIBcclxuICAgIOKRo+OAgCR7YW5zd2VyX2FycmF5W29yZGVyWzNdXX1cclxuICAgIGBcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNodWZmbGVPcmRlcigpIHtcclxuICAgIG9yZGVyID0gW107XHJcbiAgICBsZXQgbnVtID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgIG9yZGVyLnB1c2goLi4ubnVtLnNwbGljZShNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBudW0ubGVuZ3RoIC0gMSksIDEpKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgc2VsZWN0TWVudUNyZWF0ZSB9IGZyb20gXCIuL3NldC5qc1wiO1xyXG5pbXBvcnQgeyBkdXBsaWNhdGlvbkNoZWNrIH0gZnJvbSBcIi4vZHVwbGljYXRpb25DaGVjay5qc1wiO1xyXG5pbXBvcnQgeyBvbmVMaW5lRm9ybXVsYUNyZWF0ZSB9IGZyb20gXCIuL29uZUxpbmVGb3JtdWxhQ3JlYXRlLmpzXCI7XHJcbmltcG9ydCB7IGFuc3dlckNyZWF0ZSB9IGZyb20gXCIuL2Fuc3dlckNyZWF0ZS5qc1wiO1xyXG5pbXBvcnQgKiBhcyBzZSBmcm9tIFwiLi9zZS5qc1wiO1xyXG5cclxuLy/liJ3mnJ/oqK3lrppcclxuY29uc3Qgc2VsZWN0X21lbnVfYXJyYXkgPSBbXCLjgY/jgorjgZXjgYzjgorjgIDjgYLjgopcIiwgXCLvvJHilqEt4pahXCJdO1xyXG5jb25zdCBraWdvID0gXCItXCI7XHJcbmNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0XCIpO1xyXG5jb25zdCBxdWVzdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXVlc3Rpb25cIik7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RlcDA3KCkge1xyXG4gIGxldCBpbmRleCA9IFwiMFwiO1xyXG4gIHNlbGVjdE1lbnVDcmVhdGUoc2VsZWN0X21lbnVfYXJyYXkpO1xyXG4gIHF1ZXN0aW9uX2NyZWF0ZSgpO1xyXG5cclxuICAvLyDjgrvjg6zjgq/jg4jjg6Ljg7zjg4njga7kvZzmiJDjg7voqK3lrppcclxuICBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICBpbmRleCA9IHNlbGVjdC52YWx1ZTtcclxuICAgIHF1ZXN0aW9uX2NyZWF0ZSgpO1xyXG4gIH0pO1xyXG4gIC8v5ZWP6aGM5L2c5oiQ44KS6KGM44GG44Oc44K/44Oz44Gu6Kit572uXHJcbiAgcXVlc3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHF1ZXN0aW9uX2NyZWF0ZSgpKTtcclxuICAvL+WVj+mhjOS9nOaIkFxyXG4gIGZ1bmN0aW9uIHF1ZXN0aW9uX2NyZWF0ZSgpIHtcclxuICAgIGNvbnN0IGxlZnRfYXJyYXkgPSBbXTsgLy/lvI/jga7lt6bjga7lgKTjgpLmoLzntI3jgZnjgotcclxuICAgIGNvbnN0IHJpZ2h0X2FycmF5ID0gW107IC8v5byP44Gu5Y+z44Gu5YCk44KS5qC857SN44GZ44KLXHJcbiAgICBjb25zdCBhbnN3ZXJfYXJyYXkgPSBbXTsgLy/nrZTjgYjjgpLmoLzntI3jgZnjgotcclxuICAgIGNvbnN0IGNoZWNrX2FycmF5ID0gW107IC8v6YeN6KSH44KS44OB44Kn44OD44Kv44GZ44KL44Gf44KB44Gu6YWN5YiXXHJcbiAgICBzZS5zZXQuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgc2Uuc2V0LnBsYXkoKTtcclxuICAgIGxldCBhLCBiLCBhbnM7XHJcblxyXG4gICAgLy/jgZPjgZPjgavlvI/jgpLoqJjov7DjgZnjgovjgIJcclxuICAgIHdoaWxlIChjaGVja19hcnJheS5sZW5ndGggPCAyMCkge1xyXG4gICAgICBzd2l0Y2ggKGluZGV4KSB7XHJcbiAgICAgICAgY2FzZSBcIjBcIjpcclxuICAgICAgICAgIGEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5ICsgMTEpO1xyXG4gICAgICAgICAgY29uc3QgaWNoaSA9IDIwIC0gYTtcclxuICAgICAgICAgIGIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpY2hpICsgKDEwIC0gaWNoaSkpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIjFcIjpcclxuICAgICAgICAgIGEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5ICsgMTEpO1xyXG4gICAgICAgICAgYiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChhIC0gMTEpICsgMSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICAvL+mHjeikh+OBruOBquOBhOW8j+OBrue1hOWQiOOBm+OBjOW/heOBmjIw5Lul5LiK44Gr44Gq44KL44KI44GG44Gr44GZ44KL44CCXHJcblxyXG4gICAgICBhbnMgPSBhIC0gYjtcclxuICAgICAgY29uc3QgY2hlY2sgPSArKGEgKiAxMDAgKyBiKTsgLy/jg4Hjgqfjg4Pjgq/nlKjjga7lgKRcclxuICAgICAgY29uc3QgcmVzdWx0ID0gZHVwbGljYXRpb25DaGVjayhjaGVjaywgY2hlY2tfYXJyYXkpO1xyXG5cclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIGNoZWNrX2FycmF5LnB1c2goY2hlY2spO1xyXG4gICAgICAgIGxlZnRfYXJyYXkucHVzaChhKTtcclxuICAgICAgICByaWdodF9hcnJheS5wdXNoKGIpO1xyXG4gICAgICAgIGFuc3dlcl9hcnJheS5wdXNoKGFucyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIG9uZUxpbmVGb3JtdWxhQ3JlYXRlKGxlZnRfYXJyYXksIGtpZ28sIHJpZ2h0X2FycmF5LCBhbnN3ZXJfYXJyYXkpO1xyXG4gICAgYW5zd2VyQ3JlYXRlKGFuc3dlcl9hcnJheSk7XHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IGJhbmdvdSA9IFtcIuKRoFwiLCBcIuKRoVwiLCBcIuKRolwiLCBcIuKRo1wiLCBcIuKRpFwiLCBcIuKRpVwiLCBcIuKRplwiLCBcIuKRp1wiLCBcIuKRqFwiLCBcIuKRqVwiLCBcIuKRqlwiLCBcIuKRq1wiLCBcIuKRrFwiLCBcIuKRrVwiLCBcIuKRrlwiXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb2x1bW5DYWxjQ3JlYXRlMkRpZ2l0KGxlZnRfYXJyYXksIGtpZ28sIHJpZ2h0X2FycmF5LCByb3dfbGVuZ3RoKSB7XHJcbiAgY29uc3QgVEJMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJUQkxcIik7XHJcbiAgVEJMLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgaWYgKHJvd19sZW5ndGggPT09IHVuZGVmaW5lZCkgcm93X2xlbmd0aCA9IDU7XHJcbiAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMjA7IHJvdysrKSB7XHJcbiAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEyOyBjb2wrKykge1xyXG4gICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgdGQuY2xhc3NMaXN0LmFkZChcInRkXzJjb2x1bW5cIik7XHJcbiAgICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcclxuICAgIH1cclxuICAgIFRCTC5hcHBlbmRDaGlsZCh0cik7XHJcbiAgfVxyXG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHJvd19sZW5ndGg7IHJvdysrKSB7XHJcbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAzOyBjb2wrKykge1xyXG4gICAgICBUQkwucm93c1tyb3cgKiA0ICsgMV0uY2VsbHNbY29sICogNF0uaW5uZXJIVE1MID0gYmFuZ291W3JvdyAqIDMgKyBjb2xdO1xyXG4gICAgICBUQkwucm93c1tyb3cgKiA0ICsgMl0uY2VsbHNbY29sICogNF0uaW5uZXJIVE1MID0ga2lnbztcclxuICAgICAgVEJMLnJvd3Nbcm93ICogNCArIDJdLmNlbGxzW2NvbCAqIDRdLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwic29saWQgMXB4IGJsYWNrXCI7XHJcbiAgICAgIFRCTC5yb3dzW3JvdyAqIDQgKyAyXS5jZWxsc1tjb2wgKiA0ICsgMV0uc3R5bGUuYm9yZGVyQm90dG9tID0gXCJzb2xpZCAxcHggYmxhY2tcIjtcclxuICAgICAgVEJMLnJvd3Nbcm93ICogNCArIDJdLmNlbGxzW2NvbCAqIDQgKyAyXS5zdHlsZS5ib3JkZXJCb3R0b20gPSBcInNvbGlkIDFweCBibGFja1wiO1xyXG4gICAgICBpZiAocm93X2xlbmd0aCA9PT0gNCkge1xyXG4gICAgICAgIFRCTC5yb3dzW3JvdyAqIDQgKyAzXS5jZWxsc1tjb2wgKiA0ICsgM10uc3R5bGUuaGVpZ2h0ID0gXCIyMG1tXCI7XHJcbiAgICAgIH0gXHJcbiAgICAgIGlmIChyb3dfbGVuZ3RoID09PSAzKSB7XHJcbiAgICAgICAgVEJMLnJvd3Nbcm93ICogNCArIDNdLmNlbGxzW2NvbCAqIDQgKyAzXS5zdHlsZS5oZWlnaHQgPSBcIjM4bW1cIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgYSA9IGxlZnRfYXJyYXlbcm93ICogMyArIGNvbF07XHJcbiAgICAgIGNvbnN0IGIgPSByaWdodF9hcnJheVtyb3cgKiAzICsgY29sXTtcclxuXHJcbiAgICAgIGlmIChNYXRoLmZsb29yKGEgLyAxMCkgIT0gMCkgVEJMLnJvd3Nbcm93ICogNCArIDFdLmNlbGxzW2NvbCAqIDQgKyAxXS5pbm5lckhUTUwgPSBNYXRoLmZsb29yKGEgLyAxMCk7XHJcbiAgICAgIGlmIChNYXRoLmZsb29yKGIgLyAxMCkgIT0gMCkgVEJMLnJvd3Nbcm93ICogNCArIDJdLmNlbGxzW2NvbCAqIDQgKyAxXS5pbm5lckhUTUwgPSBNYXRoLmZsb29yKGIgLyAxMCk7XHJcbiAgICAgIFRCTC5yb3dzW3JvdyAqIDQgKyAxXS5jZWxsc1tjb2wgKiA0ICsgMl0uaW5uZXJIVE1MID0gYSAlIDEwO1xyXG4gICAgICBUQkwucm93c1tyb3cgKiA0ICsgMl0uY2VsbHNbY29sICogNCArIDJdLmlubmVySFRNTCA9IGIgJSAxMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbHVtbkNhbGNDcmVhdGUzRGlnaXQobGVmdF9hcnJheSwga2lnbywgcmlnaHRfYXJyYXksIHJvd19sZW5ndGgpIHtcclxuICBjb25zdCBUQkwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlRCTFwiKTtcclxuICBUQkwuaW5uZXJIVE1MID0gXCJcIjtcclxuICBpZiAocm93X2xlbmd0aCA9PT0gdW5kZWZpbmVkKSByb3dfbGVuZ3RoID0gNTtcclxuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAyMDsgcm93KyspIHtcclxuICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTU7IGNvbCsrKSB7XHJcbiAgICAgIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICB0ZC5jbGFzc0xpc3QuYWRkKFwidGRfM2NvbHVtblwiKTtcclxuICAgICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xyXG4gICAgfVxyXG4gICAgVEJMLmFwcGVuZENoaWxkKHRyKTtcclxuICB9XHJcbiAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgcm93X2xlbmd0aDsgcm93KyspIHtcclxuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDM7IGNvbCsrKSB7XHJcbiAgICAgIFRCTC5yb3dzW3JvdyAqIDQgKyAxXS5jZWxsc1tjb2wgKiA1XS5pbm5lckhUTUwgPSBiYW5nb3Vbcm93ICogMyArIGNvbF07XHJcbiAgICAgIFRCTC5yb3dzW3JvdyAqIDQgKyAyXS5jZWxsc1tjb2wgKiA1XS5pbm5lckhUTUwgPSBraWdvO1xyXG4gICAgICBUQkwucm93c1tyb3cgKiA0ICsgMl0uY2VsbHNbY29sICogNV0uc3R5bGUuYm9yZGVyQm90dG9tID0gXCJzb2xpZCAxcHggYmxhY2tcIjtcclxuICAgICAgVEJMLnJvd3Nbcm93ICogNCArIDJdLmNlbGxzW2NvbCAqIDUgKyAxXS5zdHlsZS5ib3JkZXJCb3R0b20gPSBcInNvbGlkIDFweCBibGFja1wiO1xyXG4gICAgICBUQkwucm93c1tyb3cgKiA0ICsgMl0uY2VsbHNbY29sICogNSArIDJdLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwic29saWQgMXB4IGJsYWNrXCI7XHJcbiAgICAgIFRCTC5yb3dzW3JvdyAqIDQgKyAyXS5jZWxsc1tjb2wgKiA1ICsgM10uc3R5bGUuYm9yZGVyQm90dG9tID0gXCJzb2xpZCAxcHggYmxhY2tcIjtcclxuICAgICAgaWYgKHJvd19sZW5ndGggPT09IDQpIHtcclxuICAgICAgICBUQkwucm93c1tyb3cgKiA0ICsgM10uY2VsbHNbY29sICogNSArIDNdLnN0eWxlLmhlaWdodCA9IFwiMjBtbVwiO1xyXG4gICAgICB9IGVsc2UgaWYgKHJvd19sZW5ndGggPT09IDMpIHtcclxuICAgICAgICBUQkwucm93c1tyb3cgKiA0ICsgM10uY2VsbHNbY29sICogNSArIDNdLnN0eWxlLmhlaWdodCA9IFwiMzhtbVwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBhID0gbGVmdF9hcnJheVtyb3cgKiAzICsgY29sXTtcclxuICAgICAgY29uc3QgYiA9IHJpZ2h0X2FycmF5W3JvdyAqIDMgKyBjb2xdO1xyXG5cclxuICAgICAgaWYgKE1hdGguZmxvb3IoYSAvIDEwMCkgIT0gMCkgVEJMLnJvd3Nbcm93ICogNCArIDFdLmNlbGxzW2NvbCAqIDUgKyAxXS5pbm5lckhUTUwgPSBNYXRoLmZsb29yKGEgLyAxMDApO1xyXG4gICAgICBlbHNlIFRCTC5yb3dzW3JvdyAqIDQgKyAxXS5jZWxsc1tjb2wgKiA1ICsgMV0uaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgVEJMLnJvd3Nbcm93ICogNCArIDFdLmNlbGxzW2NvbCAqIDUgKyAyXS5pbm5lckhUTUwgPSBNYXRoLmZsb29yKChhICUgMTAwKSAvIDEwKTtcclxuICAgICAgVEJMLnJvd3Nbcm93ICogNCArIDFdLmNlbGxzW2NvbCAqIDUgKyAzXS5pbm5lckhUTUwgPSAoYSAlIDEwMCkgJSAxMDtcclxuICAgICAgaWYgKE1hdGguZmxvb3IoYiAvIDEwKSAhPSAwKSBUQkwucm93c1tyb3cgKiA0ICsgMl0uY2VsbHNbY29sICogNSArIDJdLmlubmVySFRNTCA9IE1hdGguZmxvb3IoYiAvIDEwKTtcclxuICAgICAgZWxzZSBUQkwucm93c1tyb3cgKiA0ICsgMl0uY2VsbHNbY29sICogNSArIDJdLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgIFRCTC5yb3dzW3JvdyAqIDQgKyAyXS5jZWxsc1tjb2wgKiA1ICsgM10uaW5uZXJIVE1MID0gYiAlIDEwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBzZWxlY3RNZW51Q3JlYXRlIH0gZnJvbSBcIi4vc2V0LmpzXCI7XHJcbmltcG9ydCB7IGR1cGxpY2F0aW9uQ2hlY2sgfSBmcm9tIFwiLi9kdXBsaWNhdGlvbkNoZWNrLmpzXCI7XHJcbmltcG9ydCB7IGNvbHVtbkNhbGNDcmVhdGUyRGlnaXQgfSBmcm9tIFwiLi9jb2x1bW5DYWxjQ3JlYXRlLmpzXCI7XHJcbmltcG9ydCB7IGFuc3dlckNyZWF0ZSB9IGZyb20gXCIuL2Fuc3dlckNyZWF0ZS5qc1wiO1xyXG5pbXBvcnQgKiBhcyBzZSBmcm9tIFwiLi9zZS5qc1wiO1xyXG5cclxuLy/liJ3mnJ/oqK3lrppcclxuY29uc3Qgc2VsZWN0X21lbnVfYXJyYXkgPSBbXCIr44GP44KK5LiK44GM44KK44Gq44GXXCIsIFwiK+OBj+OCiuS4iuOBjOOCiuOBguOCilwiLCBcIi3jgY/jgorjgZXjgYzjgorjgarjgZdcIiwgXCIt44GP44KK44GV44GM44KK44GC44KKXCJdO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXAxMygpIHtcclxuICBsZXQgaW5kZXggPSBcIjBcIjtcclxuICBzZWxlY3RNZW51Q3JlYXRlKHNlbGVjdF9tZW51X2FycmF5KTtcclxuICBxdWVzdGlvbl9jcmVhdGUoKTtcclxuXHJcbiAgLy8g44K744Os44Kv44OI44Oi44O844OJ44Gu5L2c5oiQ44O76Kit5a6aXHJcbiAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgaW5kZXggPSBzZWxlY3QudmFsdWU7XHJcbiAgICBxdWVzdGlvbl9jcmVhdGUoKTtcclxuICB9KTtcclxuXHJcbiAgLy/llY/poYzkvZzmiJDjgpLooYzjgYbjg5zjgr/jg7Pjga7oqK3nva5cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF1ZXN0aW9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBxdWVzdGlvbl9jcmVhdGUoKSk7XHJcblxyXG4gIC8v5ZWP6aGM5L2c5oiQXHJcbiAgZnVuY3Rpb24gcXVlc3Rpb25fY3JlYXRlKCkge1xyXG4gICAgY29uc3QgbGVmdF9hcnJheSA9IFtdOyAvL+W8j+OBruW3puOBruWApOOCkuagvOe0jeOBmeOCi1xyXG4gICAgY29uc3QgcmlnaHRfYXJyYXkgPSBbXTsgLy/lvI/jga7lj7Pjga7lgKTjgpLmoLzntI3jgZnjgotcclxuICAgIGNvbnN0IGFuc3dlcl9hcnJheSA9IFtdOyAvL+etlOOBiOOCkuagvOe0jeOBmeOCi1xyXG4gICAgY29uc3QgY2hlY2tfYXJyYXkgPSBbXTsgLy/ph43opIfjgpLjg4Hjgqfjg4Pjgq/jgZnjgovjgZ/jgoHjga7phY3liJdcclxuICAgIHNlLnNldC5jdXJyZW50VGltZSA9IDA7XHJcbiAgICBzZS5zZXQucGxheSgpO1xyXG4gICAgbGV0IGEsIGIsIGFucywga2lnbztcclxuICAgIC8v44GT44GT44Gr5byP44KS6KiY6L+w44GZ44KL44CCXHJcbiAgICB3aGlsZSAoY2hlY2tfYXJyYXkubGVuZ3RoIDwgMTUpIHtcclxuICAgICAgLy/ph43opIfjga7jgarjgYTlvI/jga7ntYTlkIjjgZvjgYzlv4XjgZoxNeS7peS4iuOBq+OBquOCi+OCiOOBhuOBq+OBmeOCi+OAglxyXG5cclxuICAgICAgc3dpdGNoIChpbmRleCkge1xyXG4gICAgICAgIGNhc2UgXCIwXCI6IHtcclxuICAgICAgICAgIGNvbnN0IGExID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOCArIDEpO1xyXG4gICAgICAgICAgY29uc3QgYjEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoOSAtIGExKSArIDEpO1xyXG4gICAgICAgICAgY29uc3QgYTIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5ICsgMSk7XHJcbiAgICAgICAgICBjb25zdCBiMiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg5IC0gYTIpKTtcclxuICAgICAgICAgIGEgPSBNYXRoLmZsb29yKGExICogMTApICsgTWF0aC5mbG9vcihhMik7XHJcbiAgICAgICAgICBiID0gTWF0aC5mbG9vcihiMSAqIDEwKSArIE1hdGguZmxvb3IoYjIpO1xyXG4gICAgICAgICAgYW5zID0gTWF0aC5mbG9vcihhICsgYik7XHJcbiAgICAgICAgICBraWdvID0gXCIrXCI7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcIjFcIjoge1xyXG4gICAgICAgICAgY29uc3QgYTEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA3ICsgMSk7XHJcbiAgICAgICAgICBjb25zdCBiMSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg3IC0gYTEpICsgMSk7XHJcbiAgICAgICAgICBjb25zdCBhMiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDggKyAyKTtcclxuICAgICAgICAgIGNvbnN0IGIyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYTIgKyAoOCAtIGEyKSArIDIpO1xyXG4gICAgICAgICAgYSA9IE1hdGguZmxvb3IoYTEgKiAxMCkgKyBNYXRoLmZsb29yKGEyKTtcclxuICAgICAgICAgIGIgPSBNYXRoLmZsb29yKGIxICogMTApICsgTWF0aC5mbG9vcihiMik7XHJcbiAgICAgICAgICBhbnMgPSBNYXRoLmZsb29yKGEgKyBiKTtcclxuICAgICAgICAgIGtpZ28gPSBcIitcIjtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFwiMlwiOiB7XHJcbiAgICAgICAgICBhID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCArIDUpICogMTAgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0ICsgNSk7XHJcbiAgICAgICAgICBiID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCArIDEpICogMTAgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0ICsgMSk7XHJcbiAgICAgICAgICBhbnMgPSBhIC0gYjtcclxuICAgICAgICAgIGtpZ28gPSBcIi1cIjtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFwiM1wiOiB7XHJcbiAgICAgICAgICBhID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCArIDUpICogMTAgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0ICsgMSk7XHJcbiAgICAgICAgICBiID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCArIDEpICogMTAgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0ICsgNSk7XHJcbiAgICAgICAgICBhbnMgPSBhIC0gYjtcclxuICAgICAgICAgIGtpZ28gPSBcIi1cIjtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgY2hlY2sgPSArKGEgKiAxMDAgKyBiKTsgLy/jg4Hjgqfjg4Pjgq/nlKjjga7lgKRcclxuICAgICAgY29uc3QgcmVzdWx0ID0gZHVwbGljYXRpb25DaGVjayhjaGVjaywgY2hlY2tfYXJyYXkpO1xyXG5cclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIGNoZWNrX2FycmF5LnB1c2goY2hlY2spO1xyXG4gICAgICAgIGxlZnRfYXJyYXkucHVzaChhKTtcclxuICAgICAgICByaWdodF9hcnJheS5wdXNoKGIpO1xyXG4gICAgICAgIGFuc3dlcl9hcnJheS5wdXNoKGFucyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbHVtbkNhbGNDcmVhdGUyRGlnaXQobGVmdF9hcnJheSwga2lnbywgcmlnaHRfYXJyYXkpO1xyXG4gICAgYW5zd2VyQ3JlYXRlKGFuc3dlcl9hcnJheSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE1lbnVfc2hvdyB9IGZyb20gXCIuLzAwX21lbnUuanNcIjtcclxuXHJcbi8v44K644O844Og6Kit5a6aXHJcbmRvY3VtZW50LmJvZHkuc3R5bGUuem9vbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiem9vbVwiKS52YWx1ZSAvIDEyNTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ6b29tXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gIGRvY3VtZW50LmJvZHkuc3R5bGUuem9vbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiem9vbVwiKS52YWx1ZSAvIDEyNTtcclxufSk7XHJcblxyXG5NZW51X3Nob3coKTtcclxuc2hvd1RpbWUoKTtcclxuXHJcbi8v5pmC5Yi76Kit5a6aXHJcbmZ1bmN0aW9uIHNob3dUaW1lKCkge1xyXG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3Qgbm93WWVhciA9IG5vdy5nZXRZZWFyKCkgKyAxOTAwO1xyXG4gIGNvbnN0IG5vd01vbnRoID0gbm93LmdldE1vbnRoKCkgKyAxO1xyXG4gIGNvbnN0IG5vd0RhdGUgPSBub3cuZ2V0RGF0ZSgpO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZUFyZWFcIikuaW5uZXJIVE1MID0gYCR7bm93WWVhcn0vJHtub3dNb250aH0vJHtub3dEYXRlfWA7XHJcbn1cclxuIiwiaW1wb3J0IHsgc2VsZWN0TWVudUNyZWF0ZSB9IGZyb20gXCIuL3NldC5qc1wiO1xyXG5pbXBvcnQgeyBkdXBsaWNhdGlvbkNoZWNrIH0gZnJvbSBcIi4vZHVwbGljYXRpb25DaGVjay5qc1wiO1xyXG5pbXBvcnQgeyBjb2x1bW5DYWxjQ3JlYXRlMkRpZ2l0IH0gZnJvbSBcIi4vY29sdW1uQ2FsY0NyZWF0ZS5qc1wiO1xyXG5pbXBvcnQgeyBjb2x1bW5DYWxjQ3JlYXRlM0RpZ2l0IH0gZnJvbSBcIi4vY29sdW1uQ2FsY0NyZWF0ZS5qc1wiO1xyXG5pbXBvcnQgeyBhbnN3ZXJDcmVhdGUgfSBmcm9tIFwiLi9hbnN3ZXJDcmVhdGUuanNcIjtcclxuaW1wb3J0ICogYXMgc2UgZnJvbSBcIi4vc2UuanNcIjtcclxuXHJcbi8v5Yid5pyf6Kit5a6aXHJcbmNvbnN0IHNlbGVjdF9tZW51X2FycmF5ID0gW1wiMTAw44KS44GT44GI44KL44Gf44GX566XXCIsIFwiOTkrOTnjgb7jgadcIiwgXCIxMDDjgpLjgZPjgYjjgovlvJXjgY3nrpdcIiwgXCIx4peL4peLLeKXi+KXi1wiXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdGVwMTUoKSB7XHJcbiAgbGV0IGluZGV4ID0gXCIwXCI7XHJcbiAgc2VsZWN0TWVudUNyZWF0ZShzZWxlY3RfbWVudV9hcnJheSk7XHJcbiAgcXVlc3Rpb25fY3JlYXRlKCk7XHJcblxyXG4gIC8vIOOCu+ODrOOCr+ODiOODouODvOODieOBruS9nOaIkOODu+ioreWumlxyXG4gIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICAgIGluZGV4ID0gc2VsZWN0LnZhbHVlO1xyXG4gICAgcXVlc3Rpb25fY3JlYXRlKCk7XHJcbiAgfSk7XHJcblxyXG4gIC8v5ZWP6aGM5L2c5oiQ44KS6KGM44GG44Oc44K/44Oz44Gu6Kit572uXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdWVzdGlvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gcXVlc3Rpb25fY3JlYXRlKCkpO1xyXG5cclxuICAvL+WVj+mhjOS9nOaIkFxyXG4gIGZ1bmN0aW9uIHF1ZXN0aW9uX2NyZWF0ZSgpIHtcclxuICAgIGNvbnN0IGxlZnRfYXJyYXkgPSBbXTsgLy/lvI/jga7lt6bjga7lgKTjgpLmoLzntI3jgZnjgotcclxuICAgIGNvbnN0IHJpZ2h0X2FycmF5ID0gW107IC8v5byP44Gu5Y+z44Gu5YCk44KS5qC857SN44GZ44KLXHJcbiAgICBjb25zdCBhbnN3ZXJfYXJyYXkgPSBbXTsgLy/nrZTjgYjjgpLmoLzntI3jgZnjgotcclxuICAgIGNvbnN0IGNoZWNrX2FycmF5ID0gW107IC8v6YeN6KSH44KS44OB44Kn44OD44Kv44GZ44KL44Gf44KB44Gu6YWN5YiXXHJcbiAgICBzZS5zZXQuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgc2Uuc2V0LnBsYXkoKTtcclxuICAgIGxldCBhLCBiLCBhbnMsIGtpZ287XHJcbiAgICAvL+OBk+OBk+OBq+W8j+OCkuiomOi/sOOBmeOCi+OAglxyXG4gICAgd2hpbGUgKGNoZWNrX2FycmF5Lmxlbmd0aCA8IDE1KSB7XHJcbiAgICAgIC8v6YeN6KSH44Gu44Gq44GE5byP44Gu57WE5ZCI44Gb44GM5b+F44GaMTXku6XkuIrjgavjgarjgovjgojjgYbjgavjgZnjgovjgIJcclxuXHJcbiAgICAgIHN3aXRjaCAoaW5kZXgpIHtcclxuICAgICAgICBjYXNlIFwiMFwiOiB7XHJcbiAgICAgICAgICBhID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAgKyAxMDApO1xyXG4gICAgICAgICAgYiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChhIC0gMjApICsgMTApO1xyXG4gICAgICAgICAgYSA9IGEgLSBiO1xyXG4gICAgICAgICAgYW5zID0gTWF0aC5mbG9vcihhICsgYik7XHJcbiAgICAgICAgICBraWdvID0gXCIrXCI7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcIjFcIjoge1xyXG4gICAgICAgICAgYSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQ5ICsgNTApO1xyXG4gICAgICAgICAgYiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQ5ICsgNTApO1xyXG4gICAgICAgICAgYW5zID0gTWF0aC5mbG9vcihhICsgYik7XHJcbiAgICAgICAgICBraWdvID0gXCIrXCI7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcIjJcIjoge1xyXG4gICAgICAgICAgYSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQ5ICsgMTUwKTtcclxuICAgICAgICAgIGIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0OSArIDEpO1xyXG4gICAgICAgICAgYW5zID0gYSAtIGI7XHJcbiAgICAgICAgICBraWdvID0gXCItXCI7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcIjNcIjoge1xyXG4gICAgICAgICAgYSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkgKyAxMDApO1xyXG4gICAgICAgICAgYiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDk5ICsgMSk7XHJcbiAgICAgICAgICBhbnMgPSBhIC0gYjtcclxuICAgICAgICAgIGtpZ28gPSBcIi1cIjtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgY2hlY2sgPSArKGEgKiAxMDAwICsgYik7IC8v44OB44Kn44OD44Kv55So44Gu5YCkXHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGR1cGxpY2F0aW9uQ2hlY2soY2hlY2ssIGNoZWNrX2FycmF5KTtcclxuXHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICBjaGVja19hcnJheS5wdXNoKGNoZWNrKTtcclxuICAgICAgICBsZWZ0X2FycmF5LnB1c2goYSk7XHJcbiAgICAgICAgcmlnaHRfYXJyYXkucHVzaChiKTtcclxuICAgICAgICBhbnN3ZXJfYXJyYXkucHVzaChhbnMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb2x1bW5DYWxjQ3JlYXRlMkRpZ2l0KGxlZnRfYXJyYXksIGtpZ28sIHJpZ2h0X2FycmF5KTtcclxuICAgIHN3aXRjaCAoaW5kZXgpIHtcclxuICAgICAgY2FzZSBcIjBcIjpcclxuICAgICAgICBjb2x1bW5DYWxjQ3JlYXRlMkRpZ2l0KGxlZnRfYXJyYXksIGtpZ28sIHJpZ2h0X2FycmF5KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIjFcIjpcclxuICAgICAgICBjb2x1bW5DYWxjQ3JlYXRlMkRpZ2l0KGxlZnRfYXJyYXksIGtpZ28sIHJpZ2h0X2FycmF5KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIjJcIjpcclxuICAgICAgICBjb2x1bW5DYWxjQ3JlYXRlM0RpZ2l0KGxlZnRfYXJyYXksIGtpZ28sIHJpZ2h0X2FycmF5KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIjNcIjpcclxuICAgICAgICBjb2x1bW5DYWxjQ3JlYXRlM0RpZ2l0KGxlZnRfYXJyYXksIGtpZ28sIHJpZ2h0X2FycmF5KTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGFuc3dlckNyZWF0ZShhbnN3ZXJfYXJyYXkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBzZWxlY3RNZW51Q3JlYXRlIH0gZnJvbSBcIi4vc2V0LmpzXCI7XHJcbmltcG9ydCB7IGR1cGxpY2F0aW9uQ2hlY2sgfSBmcm9tIFwiLi9kdXBsaWNhdGlvbkNoZWNrLmpzXCI7XHJcbmltcG9ydCB7IG9uZUxpbmVGb3JtdWxhQ3JlYXRlIH0gZnJvbSBcIi4vb25lTGluZUZvcm11bGFDcmVhdGUuanNcIjtcclxuaW1wb3J0IHsgYW5zd2VyQ3JlYXRlIH0gZnJvbSBcIi4vYW5zd2VyQ3JlYXRlLmpzXCI7XHJcbmltcG9ydCAqIGFzIHNlIGZyb20gXCIuL3NlLmpzXCI7XHJcblxyXG4vL+WIneacn+ioreWumlxyXG5jb25zdCBzZWxlY3RfbWVudV9hcnJheSA9IFtcIuOBi+OBkeOBluOCkygy772eNSnjga7jgaDjgpNcIl07XHJcbmNvbnN0IGtpZ28gPSBcIsOXXCI7XHJcbmNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0XCIpO1xyXG5jb25zdCBxdWVzdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXVlc3Rpb25cIik7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RlcDE2KCkge1xyXG4gIGxldCBpbmRleCA9IFwiMFwiO1xyXG4gIHNlbGVjdE1lbnVDcmVhdGUoc2VsZWN0X21lbnVfYXJyYXkpO1xyXG4gIHF1ZXN0aW9uX2NyZWF0ZSgpO1xyXG4gIC8vIOOCu+ODrOOCr+ODiOODouODvOODieOBruS9nOaIkOODu+ioreWumlxyXG4gIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICAgIGluZGV4ID0gc2VsZWN0LnZhbHVlO1xyXG4gICAgcXVlc3Rpb25fY3JlYXRlKCk7XHJcbiAgfSk7XHJcbiAgLy/llY/poYzkvZzmiJDjgpLooYzjgYbjg5zjgr/jg7Pjga7oqK3nva5cclxuICBxdWVzdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gcXVlc3Rpb25fY3JlYXRlKCkpO1xyXG4gIC8v5ZWP6aGM5L2c5oiQXHJcbiAgZnVuY3Rpb24gcXVlc3Rpb25fY3JlYXRlKCkge1xyXG4gICAgY29uc3QgbGVmdF9hcnJheSA9IFtdOyAvL+W8j+OBruW3puOBruWApOOCkuagvOe0jeOBmeOCi1xyXG4gICAgY29uc3QgcmlnaHRfYXJyYXkgPSBbXTsgLy/lvI/jga7lj7Pjga7lgKTjgpLmoLzntI3jgZnjgotcclxuICAgIGNvbnN0IGFuc3dlcl9hcnJheSA9IFtdOyAvL+etlOOBiOOCkuagvOe0jeOBmeOCi1xyXG4gICAgY29uc3QgY2hlY2tfYXJyYXkgPSBbXTsgLy/ph43opIfjgpLjg4Hjgqfjg4Pjgq/jgZnjgovjgZ/jgoHjga7phY3liJdcclxuICAgIHNlLnNldC5jdXJyZW50VGltZSA9IDA7XHJcbiAgICBzZS5zZXQucGxheSgpO1xyXG4gICAgbGV0IGEsIGIsIGFucztcclxuXHJcbiAgICAvL+OBk+OBk+OBq+W8j+OCkuiomOi/sOOBmeOCi+OAglxyXG4gICAgd2hpbGUgKGNoZWNrX2FycmF5Lmxlbmd0aCA8IDIwKSB7XHJcbiAgICAgIC8v6YeN6KSH44Gu44Gq44GE5byP44Gu57WE5ZCI44Gb44GM5b+F44GaMjDku6XkuIrjgavjgarjgovjgojjgYbjgavjgZnjgovjgIJcclxuICAgICAgYSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQgKyAyKTtcclxuICAgICAgYiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkgKyAxKTtcclxuICAgICAgYW5zID0gYSAqIGI7XHJcblxyXG4gICAgICBjb25zdCBjaGVjayA9ICsoYSAqIDEwMCArIGIpOyAvL+ODgeOCp+ODg+OCr+eUqOOBruWApFxyXG4gICAgICBjb25zdCByZXN1bHQgPSBkdXBsaWNhdGlvbkNoZWNrKGNoZWNrLCBjaGVja19hcnJheSk7XHJcblxyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgY2hlY2tfYXJyYXkucHVzaChjaGVjayk7XHJcbiAgICAgICAgbGVmdF9hcnJheS5wdXNoKGEpO1xyXG4gICAgICAgIHJpZ2h0X2FycmF5LnB1c2goYik7XHJcbiAgICAgICAgYW5zd2VyX2FycmF5LnB1c2goYW5zKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25lTGluZUZvcm11bGFDcmVhdGUobGVmdF9hcnJheSwga2lnbywgcmlnaHRfYXJyYXksIGFuc3dlcl9hcnJheSk7XHJcbiAgICBhbnN3ZXJDcmVhdGUoYW5zd2VyX2FycmF5KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgc2VsZWN0TWVudUNyZWF0ZSB9IGZyb20gXCIuL3NldC5qc1wiO1xyXG5pbXBvcnQgeyBkdXBsaWNhdGlvbkNoZWNrIH0gZnJvbSBcIi4vZHVwbGljYXRpb25DaGVjay5qc1wiO1xyXG5pbXBvcnQgeyBvbmVMaW5lRm9ybXVsYUNyZWF0ZSB9IGZyb20gXCIuL29uZUxpbmVGb3JtdWxhQ3JlYXRlLmpzXCI7XHJcbmltcG9ydCB7IGFuc3dlckNyZWF0ZSB9IGZyb20gXCIuL2Fuc3dlckNyZWF0ZS5qc1wiO1xyXG5pbXBvcnQgKiBhcyBzZSBmcm9tIFwiLi9zZS5qc1wiO1xyXG5cclxuLy/liJ3mnJ/oqK3lrppcclxuY29uc3Qgc2VsZWN0X21lbnVfYXJyYXkgPSBbXCLjgYvjgZHjgZbjgpMoNu+9njkp44Gu44Gg44KTXCIsIFwi44GL44GR44GW44KTKDLvvZ45KeOBruOBoOOCk1wiXTtcclxuY29uc3Qga2lnbyA9IFwiw5dcIjtcclxuY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3RcIik7XHJcbmNvbnN0IHF1ZXN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdWVzdGlvblwiKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdGVwMTcoKSB7XHJcbiAgbGV0IGluZGV4ID0gXCIwXCI7XHJcbiAgc2VsZWN0TWVudUNyZWF0ZShzZWxlY3RfbWVudV9hcnJheSk7XHJcbiAgcXVlc3Rpb25fY3JlYXRlKCk7XHJcblxyXG4gIC8vIOOCu+ODrOOCr+ODiOODouODvOODieOBruS9nOaIkOODu+ioreWumlxyXG4gIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICAgIGluZGV4ID0gc2VsZWN0LnZhbHVlO1xyXG4gICAgcXVlc3Rpb25fY3JlYXRlKCk7XHJcbiAgfSk7XHJcbiAgLy/llY/poYzkvZzmiJDjgpLooYzjgYbjg5zjgr/jg7Pjga7oqK3nva5cclxuICBxdWVzdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gcXVlc3Rpb25fY3JlYXRlKCkpO1xyXG4gIC8v5ZWP6aGM5L2c5oiQXHJcbiAgZnVuY3Rpb24gcXVlc3Rpb25fY3JlYXRlKCkge1xyXG4gICAgY29uc3QgbGVmdF9hcnJheSA9IFtdOyAvL+W8j+OBruW3puOBruWApOOCkuagvOe0jeOBmeOCi1xyXG4gICAgY29uc3QgcmlnaHRfYXJyYXkgPSBbXTsgLy/lvI/jga7lj7Pjga7lgKTjgpLmoLzntI3jgZnjgotcclxuICAgIGNvbnN0IGFuc3dlcl9hcnJheSA9IFtdOyAvL+etlOOBiOOCkuagvOe0jeOBmeOCi1xyXG4gICAgY29uc3QgY2hlY2tfYXJyYXkgPSBbXTsgLy/ph43opIfjgpLjg4Hjgqfjg4Pjgq/jgZnjgovjgZ/jgoHjga7phY3liJdcclxuICAgIHNlLnNldC5jdXJyZW50VGltZSA9IDA7XHJcbiAgICBzZS5zZXQucGxheSgpO1xyXG4gICAgbGV0IGEsIGIsIGFucztcclxuICAgIFxyXG4gICAgLy/jgZPjgZPjgavlvI/jgpLoqJjov7DjgZnjgovjgIJcclxuICAgIHdoaWxlIChjaGVja19hcnJheS5sZW5ndGggPCAyMCkge1xyXG4gICAgICAvL+mHjeikh+OBruOBquOBhOW8j+OBrue1hOWQiOOBm+OBjOW/heOBmjIw5Lul5LiK44Gr44Gq44KL44KI44GG44Gr44GZ44KL44CCXHJcbiAgICAgIHN3aXRjaCAoaW5kZXgpIHtcclxuICAgICAgICBjYXNlIFwiMFwiOlxyXG4gICAgICAgICAgYSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQgKyA2KTtcclxuICAgICAgICAgIGIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5ICsgMSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiMVwiOlxyXG4gICAgICAgICAgYSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDggKyAyKTtcclxuICAgICAgICAgIGIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5ICsgMSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBhbnMgPSBhICogYjtcclxuXHJcbiAgICAgIGNvbnN0IGNoZWNrID0gKyhhICogMTAwICsgYik7IC8v44OB44Kn44OD44Kv55So44Gu5YCkXHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGR1cGxpY2F0aW9uQ2hlY2soY2hlY2ssIGNoZWNrX2FycmF5KTtcclxuXHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICBjaGVja19hcnJheS5wdXNoKGNoZWNrKTtcclxuICAgICAgICBsZWZ0X2FycmF5LnB1c2goYSk7XHJcbiAgICAgICAgcmlnaHRfYXJyYXkucHVzaChiKTtcclxuICAgICAgICBhbnN3ZXJfYXJyYXkucHVzaChhbnMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBvbmVMaW5lRm9ybXVsYUNyZWF0ZShsZWZ0X2FycmF5LCBraWdvLCByaWdodF9hcnJheSwgYW5zd2VyX2FycmF5KTtcclxuICAgIGFuc3dlckNyZWF0ZShhbnN3ZXJfYXJyYXkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBzZWxlY3RNZW51Q3JlYXRlIH0gZnJvbSBcIi4vc2V0LmpzXCI7XHJcbmltcG9ydCB7IGR1cGxpY2F0aW9uQ2hlY2sgfSBmcm9tIFwiLi9kdXBsaWNhdGlvbkNoZWNrLmpzXCI7XHJcbmltcG9ydCB7IG9uZUxpbmVGb3JtdWxhQ3JlYXRlIH0gZnJvbSBcIi4vb25lTGluZUZvcm11bGFDcmVhdGUuanNcIjtcclxuaW1wb3J0IHsgYW5zd2VyQ3JlYXRlIH0gZnJvbSBcIi4vYW5zd2VyQ3JlYXRlLmpzXCI7XHJcbmltcG9ydCAqIGFzIHNlIGZyb20gXCIuL3NlLmpzXCI7XHJcblxyXG4vL+WIneacn+ioreWumlxyXG5jb25zdCBzZWxlY3RfbWVudV9hcnJheSA9IFtcIuOCj+OCiueul+OBruOCjOOCk+OBl+OCheOBhlwiXTtcclxuY29uc3Qga2lnbyA9IFwiw7dcIjtcclxuY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3RcIik7XHJcbmNvbnN0IHF1ZXN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdWVzdGlvblwiKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdGVwMjAoKSB7XHJcbiAgbGV0IGluZGV4ID0gXCIwXCI7XHJcbiAgc2VsZWN0TWVudUNyZWF0ZShzZWxlY3RfbWVudV9hcnJheSk7XHJcbiAgcXVlc3Rpb25fY3JlYXRlKCk7XHJcblxyXG4gIC8vIOOCu+ODrOOCr+ODiOODouODvOODieOBruS9nOaIkOODu+ioreWumlxyXG4gIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICAgIGluZGV4ID0gc2VsZWN0LnZhbHVlO1xyXG4gICAgcXVlc3Rpb25fY3JlYXRlKCk7XHJcbiAgfSk7XHJcbiAgLy/llY/poYzkvZzmiJDjgpLooYzjgYbjg5zjgr/jg7Pjga7oqK3nva5cclxuICBxdWVzdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gcXVlc3Rpb25fY3JlYXRlKCkpO1xyXG4gIC8v5ZWP6aGM5L2c5oiQXHJcbiAgZnVuY3Rpb24gcXVlc3Rpb25fY3JlYXRlKCkge1xyXG4gICAgY29uc3QgbGVmdF9hcnJheSA9IFtdOyAvL+W8j+OBruW3puOBruWApOOCkuagvOe0jeOBmeOCi1xyXG4gICAgY29uc3QgcmlnaHRfYXJyYXkgPSBbXTsgLy/lvI/jga7lj7Pjga7lgKTjgpLmoLzntI3jgZnjgotcclxuICAgIGNvbnN0IGFuc3dlcl9hcnJheSA9IFtdOyAvL+etlOOBiOOCkuagvOe0jeOBmeOCi1xyXG4gICAgY29uc3QgY2hlY2tfYXJyYXkgPSBbXTsgLy/ph43opIfjgpLjg4Hjgqfjg4Pjgq/jgZnjgovjgZ/jgoHjga7phY3liJdcclxuICAgIHNlLnNldC5jdXJyZW50VGltZSA9IDA7XHJcbiAgICBzZS5zZXQucGxheSgpO1xyXG4gICAgbGV0IGEsIGIsIGFucztcclxuXHJcbiAgICAvL+OBk+OBk+OBq+W8j+OCkuiomOi/sOOBmeOCi+OAglxyXG4gICAgd2hpbGUgKGNoZWNrX2FycmF5Lmxlbmd0aCA8IDIwKSB7XHJcbiAgICAgIC8v6YeN6KSH44Gu44Gq44GE5byP44Gu57WE5ZCI44Gb44GM5b+F44GaMjDku6XkuIrjgavjgarjgovjgojjgYbjgavjgZnjgovjgIJcclxuICAgICAgYW5zID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOCArIDIpO1xyXG4gICAgICBiID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOCArIDIpO1xyXG4gICAgICBhID0gYW5zICogYjtcclxuXHJcbiAgICAgIGNvbnN0IGNoZWNrID0gKyhhICogMTAwICsgYik7IC8v44OB44Kn44OD44Kv55So44Gu5YCkXHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGR1cGxpY2F0aW9uQ2hlY2soY2hlY2ssIGNoZWNrX2FycmF5KTtcclxuXHJcbiAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICBjaGVja19hcnJheS5wdXNoKGNoZWNrKTtcclxuICAgICAgICBsZWZ0X2FycmF5LnB1c2goYSk7XHJcbiAgICAgICAgcmlnaHRfYXJyYXkucHVzaChiKTtcclxuICAgICAgICBhbnN3ZXJfYXJyYXkucHVzaChhbnMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBvbmVMaW5lRm9ybXVsYUNyZWF0ZShsZWZ0X2FycmF5LCBraWdvLCByaWdodF9hcnJheSwgYW5zd2VyX2FycmF5KTtcclxuICAgIGFuc3dlckNyZWF0ZShhbnN3ZXJfYXJyYXkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBzZWxlY3RNZW51Q3JlYXRlIH0gZnJvbSBcIi4vc2V0LmpzXCI7XHJcbmltcG9ydCB7IGR1cGxpY2F0aW9uQ2hlY2sgfSBmcm9tIFwiLi9kdXBsaWNhdGlvbkNoZWNrLmpzXCI7XHJcbmltcG9ydCB7IG9uZUxpbmVGb3JtdWxhQ3JlYXRlIH0gZnJvbSBcIi4vb25lTGluZUZvcm11bGFDcmVhdGUuanNcIjtcclxuaW1wb3J0IHsgYW5zd2VyQ3JlYXRlIH0gZnJvbSBcIi4vYW5zd2VyQ3JlYXRlLmpzXCI7XHJcbmltcG9ydCAqIGFzIHNlIGZyb20gXCIuL3NlLmpzXCI7XHJcblxyXG4vL+WIneacn+ioreWumlxyXG5jb25zdCBzZWxlY3RfbWVudV9hcnJheSA9IFtcIuOBguOBvuOCiuOBruOBguOCi+OCj+OCiueul1wiXTtcclxuY29uc3Qga2lnbyA9IFwiw7dcIjtcclxuY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3RcIik7XHJcbmNvbnN0IHF1ZXN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdWVzdGlvblwiKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdGVwMjIoKSB7XHJcbiAgbGV0IGluZGV4ID0gXCIwXCI7XHJcbiAgc2VsZWN0TWVudUNyZWF0ZShzZWxlY3RfbWVudV9hcnJheSk7XHJcbiAgcXVlc3Rpb25fY3JlYXRlKCk7XHJcbiAgY29tbWVudC5pbm5lckhUTUwgPSBcIuOBk+OBn+OBiOOBq+OBguOCi+OAjOKApuOAjeOBr+OAjOOBguOBvuOCiuOAjeOCkuihqOOBl+OBpuOBhOOBvuOBmeOAglwiO1xyXG5cclxuICAvLyDjgrvjg6zjgq/jg4jjg6Ljg7zjg4njga7kvZzmiJDjg7voqK3lrppcclxuICBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICBpbmRleCA9IHNlbGVjdC52YWx1ZTtcclxuICAgIHF1ZXN0aW9uX2NyZWF0ZSgpO1xyXG4gIH0pO1xyXG4gIC8v5ZWP6aGM5L2c5oiQ44KS6KGM44GG44Oc44K/44Oz44Gu6Kit572uXHJcbiAgcXVlc3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHF1ZXN0aW9uX2NyZWF0ZSgpKTtcclxuICAvL+WVj+mhjOS9nOaIkFxyXG4gIGZ1bmN0aW9uIHF1ZXN0aW9uX2NyZWF0ZSgpIHtcclxuICAgIGNvbnN0IGxlZnRfYXJyYXkgPSBbXTsgLy/lvI/jga7lt6bjga7lgKTjgpLmoLzntI3jgZnjgotcclxuICAgIGNvbnN0IHJpZ2h0X2FycmF5ID0gW107IC8v5byP44Gu5Y+z44Gu5YCk44KS5qC857SN44GZ44KLXHJcbiAgICBjb25zdCBhbnN3ZXJfYXJyYXkgPSBbXTsgLy/nrZTjgYjjgpLmoLzntI3jgZnjgotcclxuICAgIGNvbnN0IGNoZWNrX2FycmF5ID0gW107IC8v6YeN6KSH44KS44OB44Kn44OD44Kv44GZ44KL44Gf44KB44Gu6YWN5YiXXHJcbiAgICBzZS5zZXQuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgc2Uuc2V0LnBsYXkoKTtcclxuICAgIGxldCBhLCBiLCBhbWFyaSwgYW5zO1xyXG5cclxuICAgIC8v44GT44GT44Gr5byP44KS6KiY6L+w44GZ44KL44CCXHJcbiAgICB3aGlsZSAoY2hlY2tfYXJyYXkubGVuZ3RoIDwgMjApIHtcclxuICAgICAgLy/ph43opIfjga7jgarjgYTlvI/jga7ntYTlkIjjgZvjgYzlv4XjgZoyMOS7peS4iuOBq+OBquOCi+OCiOOBhuOBq+OBmeOCi+OAglxyXG4gICAgICBhbnMgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4ICsgMik7XHJcbiAgICAgIGIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4ICsgMik7XHJcbiAgICAgIGFtYXJpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGIgLSAxKSArIDEpO1xyXG4gICAgICBhID0gTWF0aC5mbG9vcihhbnMgKiBiICsgYW1hcmkpO1xyXG4gICAgICBjb25zdCBjaGVjayA9ICsoYSAqIDEwMCArIGIpOyAvL+ODgeOCp+ODg+OCr+eUqOOBruWApFxyXG4gICAgICBjb25zdCByZXN1bHQgPSBkdXBsaWNhdGlvbkNoZWNrKGNoZWNrLCBjaGVja19hcnJheSk7XHJcblxyXG4gICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgY2hlY2tfYXJyYXkucHVzaChjaGVjayk7XHJcbiAgICAgICAgbGVmdF9hcnJheS5wdXNoKGEpO1xyXG4gICAgICAgIHJpZ2h0X2FycmF5LnB1c2goYik7XHJcbiAgICAgICAgYW5zID0gYW5zICsgXCLigKZcIiArIGFtYXJpO1xyXG4gICAgICAgIGFuc3dlcl9hcnJheS5wdXNoKGFucyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIG9uZUxpbmVGb3JtdWxhQ3JlYXRlKGxlZnRfYXJyYXksIGtpZ28sIHJpZ2h0X2FycmF5LCBhbnN3ZXJfYXJyYXkpO1xyXG4gICAgYW5zd2VyQ3JlYXRlKGFuc3dlcl9hcnJheSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHNlbGVjdE1lbnVDcmVhdGUgfSBmcm9tIFwiLi9zZXQuanNcIjtcclxuaW1wb3J0IHsgZHVwbGljYXRpb25DaGVjayB9IGZyb20gXCIuL2R1cGxpY2F0aW9uQ2hlY2suanNcIjtcclxuaW1wb3J0IHsgY29sdW1uQ2FsY0NyZWF0ZTJEaWdpdCB9IGZyb20gXCIuL2NvbHVtbkNhbGNDcmVhdGUuanNcIjtcclxuaW1wb3J0IHsgYW5zd2VyQ3JlYXRlIH0gZnJvbSBcIi4vYW5zd2VyQ3JlYXRlLmpzXCI7XHJcbmltcG9ydCAqIGFzIHNlIGZyb20gXCIuL3NlLmpzXCI7XHJcblxyXG4vL+WIneacn+ioreWumlxyXG5jb25zdCBzZWxlY3RfbWVudV9hcnJheSA9IFtcIuOBj+OCiuS4iuOBjOOCiuOBquOBl1wiLCBcIuOBj+OCiuS4iuOBjOOCijHlm55BXCIsIFwi44GP44KK5LiK44GM44KKMeWbnkJcIiwgXCLjgY/jgorkuIrjgYzjgooy5ZueXCJdO1xyXG5jb25zdCBraWdvID0gXCLDl1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXAyMygpIHtcclxuICBsZXQgaW5kZXggPSBcIjBcIjtcclxuICBzZWxlY3RNZW51Q3JlYXRlKHNlbGVjdF9tZW51X2FycmF5KTtcclxuICBxdWVzdGlvbl9jcmVhdGUoKTtcclxuXHJcbiAgLy8g44K744Os44Kv44OI44Oi44O844OJ44Gu5L2c5oiQ44O76Kit5a6aXHJcbiAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgaW5kZXggPSBzZWxlY3QudmFsdWU7XHJcbiAgICBxdWVzdGlvbl9jcmVhdGUoKTtcclxuICB9KTtcclxuXHJcbiAgLy/llY/poYzkvZzmiJDjgpLooYzjgYbjg5zjgr/jg7Pjga7oqK3nva5cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF1ZXN0aW9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBxdWVzdGlvbl9jcmVhdGUoKSk7XHJcblxyXG4gIC8v5ZWP6aGM5L2c5oiQXHJcbiAgZnVuY3Rpb24gcXVlc3Rpb25fY3JlYXRlKCkge1xyXG4gICAgY29uc3QgbGVmdF9hcnJheSA9IFtdOyAvL+W8j+OBruW3puOBruWApOOCkuagvOe0jeOBmeOCi1xyXG4gICAgY29uc3QgcmlnaHRfYXJyYXkgPSBbXTsgLy/lvI/jga7lj7Pjga7lgKTjgpLmoLzntI3jgZnjgotcclxuICAgIGNvbnN0IGFuc3dlcl9hcnJheSA9IFtdOyAvL+etlOOBiOOCkuagvOe0jeOBmeOCi1xyXG4gICAgY29uc3QgY2hlY2tfYXJyYXkgPSBbXTsgLy/ph43opIfjgpLjg4Hjgqfjg4Pjgq/jgZnjgovjgZ/jgoHjga7phY3liJdcclxuICAgIHNlLnNldC5jdXJyZW50VGltZSA9IDA7XHJcbiAgICBzZS5zZXQucGxheSgpO1xyXG4gICAgbGV0IGEsIGIsIGMsIGFucztcclxuICAgIC8v44GT44GT44Gr5byP44KS6KiY6L+w44GZ44KL44CCXHJcbiAgICB3aGlsZSAoY2hlY2tfYXJyYXkubGVuZ3RoIDwgMTUpIHtcclxuICAgICAgLy/ph43opIfjga7jgarjgYTlvI/jga7ntYTlkIjjgZvjgYzlv4XjgZoxNeS7peS4iuOBq+OBquOCi+OCiOOBhuOBq+OBmeOCi+OAglxyXG4gICAgICBpZiAoaW5kZXggPT0gXCIwXCIpIGIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5ICsgMSk7XHJcbiAgICAgIGVsc2UgYiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDggKyAyKTtcclxuICAgICAgc3dpdGNoIChiKSB7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgYyA9IDk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICBjID0gNDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgIGMgPSAzO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgYyA9IDI7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYyA9IDE7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBzd2l0Y2ggKGluZGV4KSB7XHJcbiAgICAgICAgY2FzZSBcIjBcIjoge1xyXG4gICAgICAgICAgYSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGMgKyAxKSAqIDEwICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYyArIDEpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCIxXCI6IHtcclxuICAgICAgICAgIGEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoOSAtIGMpICsgYyArIDEpICogMTAgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjICsgMSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcIjJcIjoge1xyXG4gICAgICAgICAgYSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGMgKyAxKSAqIDEwICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDkgLSBjKSArIGMgKyAxKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFwiM1wiOiB7XHJcbiAgICAgICAgICBhID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDkgLSBjKSArIGMgKyAxKSAqIDEwICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDkgLSBjKSArIGMgKyAxKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBhbnMgPSBNYXRoLmZsb29yKGEgKiBiKTtcclxuICAgICAgY29uc3QgY2hlY2sgPSArKGEgKiAxMDAgKyBiKTsgLy/jg4Hjgqfjg4Pjgq/nlKjjga7lgKRcclxuICAgICAgY29uc3QgcmVzdWx0ID0gZHVwbGljYXRpb25DaGVjayhjaGVjaywgY2hlY2tfYXJyYXkpO1xyXG5cclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIGNoZWNrX2FycmF5LnB1c2goY2hlY2spO1xyXG4gICAgICAgIGxlZnRfYXJyYXkucHVzaChhKTtcclxuICAgICAgICByaWdodF9hcnJheS5wdXNoKGIpO1xyXG4gICAgICAgIGFuc3dlcl9hcnJheS5wdXNoKGFucyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbHVtbkNhbGNDcmVhdGUyRGlnaXQobGVmdF9hcnJheSwga2lnbywgcmlnaHRfYXJyYXkpO1xyXG4gICAgYW5zd2VyQ3JlYXRlKGFuc3dlcl9hcnJheSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHNlbGVjdE1lbnVDcmVhdGUgfSBmcm9tIFwiLi9zZXQuanNcIjtcclxuaW1wb3J0IHsgZHVwbGljYXRpb25DaGVjayB9IGZyb20gXCIuL2R1cGxpY2F0aW9uQ2hlY2suanNcIjtcclxuaW1wb3J0IHsgY29sdW1uQ2FsY0NyZWF0ZTJEaWdpdCB9IGZyb20gXCIuL2NvbHVtbkNhbGNDcmVhdGUuanNcIjtcclxuaW1wb3J0IHsgY29sdW1uQ2FsY0NyZWF0ZTNEaWdpdCB9IGZyb20gXCIuL2NvbHVtbkNhbGNDcmVhdGUuanNcIjtcclxuaW1wb3J0IHsgYW5zd2VyQ3JlYXRlIH0gZnJvbSBcIi4vYW5zd2VyQ3JlYXRlLmpzXCI7XHJcbmltcG9ydCAqIGFzIHNlIGZyb20gXCIuL3NlLmpzXCI7XHJcblxyXG4vL+WIneacn+ioreWumlxyXG5jb25zdCBzZWxlY3RfbWVudV9hcnJheSA9IFtcIjLjgZHjgZ/DlzLjgZHjgZ9cIiwgXCIz44GR44Gfw5cy44GR44GfXCJdO1xyXG5jb25zdCBraWdvID0gXCLDl1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXAyNCgpIHtcclxuICBsZXQgaW5kZXggPSBcIjBcIjtcclxuICBzZWxlY3RNZW51Q3JlYXRlKHNlbGVjdF9tZW51X2FycmF5KTtcclxuICBxdWVzdGlvbl9jcmVhdGUoKTtcclxuXHJcbiAgLy8g44K744Os44Kv44OI44Oi44O844OJ44Gu5L2c5oiQ44O76Kit5a6aXHJcbiAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgaW5kZXggPSBzZWxlY3QudmFsdWU7XHJcbiAgICBxdWVzdGlvbl9jcmVhdGUoKTtcclxuICB9KTtcclxuXHJcbiAgLy/llY/poYzkvZzmiJDjgpLooYzjgYbjg5zjgr/jg7Pjga7oqK3nva5cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF1ZXN0aW9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBxdWVzdGlvbl9jcmVhdGUoKSk7XHJcblxyXG4gIC8v5ZWP6aGM5L2c5oiQXHJcbiAgZnVuY3Rpb24gcXVlc3Rpb25fY3JlYXRlKCkge1xyXG4gICAgY29uc3QgbGVmdF9hcnJheSA9IFtdOyAvL+W8j+OBruW3puOBruWApOOCkuagvOe0jeOBmeOCi1xyXG4gICAgY29uc3QgcmlnaHRfYXJyYXkgPSBbXTsgLy/lvI/jga7lj7Pjga7lgKTjgpLmoLzntI3jgZnjgotcclxuICAgIGNvbnN0IGFuc3dlcl9hcnJheSA9IFtdOyAvL+etlOOBiOOCkuagvOe0jeOBmeOCi1xyXG4gICAgY29uc3QgY2hlY2tfYXJyYXkgPSBbXTsgLy/ph43opIfjgpLjg4Hjgqfjg4Pjgq/jgZnjgovjgZ/jgoHjga7phY3liJdcclxuICAgIHNlLnNldC5jdXJyZW50VGltZSA9IDA7XHJcbiAgICBzZS5zZXQucGxheSgpO1xyXG4gICAgbGV0IGEsIGIsIGMsIGFucztcclxuICAgIC8v44GT44GT44Gr5byP44KS6KiY6L+w44GZ44KL44CCXHJcbiAgICB3aGlsZSAoY2hlY2tfYXJyYXkubGVuZ3RoIDwgOSkge1xyXG4gICAgICAvL+mHjeikh+OBruOBquOBhOW8j+OBrue1hOWQiOOBm+OBjOW/heOBmjnku6XkuIrjgavjgarjgovjgojjgYbjgavjgZnjgovjgIJcclxuICAgICAgc3dpdGNoIChpbmRleCkge1xyXG4gICAgICAgIGNhc2UgXCIwXCI6IHtcclxuICAgICAgICAgIGEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5MCArIDEwKTtcclxuICAgICAgICAgIGIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5MCArIDEwKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFwiMVwiOiB7XHJcbiAgICAgICAgICBhID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogODg5ICsgMTAwKTtcclxuICAgICAgICAgIGIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5MCArIDEwKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBhbnMgPSBNYXRoLmZsb29yKGEgKiBiKTtcclxuICAgICAgY29uc3QgY2hlY2sgPSArKGEgKiAxMDAgKyBiKTsgLy/jg4Hjgqfjg4Pjgq/nlKjjga7lgKRcclxuICAgICAgY29uc3QgcmVzdWx0ID0gZHVwbGljYXRpb25DaGVjayhjaGVjaywgY2hlY2tfYXJyYXkpO1xyXG5cclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIGNoZWNrX2FycmF5LnB1c2goY2hlY2spO1xyXG4gICAgICAgIGxlZnRfYXJyYXkucHVzaChhKTtcclxuICAgICAgICByaWdodF9hcnJheS5wdXNoKGIpO1xyXG4gICAgICAgIGFuc3dlcl9hcnJheS5wdXNoKGFucyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHN3aXRjaCAoaW5kZXgpIHtcclxuICAgICAgY2FzZSBcIjBcIjpcclxuICAgICAgICBjb2x1bW5DYWxjQ3JlYXRlMkRpZ2l0KGxlZnRfYXJyYXksIGtpZ28sIHJpZ2h0X2FycmF5LCAzKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIjFcIjpcclxuICAgICAgICBjb2x1bW5DYWxjQ3JlYXRlM0RpZ2l0KGxlZnRfYXJyYXksIGtpZ28sIHJpZ2h0X2FycmF5LCAzKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGFuc3dlckNyZWF0ZShhbnN3ZXJfYXJyYXkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBzdGVwMDEgfSBmcm9tIFwiLi8wMV9uYW5iYW5tZS5qc1wiO1xyXG5pbXBvcnQgeyBzdGVwMDIgfSBmcm9tIFwiLi8wMl90YXN1XzEuanNcIjtcclxuaW1wb3J0IHsgc3RlcDAzIH0gZnJvbSBcIi4vMDNfaGlrdV8xLmpzXCI7XHJcbmltcG9ydCB7IHN0ZXAwNCB9IGZyb20gXCIuLzA0X25hbmppXzEuanNcIjtcclxuaW1wb3J0IHsgc3RlcDA1IH0gZnJvbSBcIi4vMDVfM3R1bm8uanNcIjtcclxuaW1wb3J0IHsgc3RlcDA2IH0gZnJvbSBcIi4vMDZfdGFzdV8yLmpzXCI7XHJcbmltcG9ydCB7IHN0ZXAwNyB9IGZyb20gXCIuLzA3X2hpa3VfMi5qc1wiO1xyXG5pbXBvcnQgeyBzdGVwMDggfSBmcm9tIFwiLi8wOF9tb25vX2hpdG8uanNcIjtcclxuaW1wb3J0IHsgc3RlcDA5IH0gZnJvbSBcIi4vMDlfbmFuamlfMi5qc1wiO1xyXG5pbXBvcnQgeyBzdGVwMTAgfSBmcm9tIFwiLi8xMF90YXN1X2hpa3UuanNcIjtcclxuaW1wb3J0IHsgc3RlcDExIH0gZnJvbSBcIi4vMTFfMTAwbWFkZS5qc1wiO1xyXG5pbXBvcnQgeyBzdGVwMTIgfSBmcm9tIFwiLi8xMl9oeW91X2dyYXBoLmpzXCI7XHJcbmltcG9ydCB7IHN0ZXAxMyB9IGZyb20gXCIuLzEzX3Rhc3VfaGlrdV9oaXNzYW4xLmpzXCI7XHJcbmltcG9ydCB7IHN0ZXAxNCB9IGZyb20gXCIuLzE0XzEwMDBtYWRlLmpzXCI7XHJcbmltcG9ydCB7IHN0ZXAxNSB9IGZyb20gXCIuLzE1X3Rhc3VfaGlrdV9oaXNzYW4yLmpzXCI7XHJcbmltcG9ydCB7IHN0ZXAxNiB9IGZyb20gXCIuLzE2X2tha2UxLmpzXCI7XHJcbmltcG9ydCB7IHN0ZXAxNyB9IGZyb20gXCIuLzE3X2tha2UyLmpzXCI7XHJcbmltcG9ydCB7IHN0ZXAxOCB9IGZyb20gXCIuLzE4XzEwMDAwbWFkZS5qc1wiO1xyXG5pbXBvcnQgeyBzdGVwMTkgfSBmcm9tIFwiLi8xOV9rYXNhX25hZ2FzYS5qc1wiO1xyXG5pbXBvcnQgeyBzdGVwMjAgfSBmcm9tIFwiLi8yMF93YXJpemFuLmpzXCI7XHJcbmltcG9ydCB7IHN0ZXAyMSB9IGZyb20gXCIuLzIxX2ppa29rdS5qc1wiO1xyXG5pbXBvcnQgeyBzdGVwMjIgfSBmcm9tIFwiLi8yMl93YXJpX2FtYXJpLmpzXCI7XHJcbmltcG9ydCB7IHN0ZXAyMyB9IGZyb20gXCIuLzIzX2tha2VfaGlzc2FuMS5qc1wiO1xyXG5pbXBvcnQgeyBzdGVwMjQgfSBmcm9tIFwiLi8yNF9rYWtlX2hpc3NhbjIuanNcIjtcclxuaW1wb3J0IHsgc3RlcDI1IH0gZnJvbSBcIi4vMjVfd2FyaV9oaXNzYW4xLmpzXCI7XHJcbmltcG9ydCB7IHN0ZXAyNiB9IGZyb20gXCIuLzI2X3dhcmlfaGlzc2FuMi5qc1wiO1xyXG5pbXBvcnQgeyBzdGVwMjcgfSBmcm9tIFwiLi8yN19zaG91c3Vfa2FrZXdhcmlfa2lzby5qc1wiO1xyXG5pbXBvcnQgeyBzdGVwMjggfSBmcm9tIFwiLi8yOF9idW5zdV9raXNvLmpzXCI7XHJcbmltcG9ydCB7IHN0ZXAyOSB9IGZyb20gXCIuLzI5X3RhaXNla2kuanNcIjtcclxuaW1wb3J0IHsgc3RlcDMwIH0gZnJvbSBcIi4vMzBfc2hvdXN1X2tha2V6YW4uanNcIjtcclxuaW1wb3J0IHsgc3RlcDMxIH0gZnJvbSBcIi4vMzFfc2hvdXN1X3dhcml6YW4uanNcIjtcclxuaW1wb3J0IHsgc3RlcDMyIH0gZnJvbSBcIi4vMzJfYnVuc3UxLmpzXCI7XHJcbmltcG9ydCB7IHN0ZXAzMyB9IGZyb20gXCIuLzMzX3RhbmlyeW91YXRhcmkuanNcIjtcclxuaW1wb3J0IHsgc3RlcDM0IH0gZnJvbSBcIi4vMzRfYnVuc3UyLmpzXCI7XHJcbmltcG9ydCB7IHN0ZXAzNSB9IGZyb20gXCIuLzM1X2hheWFzYS5qc1wiO1xyXG5pbXBvcnQgeyBzdGVwMzYgfSBmcm9tIFwiLi8zNl9tb2ppdG9zaGlraS5qc1wiO1xyXG5pbXBvcnQgeyBzdGVwMzcgfSBmcm9tIFwiLi8zN19idW5zdXVfa2FrZXphbi5qc1wiO1xyXG5pbXBvcnQgeyBzdGVwMzggfSBmcm9tIFwiLi8zOF9idW5zdXVfd2FyaXphbi5qc1wiO1xyXG5pbXBvcnQgeyBzdGVwMzkgfSBmcm9tIFwiLi8zOV9oaXJlaV9oYW5waXJlaS5qc1wiO1xyXG5cclxuY29uc3QgVElUTEUgPSBbXHJcbiAgLy8g77yR5bm055SfXHJcbiAgXCLjgarjgpPjgbDjgpPjgoFcIixcclxuICBcIuOBn+OBl+OBluOCk++8iO+8ke+8iVwiLFxyXG4gIFwi44Gy44GN44GW44KT77yI77yR77yJXCIsXHJcbiAgXCLjgarjgpPjgZjjgIDjgarjgpPjgZjjga/jgpNcIixcclxuICBcIu+8k+OBpOOBruOAgOOBi+OBmuOBruOAgOOBkeOBhOOBleOCk1wiLFxyXG4gIFwi44Gf44GX44GW44KT77yI77yS77yJXCIsXHJcbiAgXCLjgbLjgY3jgZbjgpPvvIjvvJLvvIlcIixcclxuICBcIuOCguOBruOBruOAgOOBsuOBqOOBqOOAgOOBi+OBmlwiLFxyXG4gIFwi44Gq44KT44GY44CA44Gq44KT44G344KTXCIsXHJcbiAgXCLjgZ/jgZnjga7jgYvjgarjgIDjgbLjgY/jga7jgYvjgapcIixcclxuICBcIu+8ke+8kO+8kOOBvuOBp+OBruOBi+OBmuOBruOBkeOBhOOBleOCk1wiLFxyXG4gIC8vIO+8kuW5tOeUn1xyXG4gIFwi44Gy44KH44GG44O744Kw44Op44OV44Go44CA5pmC6KiIXCIsXHJcbiAgXCLjgZ/jgZfnrpfjgajjgbLjgY3nrpfjga7jgbLjgaPnrpfvvIjvvJHvvIlcIixcclxuICBcIu+8ke+8kO+8kO+8kOOBvuOBp+OBruaVsFwiLFxyXG4gIFwi44Gf44GX566X44Go44Gy44GN566X44Gu44Gy44Gj566X77yI77yS77yJXCIsXHJcbiAgXCLjgYvjgZHnrpfvvIjvvJHvvIlcIixcclxuICBcIuOBi+OBkeeul++8iO+8ku+8iVwiLFxyXG4gIFwi77yR77yQ77yQ77yQ77yQ44G+44Gn44Gu5pWwXCIsXHJcbiAgXCLjgYvjgZXjg7vplbfjgZXjga7jgZ/jgpPjgYRcIixcclxuICAvLyDvvJPlubTnlJ9cclxuICBcIuOCj+OCiueul1wiLFxyXG4gIFwi5pmC44GT44GP44Go5pmC6ZaTXCIsXHJcbiAgXCLjgYLjgb7jgorjga7jgYLjgovjgo/jgornrpdcIixcclxuICBcIu+8keOBkeOBn+OCkuOBi+OBkeOCi+OBi+OBkeeul+OBruethueul1wiLFxyXG4gIFwi77yS44GR44Gf44KS44GL44GR44KL44GL44GR566X44Gu562G566XXCIsXHJcbiAgLy8g77yU5bm055SfXHJcbiAgXCLvvJHjgZHjgZ/jgafjgo/jgovjgo/jgornrpfjga7nrYbnrpdcIixcclxuICBcIu+8kuOBkeOBn+OBp+OCj+OCi+OCj+OCiueul+OBruethueul1wiLFxyXG4gIFwi5bCP5pWw44Gu44GL44GR566X44KE44KP44KK566XXCIsXHJcbiAgXCLliIbmlbBcIixcclxuICAvLyDvvJXlubTnlJ9cclxuICBcIuS9k+epjVwiLFxyXG4gIFwi5bCP5pWw44Gu44GL44GR566XXCIsXHJcbiAgXCLlsI/mlbDjga7jgo/jgornrpdcIixcclxuICBcIuWIhuaVsO+8iO+8ke+8iVwiLFxyXG4gIFwi5Y2Y5L2N6YeP44GC44Gf44KK44Gu5aSn44GN44GVXCIsXHJcbiAgXCLliIbmlbDvvIjvvJLvvIlcIixcclxuICBcIumAn+OBlVwiLFxyXG4gIC8vIO+8luW5tOeUn1xyXG4gIFwi5paH5a2X44Go5byPXCIsXHJcbiAgXCLliIbmlbDDl+WIhuaVsFwiLFxyXG4gIFwi5YiG5pWww7fliIbmlbBcIixcclxuICBcIuavlOS+i+OBqOWPjeavlOS+i1wiLFxyXG5dO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1lbnVfc2hvdygpIHtcclxuICAvLyBUb3Djg5rjg7zjgrjjga7jgr/jgqTjg4jjg6vooajnpLpcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlLWhlYWRlclwiKS5pbm5lckhUTUwgPSBgPGRpdiBpZD1cIm1haW5UaXRsZVwiIGNsYXNzPVwiaDIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2F0XCI+PC9pPlxyXG4gICAgICAgIOOCguOBqOOBt+OCiu+8iOOCguOBo+OBqOWtpue/kuODl+ODquODs+ODiO+8iVxyXG4gICAgICA8aSBjbGFzcz1cImZhcyBmYS1jYXRcIj48L2k+XHJcbiAgIDwvZGl2PmA7XHJcblxyXG4gIC8vIOOCs+ODs+ODhuODs+ODhOODoeODi+ODpeODvOOBruihqOekuuOAgOODoeODi+ODpeODvOOCkuOCr+ODquODg+OCr+OBmeOCi+OBqOOCs+ODs+ODhuODs+ODhOOCkuWRvOOBs+WHuuOBmeOAglxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgVElUTEUubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBidG4uY2xhc3NMaXN0LmFkZChcImJ0blwiLCBcImJ0bi1vdXRsaW5lLXByaW1hcnlcIik7XHJcbiAgICBidG4uc3R5bGUubWluV2lkdGggPSBcIjMwJVwiO1xyXG4gICAgYnRuLnN0eWxlLnRleHRBbGlnbiA9IFwibGVmdFwiO1xyXG4gICAgYnRuLmlubmVySFRNTCA9IGAke2kgKyAxfeOAgCR7VElUTEVbaV19YDtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAvL+ODmuODvOOCuOOBruS4reOCkuepuuOBq+OBmeOCi+OAglxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5UaXRsZVwiKS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRzLW1lbnVcIikuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21tZW50XCIpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgIC8v44K/44Kk44OI44Or44Gu5L2c5oiQXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGUtaGVhZGVyXCIpLmlubmVySFRNTCA9IGBcclxuICAgICAgPHRyPlxyXG4gICAgICAgIDx0ZCBpZD1cInRpdGxlXCI+JHtpICsgMX3jgIAke1RJVExFW2ldfTwvdGQ+XHJcbiAgICAgICAgPHRkIGlkPVwiZ3JhZGVcIj5cclxuICAgICAgICAgPHJ1Ynk+5ZCN5YmNIDxycD4oPC9ycD48cnQ+44Gq44G+44GIPC9ydD48cnA+KTwvcnA+PC9ydWJ5PlxyXG4gICAgICAgPC90ZD5cclxuICAgICAgPC90cj5cclxuICAgICBgO1xyXG4gICAgICBDaGFuZ2VfbWVudShpKTtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50cy1tZW51XCIpLmFwcGVuZENoaWxkKGJ0bik7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBDaGFuZ2VfbWVudShpKSB7XHJcbiAgc3dpdGNoIChpKSB7XHJcbiAgICBjYXNlIDA6XHJcbiAgICAgIHN0ZXAwMSgpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMTpcclxuICAgICAgc3RlcDAyKCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAyOlxyXG4gICAgICBzdGVwMDMoKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDM6XHJcbiAgICAgIHN0ZXAwNCgpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgNDpcclxuICAgICAgc3RlcDA1KCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSA1OlxyXG4gICAgICBzdGVwMDYoKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDY6XHJcbiAgICAgIHN0ZXAwNygpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgNzpcclxuICAgICAgc3RlcDA4KCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSA4OlxyXG4gICAgICBzdGVwMDkoKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIDk6XHJcbiAgICAgIHN0ZXAxMCgpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMTA6XHJcbiAgICAgIHN0ZXAxMSgpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMTE6XHJcbiAgICAgIHN0ZXAxMigpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMTI6XHJcbiAgICAgIHN0ZXAxMygpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMTM6XHJcbiAgICAgIHN0ZXAxNCgpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMTQ6XHJcbiAgICAgIHN0ZXAxNSgpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMTU6XHJcbiAgICAgIHN0ZXAxNigpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMTY6XHJcbiAgICAgIHN0ZXAxNygpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMTc6XHJcbiAgICAgIHN0ZXAxOCgpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMTg6XHJcbiAgICAgIHN0ZXAxOSgpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMTk6XHJcbiAgICAgIHN0ZXAyMCgpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMjA6XHJcbiAgICAgIHN0ZXAyMSgpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMjE6XHJcbiAgICAgIHN0ZXAyMigpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMjI6XHJcbiAgICAgIHN0ZXAyMygpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMjM6XHJcbiAgICAgIHN0ZXAyNCgpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMjQ6XHJcbiAgICAgIHN0ZXAyNSgpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMjU6XHJcbiAgICAgIHN0ZXAyNigpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMjY6XHJcbiAgICAgIHN0ZXAyNygpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMjc6XHJcbiAgICAgIHN0ZXAyOCgpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMjg6XHJcbiAgICAgIHN0ZXAyOSgpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMjk6XHJcbiAgICAgIHN0ZXAzMCgpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMzA6XHJcbiAgICAgIHN0ZXAzMSgpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMzE6XHJcbiAgICAgIHN0ZXAzMigpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMzI6XHJcbiAgICAgIHN0ZXAzMygpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMzM6XHJcbiAgICAgIHN0ZXAzNCgpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMzQ6XHJcbiAgICAgIHN0ZXAzNSgpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMzU6XHJcbiAgICAgIHN0ZXAzNigpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMzY6XHJcbiAgICAgIHN0ZXAzNygpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMzc6XHJcbiAgICAgIHN0ZXAzOCgpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgMzg6XHJcbiAgICAgIHN0ZXAzOSgpO1xyXG4gICAgICBicmVhaztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgc2VsZWN0TWVudUNyZWF0ZSB9IGZyb20gXCIuL3NldC5qc1wiO1xyXG5pbXBvcnQgeyBkdXBsaWNhdGlvbkNoZWNrIH0gZnJvbSBcIi4vZHVwbGljYXRpb25DaGVjay5qc1wiO1xyXG5pbXBvcnQgeyBvbmVMaW5lRm9ybXVsYUNyZWF0ZSB9IGZyb20gXCIuL29uZUxpbmVGb3JtdWxhQ3JlYXRlLmpzXCI7XHJcbmltcG9ydCAqIGFzIHNlIGZyb20gXCIuL3NlLmpzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RlcDAxKCkge1xyXG4gIGNvbnN0IEFOSU1BTFMgPSBbXCJkb2dcIiwgXCJkdWNrXCIsIFwiZnJvZ1wiLCBcImhvcnNlXCIsIFwibW9ua2V5XCIsIFwibW91c2VcIl07XHJcbiAgbGV0IG9yZGVyID0gWzAsIDEsIDIsIDMsIDQsIDVdO1xyXG4gIFRCTC5pbm5lckhUTUwgPSBgXHJcbiAgPGRpdiBjbGFzcz1cImgxXCI+44Gq44KT44Gw44KT44KB44Gn44GZ44GL44CCPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImg0IHB4LTUgcHktM1wiIHN0eWxlPVwiZGlzcGxheTpmbGV4O2JvcmRlcjpzb2xpZCAxcHggYmxhY2s7XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicHQtNFwiPuOBsuOBoOOCijwvZGl2PlxyXG4gICAgPGRpdiBpZD1cImltYWdlUGxhY2VcIj48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJwdC00XCI+44G/44GO44CAPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJoNFwiPlxyXG4gICAgICDikaDjgIA8aW1nIGlkPVwiaW1nXzFcIiBzcmM9XCIuLi9JbWFnZXMvZG9nLnBuZ1wiIGNsYXNzPVwiYW5pbWFsXCIvPuOBr+OAgeOBsuOBoOOCiuOBi+OCiTxpbnB1dCBjbGFzcz1cImlucHV0LWJveCBtdC0yXCIvPuOBsOOCk+OCgVxyXG4gICAgPC9kaXY+XHJcbiAgICA8YnIvPlxyXG4gICAgPGRpdiBjbGFzcz1cImg0XCI+XHJcbiAgICAgIOKRoeOAgDxpbWcgaWQ9XCJpbWdfMlwiIHNyYz1cIi4uL0ltYWdlcy9kb2cucG5nXCIvIGNsYXNzPVwiYW5pbWFsXCIvPuOBr+OAgeOBv+OBjuOBi+OCiTxpbnB1dCBjbGFzcz1cImlucHV0LWJveCBtdC0yXCIvPuOBsOOCk+OCgVxyXG4gICAgPC9kaXY+XHJcbiAgICA8YnIvPlxyXG4gICAgPGRpdiBjbGFzcz1cImg0XCI+XHJcbiAgICAgIOKRouOAgDxpbWcgaWQ9XCJpbWdfM1wiIHNyYz1cIi4uL0ltYWdlcy9kb2cucG5nXCIvIGNsYXNzPVwiYW5pbWFsXCIvPuOBr+OAgTxici8+XHJcbiAgICAgIOOAgOOAgOOBsuOBoOOCiuOBi+OCiTxpbnB1dCBjbGFzcz1cImlucHV0LWJveCBtdC0xXCIvPuOBsOOCk+OCgeOAgVxyXG4gICAgICDjgb/jgY7jgYvjgok8aW5wdXQgY2xhc3M9XCJpbnB1dC1ib3ggbXQtMVwiLz7jgbDjgpPjgoFcclxuICAgIDwvZGl2PlxyXG4gICAgPGJyLz5cclxuICAgIDxkaXYgY2xhc3M9XCJoNFwiPlxyXG4gICAgICDikaPjgIA8aW1nIGlkPVwiaW1nXzRcIiBzcmM9XCIuLi9JbWFnZXMvZG9nLnBuZ1wiLyBjbGFzcz1cImFuaW1hbFwiLz7jga/jgIE8YnIvPlxyXG4gICAgICDjgIDjgIDjgbLjgaDjgorjgYvjgok8aW5wdXQgY2xhc3M9XCJpbnB1dC1ib3ggbXQtMVwiLz7jgbDjgpPjgoHjgIFcclxuICAgICAg44G/44GO44GL44KJPGlucHV0IGNsYXNzPVwiaW5wdXQtYm94IG10LTFcIi8+44Gw44KT44KBXHJcbiAgICA8L2Rpdj5cclxuICAgIDxici8+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaDRcIj5cclxuICAgICAg4pGk44CAPGltZyBpZD1cImltZ181XCIgc3JjPVwiLi4vSW1hZ2VzL2RvZy5wbmdcIi8gY2xhc3M9XCJhbmltYWxcIi8+44Gv44CBPGJyLz5cclxuICAgICAg44CA44CA44Gy44Gg44KK44GL44KJPGlucHV0IGNsYXNzPVwiaW5wdXQtYm94IG10LTFcIi8+44Gw44KT44KB44CBXHJcbiAgICAgIOOBv+OBjuOBi+OCiTxpbnB1dCBjbGFzcz1cImlucHV0LWJveCBtdC0xXCIvPuOBsOOCk+OCgVxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgYDtcclxuXHJcbiAgcXVlc3Rpb25fY3JlYXRlKCk7XHJcbiAgLy/llY/poYzkvZzmiJDjgpLooYzjgYbjg5zjgr/jg7Pjga7oqK3nva5cclxuICBxdWVzdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gcXVlc3Rpb25fY3JlYXRlKCkpO1xyXG5cclxuICBmdW5jdGlvbiBxdWVzdGlvbl9jcmVhdGUoKSB7XHJcbiAgICBzaHVmZmxlT3JkZXIoKTtcclxuICAgIGNvbnN0IGFuc3dlcl9hcnJheSA9IFtdOyAvL+etlOOBiOOCkuagvOe0jeOBmeOCi1xyXG4gICAgY29uc3QgY2hlY2tfYXJyYXkgPSBbXTsgLy/ph43opIfjgpLjg4Hjgqfjg4Pjgq/jgZnjgovjgZ/jgoHjga7phY3liJdcclxuICAgIHNlLnNldC5jdXJyZW50VGltZSA9IDA7XHJcbiAgICBzZS5zZXQucGxheSgpO1xyXG4gICAgbGV0IGFucztcclxuXHJcbiAgICB3aGlsZSAoY2hlY2tfYXJyYXkubGVuZ3RoIDwgNSkge1xyXG4gICAgICAvL+mHjeikh+OBruOBquOBhOW8j+OBrue1hOWQiOOBm+OBjOW/heOBmjXku6XkuIrjgavjgarjgovjgojjgYbjgavjgZnjgovjgIJcclxuICAgICAgYW5zID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNiArIDEpO1xyXG4gICAgICBjb25zdCBjaGVjayA9IGFucztcclxuICAgICAgY29uc3QgcmVzdWx0ID0gZHVwbGljYXRpb25DaGVjayhjaGVjaywgY2hlY2tfYXJyYXkpO1xyXG5cclxuICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgIGNoZWNrX2FycmF5LnB1c2goY2hlY2spO1xyXG4gICAgICAgIGFuc3dlcl9hcnJheS5wdXNoKGFucyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhBTklNQUxTKTtcclxuICAgIGNvbnNvbGUubG9nKFwib3JkZXI9XCIgKyBvcmRlcik7XHJcbiAgICBjb25zb2xlLmxvZyhcImFuc3dlcj1cIiArIGFuc3dlcl9hcnJheSk7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWdfMVwiKS5zcmMgPSBgLi4vSW1hZ2VzLyR7QU5JTUFMU1tvcmRlclthbnN3ZXJfYXJyYXlbMF0gLSAxXV19LnBuZ2A7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltZ18yXCIpLnNyYyA9IGAuLi9JbWFnZXMvJHtBTklNQUxTW29yZGVyW2Fuc3dlcl9hcnJheVsxXSAtIDFdXX0ucG5nYDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1nXzNcIikuc3JjID0gYC4uL0ltYWdlcy8ke0FOSU1BTFNbb3JkZXJbYW5zd2VyX2FycmF5WzJdIC0gMV1dfS5wbmdgO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWdfNFwiKS5zcmMgPSBgLi4vSW1hZ2VzLyR7QU5JTUFMU1tvcmRlclthbnN3ZXJfYXJyYXlbM10gLSAxXV19LnBuZ2A7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltZ181XCIpLnNyYyA9IGAuLi9JbWFnZXMvJHtBTklNQUxTW29yZGVyW2Fuc3dlcl9hcnJheVs0XSAtIDFdXX0ucG5nYDtcclxuXHJcbiAgICBjb25zdCBhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbnN3ZXItYXJlYVwiKTtcclxuICAgIGFyZWEuaW5uZXJIVE1MID0gYFxyXG4gICAg4pGg44CA44Gy44Gg44KK44GL44KJJHthbnN3ZXJfYXJyYXlbMF1944Gw44KT44KB44CAXHJcbiAgICDikaHjgIDjgb/jgY7jgYvjgokkezcgLSBhbnN3ZXJfYXJyYXlbMV1944Gw44KT44KB44CAXHJcbiAgICDikaLjgIDjgbLjgaDjgorjgYvjgokke2Fuc3dlcl9hcnJheVsyXX3jgbDjgpPjgoFcclxuICAgIOOAgeOBv+OBjuOBi+OCiSR7NyAtIGFuc3dlcl9hcnJheVsyXX3jgbDjgpPjgoFcclxuICAgIDxici8+XHJcbiAgICDikaPjgIDjgbLjgaDjgorjgYvjgokke2Fuc3dlcl9hcnJheVszXX3jgbDjgpPjgoFcclxuICAgICDjgIHjgb/jgY7jgYvjgokkezcgLSBhbnN3ZXJfYXJyYXlbM11944Gw44KT44KB44CAXHJcbiAgICDikaTjgIDjgbLjgaDjgorjgYvjgokke2Fuc3dlcl9hcnJheVs0XX3jgbDjgpPjgoFcclxuICAgICDjgIHjgb/jgY7jgYvjgokkezcgLSBhbnN3ZXJfYXJyYXlbNF1944Gw44KT44KBXHJcbiAgICBgO1xyXG4gIH1cclxuICBmdW5jdGlvbiBzaHVmZmxlT3JkZXIoKSB7XHJcbiAgICBvcmRlciA9IFtdO1xyXG4gICAgbGV0IG51bSA9IFswLCAxLCAyLCAzLCA0LCA1XTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XHJcbiAgICAgIG9yZGVyLnB1c2goLi4ubnVtLnNwbGljZShNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBudW0ubGVuZ3RoIC0gMSksIDEpKTtcclxuICAgIH1cclxuICAgIHB1dEFuaW1hbCgpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBwdXRBbmltYWwoKSB7XHJcbiAgICBjb25zdCBpbWFnZVBsYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWFnZVBsYWNlXCIpO1xyXG4gICAgaW1hZ2VQbGFjZS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBBTklNQUxTLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgYC4uL0ltYWdlcy8ke0FOSU1BTFNbb3JkZXJbaV1dfS5wbmdgKTtcclxuICAgICAgaW1nLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYW5pbWFsXCIpO1xyXG4gICAgICBpbWFnZVBsYWNlLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBzdGVwMzkoKSB7XHJcbiAgY29uc3QgVEJMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJUQkxcIik7XHJcbiAgVEJMLmlubmVySFRNTCA9IFwiPGgxPuS9nOaIkOS4rTwvaDE+XCI7XHJcbn0iXSwibmFtZXMiOlsiZHVwbGljYXRpb25DaGVjayIsImNoZWNrIiwiY2hlY2tfYXJyYXkiLCJkdXBsaWNhdGlvbkZsYWciLCJpIiwibGVuZ3RoIiwiQXVkaW8iLCJzZXQiLCJzZWxlY3RNZW51Q3JlYXRlIiwic2VsZWN0X21lbnVfYXJyYXkiLCJzZWxlY3QiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsIm9wdGlvbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInZhbHVlIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsImJhbmdvdSIsIm9uZUxpbmVGb3JtdWxhQ3JlYXRlIiwibGVmdF9hcnJheSIsImtpZ28iLCJyaWdodF9hcnJheSIsIlRCTCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwicm93IiwidHIiLCJjb2wiLCJ0ZCIsImNsYXNzTGlzdCIsImFkZCIsInJvd3MiLCJjZWxscyIsImFuc3dlckNyZWF0ZSIsImFuc3dlcl9hcnJheSIsImFyZWEiLCJkaXYiLCJ3aWR0aCIsInF1ZXN0aW9uIiwidGV4dF8xYSIsInRleHRfMWIiLCJ0ZXh0XzJhIiwidGV4dF8yYiIsInRleHRfMmMiLCJ0ZXh0XzNhIiwidGV4dF8zYiIsInRleHRfNGEiLCJ0ZXh0XzVhIiwidGV4dF82YSIsImNvbHVtbkNhbGNDcmVhdGUyRGlnaXQiLCJyb3dfbGVuZ3RoIiwidW5kZWZpbmVkIiwiYm9yZGVyQm90dG9tIiwiaGVpZ2h0IiwiYSIsImIiLCJNYXRoIiwiZmxvb3IiLCJjb2x1bW5DYWxjQ3JlYXRlM0RpZ2l0Iiwibm93Iiwibm93WWVhciIsIm5vd01vbnRoIiwibm93RGF0ZSIsIlRJVExFIiwiYm9keSIsInpvb20iLCJhZGRFdmVudExpc3RlbmVyIiwiYnRuIiwibWluV2lkdGgiLCJ0ZXh0QWxpZ24iLCJBTklNQUxTIiwib3JkZXIiLCJxdWVzdGlvbl9jcmVhdGUiLCJudW0iLCJwdXNoIiwic3BsaWNlIiwicmFuZG9tIiwiaW1hZ2VQbGFjZSIsImltZyIsInNldEF0dHJpYnV0ZSIsInB1dEFuaW1hbCIsInNodWZmbGVPcmRlciIsImFucyIsInNlIiwiY29uc29sZSIsImxvZyIsInNyYyIsInN0ZXAwMSIsInN0ZXAwMiIsInN0ZXAwMyIsImluZGV4IiwiYyIsImtpZ28xIiwia2lnbzIiLCJraWdvMV9hcnJheSIsIm1pZF9hcnJheSIsImtpZ28yX2FycmF5IiwibWluIiwib25lTGluZTNGb3JtdWxhQ3JlYXRlIiwic3RlcDA1Iiwic3RlcDA2IiwiaWNoaSIsInN0ZXAwNyIsImtpZ29fYXJyYXkiLCJ0YW5pX2FycmF5IiwiY291bnQiLCJURVhUIiwic3RlcDEwIiwiYTEiLCJiMSIsImEyIiwiYjIiLCJzdGVwMTMiLCJzdGVwMTUiLCJzdGVwMTYiLCJzdGVwMTciLCJzdGVwMjAiLCJhbWFyaSIsImNvbW1lbnQiLCJzdGVwMjIiLCJzdGVwMjMiLCJzdGVwMjQiLCJDaGFuZ2VfbWVudSIsIk1lbnVfc2hvdyIsIkRhdGUiLCJnZXRZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==
