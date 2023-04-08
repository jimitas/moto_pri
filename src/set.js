const bangou = ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩", "⑪", "⑫", "⑬", "⑭", "⑮", "⑯", "⑰", "⑱", "⑲", "⑳"];

//セレクトメニューの作成
export function selectMenuCreate(select_menu_array) {
  if (select_menu_array.length > 1) {
    select.style.backgroundColor = "pink";
  } else {
    select.style.backgroundColor = "none";
  }
  for (let i = 0; i < select_menu_array.length; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = select_menu_array[i];
    select.appendChild(option);
  }
}

//表の作成
export function TBL_A_create(kigo) {
  TBL.innerHTML = "";
  for (let row = 0; row < 10; row++) {
    const tr = document.createElement("tr");
    for (let col = 0; col < 10; col++) {
      const td = document.createElement("td");
      td.classList.add("td_oneLine");
      tr.appendChild(td);
    }
    TBL.appendChild(tr);
  }
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 2; col++) {
      TBL.rows[row].cells[col * 5].innerHTML = bangou[col * 10 + row];
      TBL.rows[row].cells[col * 5 + 2].innerHTML = kigo;
      TBL.rows[row].cells[col * 5 + 4].innerHTML = "=";
    }
  }
}

export function TBL_B_create(kigo) {
  TBL.innerHTML = "";
  for (let row = 0; row < 20; row++) {
    const tr = document.createElement("tr");
    for (let col = 0; col < 12; col++) {
      const td = document.createElement("td");
      td.classList.add("td_2column");
      tr.appendChild(td);
    }
    TBL.appendChild(tr);
  }
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 3; col++) {
      TBL.rows[row * 4 + 1].cells[col * 4].innerHTML = bangou[row * 3 + col];
      TBL.rows[row * 4 + 2].cells[col * 4].innerHTML = kigo;
      TBL.rows[row * 4 + 2].cells[col * 4].style.borderBottom = "solid 1px black";
      TBL.rows[row * 4 + 2].cells[col * 4 + 1].style.borderBottom = "solid 1px black";
      TBL.rows[row * 4 + 2].cells[col * 4 + 2].style.borderBottom = "solid 1px black";
    }
  }
}

export function TBL_C_create(kigo) {
  TBL.innerHTML = "";
  for (let row = 0; row < 20; row++) {
    const tr = document.createElement("tr");
    for (let col = 0; col < 15; col++) {
      const td = document.createElement("td");
      td.classList.add("td_3column");
      tr.appendChild(td);
    }
    TBL.appendChild(tr);
  }
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 3; col++) {
      TBL.rows[row * 4 + 1].cells[col * 5].innerHTML = bangou[row * 3 + col];
      TBL.rows[row * 4 + 2].cells[col * 5].innerHTML = kigo;
      TBL.rows[row * 4 + 2].cells[col * 5].style.borderBottom = "solid 1px black";
      TBL.rows[row * 4 + 2].cells[col * 5 + 1].style.borderBottom = "solid 1px black";
      TBL.rows[row * 4 + 2].cells[col * 5 + 2].style.borderBottom = "solid 1px black";
      TBL.rows[row * 4 + 2].cells[col * 5 + 3].style.borderBottom = "solid 1px black";
    }
  }
}

//解答セット
export function Answer_A_create(kaitou) {
  const bangou = ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩", "⑪", "⑫", "⑬", "⑭", "⑮", "⑯", "⑰", "⑱", "⑲", "⑳"];
  document.getElementById("answer-area").innerHTML = "";

  for (let row = 0; row < 2; row++) {
    const tr = document.createElement("tr");
    for (let col = 0; col < 10; col++) {
      const td = document.createElement("td");
      if (row == 0) {
        td.innerHTML = bangou[row * 10 + col] + "　" + kaitou[col * 2] + "　";
      } else {
        td.innerHTML = bangou[row * 10 + col] + "　" + kaitou[col * 2 + 1] + "　";
      }
      tr.appendChild(td);
    }
    document.getElementById("answer-area").appendChild(tr);
  }
}
export function Answer_B_create(kaitou) {
  const bangou = ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩", "⑪", "⑫", "⑬", "⑭", "⑮"];
  document.getElementById("answer-area").innerHTML = "";

  for (let row = 0; row < 2; row++) {
    const tr = document.createElement("tr");
    for (let col = 0; col < 8; col++) {
      const td = document.createElement("td");
      if (row == 0) {
        td.innerHTML = bangou[row * 8 + col] + "　" + kaitou[row * 8 + col] + "　";
      } else {
        if (col < 7) {
          td.innerHTML = bangou[row * 8 + col] + "　" + kaitou[row * 8 + col] + "　";
        }
      }
      tr.appendChild(td);
    }
    document.getElementById("answer-area").appendChild(tr);
  }
}
