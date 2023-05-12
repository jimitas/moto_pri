const bangou = ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩", "⑪", "⑫", "⑬", "⑭", "⑮", "⑯", "⑰", "⑱", "⑲", "⑳"];

export function answerCreate(answer_array) {
  const area = document.getElementById("answer-area");
  area.innerHTML = "";
  for (let i = 0; i < answer_array.length; i++) {
    const div = document.createElement("div");
    const len = Math.floor(answer_array.length / 2 + 0.5);
    const width = 100 / len;
    div.style.width = width + "%";
    div.style.display = "flex";
    div.innerHTML = `${bangou[i]}　${answer_array[i]}`;
    area.appendChild(div);
  }
}
