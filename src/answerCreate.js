const bangou = ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩", "⑪", "⑫", "⑬", "⑭", "⑮", "⑯", "⑰", "⑱", "⑲", "⑳"];

export function answerCreate(answer_array) {
  const area = document.getElementById("answer-area");
  area.innerHTML = "";
  for (let i = 0; i < answer_array.length; i++) {
    const div = document.createElement("div");
    div.style.width = "10%";
    div.innerHTML = `${bangou[i]}　${answer_array[i]}`;
    area.appendChild(div);
  }
}
