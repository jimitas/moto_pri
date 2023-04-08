const bangou = ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩", "⑪", "⑫", "⑬", "⑭", "⑮"];

export function columnCalcCreate2Digit(left_array, kigo, right_array) {
  const TBL = document.getElementById("TBL");
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

      const a = left_array[col * 5 + row];
      const b = right_array[col * 5 + row];

      if (Math.floor(a / 10) != 0) TBL.rows[row * 4 + 1].cells[col * 4 + 1].innerHTML = Math.floor(a / 10);
      if (Math.floor(b / 10) != 0) TBL.rows[row * 4 + 2].cells[col * 4 + 1].innerHTML = Math.floor(b / 10);
      TBL.rows[row * 4 + 1].cells[col * 4 + 2].innerHTML = a % 10;
      TBL.rows[row * 4 + 2].cells[col * 4 + 2].innerHTML = b % 10;
    }
  }
}
export function columnCalcCreate3Digit(left_array, kigo, right_array) {
  const TBL = document.getElementById("TBL");
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

      const a = left_array[col * 5 + row];
      const b = right_array[col * 5 + row];
      if (Math.floor(a / 100) != 0) TBL.rows[row * 4 + 1].cells[col * 5 + 1].innerHTML = Math.floor(a / 100);
      else TBL.rows[row * 4 + 1].cells[col * 5 + 1].innerHTML = "";
      TBL.rows[row * 4 + 1].cells[col * 5 + 2].innerHTML = Math.floor((a % 100) / 10);
      TBL.rows[row * 4 + 1].cells[col * 5 + 3].innerHTML = (a % 100) % 10;
      if (Math.floor(b / 10) != 0) TBL.rows[row * 4 + 2].cells[col * 5 + 2].innerHTML = Math.floor(b / 10);
      else TBL.rows[row * 4 + 2].cells[col * 5 + 2].innerHTML = "";
      TBL.rows[row * 4 + 2].cells[col * 5 + 3].innerHTML = b % 10;
    }
  }
}
