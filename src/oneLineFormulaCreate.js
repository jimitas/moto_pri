const bangou = ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩", "⑪", "⑫", "⑬", "⑭", "⑮", "⑯", "⑰", "⑱", "⑲", "⑳"];

export function oneLineFormulaCreate(left_array, kigo, right_array) {
  const TBL = document.getElementById("TBL");
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
      TBL.rows[row].cells[col * 5 + 1].innerHTML = left_array[col * 10 + row];
      TBL.rows[row].cells[col * 5 + 2].innerHTML = kigo;
      TBL.rows[row].cells[col * 5 + 3].innerHTML = right_array[col * 10 + row];
      TBL.rows[row].cells[col * 5 + 4].innerHTML = "=";
    }
  }
}
