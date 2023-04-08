const bangou = ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩", "⑪", "⑫", "⑬", "⑭", "⑮"];

export function columnCalcCreate2Digit(left_array, kigo, right_array, row_length) {
  const TBL = document.getElementById("TBL");
  TBL.innerHTML = "";
  if (row_length === undefined) row_length = 5;
  for (let row = 0; row < 20; row++) {
    const tr = document.createElement("tr");
    for (let col = 0; col < 12; col++) {
      const td = document.createElement("td");
      td.classList.add("td_2column");
      tr.appendChild(td);
    }
    TBL.appendChild(tr);
  }
  for (let row = 0; row < row_length; row++) {
    for (let col = 0; col < 3; col++) {
      TBL.rows[row * 4 + 1].cells[col * 4].innerHTML = bangou[row * 3 + col];
      TBL.rows[row * 4 + 2].cells[col * 4].innerHTML = kigo;
      TBL.rows[row * 4 + 2].cells[col * 4].style.borderBottom = "solid 1px black";
      TBL.rows[row * 4 + 2].cells[col * 4 + 1].style.borderBottom = "solid 1px black";
      TBL.rows[row * 4 + 2].cells[col * 4 + 2].style.borderBottom = "solid 1px black";
      if (row_length === 4) {
        TBL.rows[row * 4 + 3].cells[col * 4 + 3].style.height = "20mm";
      } 
      if (row_length === 3) {
        TBL.rows[row * 4 + 3].cells[col * 4 + 3].style.height = "38mm";
      }

      const a = left_array[row * 3 + col];
      const b = right_array[row * 3 + col];

      if (Math.floor(a / 10) != 0) TBL.rows[row * 4 + 1].cells[col * 4 + 1].innerHTML = Math.floor(a / 10);
      if (Math.floor(b / 10) != 0) TBL.rows[row * 4 + 2].cells[col * 4 + 1].innerHTML = Math.floor(b / 10);
      TBL.rows[row * 4 + 1].cells[col * 4 + 2].innerHTML = a % 10;
      TBL.rows[row * 4 + 2].cells[col * 4 + 2].innerHTML = b % 10;
    }
  }
}
export function columnCalcCreate3Digit(left_array, kigo, right_array, row_length) {
  const TBL = document.getElementById("TBL");
  TBL.innerHTML = "";
  if (row_length === undefined) row_length = 5;
  for (let row = 0; row < 20; row++) {
    const tr = document.createElement("tr");
    for (let col = 0; col < 15; col++) {
      const td = document.createElement("td");
      td.classList.add("td_3column");
      tr.appendChild(td);
    }
    TBL.appendChild(tr);
  }
  for (let row = 0; row < row_length; row++) {
    for (let col = 0; col < 3; col++) {
      TBL.rows[row * 4 + 1].cells[col * 5].innerHTML = bangou[row * 3 + col];
      TBL.rows[row * 4 + 2].cells[col * 5].innerHTML = kigo;
      TBL.rows[row * 4 + 2].cells[col * 5].style.borderBottom = "solid 1px black";
      TBL.rows[row * 4 + 2].cells[col * 5 + 1].style.borderBottom = "solid 1px black";
      TBL.rows[row * 4 + 2].cells[col * 5 + 2].style.borderBottom = "solid 1px black";
      TBL.rows[row * 4 + 2].cells[col * 5 + 3].style.borderBottom = "solid 1px black";
      if (row_length === 4) {
        TBL.rows[row * 4 + 3].cells[col * 5 + 3].style.height = "20mm";
      } else if (row_length === 3) {
        TBL.rows[row * 4 + 3].cells[col * 5 + 3].style.height = "38mm";
      }

      const a = left_array[row * 3 + col];
      const b = right_array[row * 3 + col];

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
