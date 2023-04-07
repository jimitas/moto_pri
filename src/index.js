import { Menu_show } from "./00_menu.js";

//ズーム設定
document.body.style.zoom = document.getElementById("zoom").value / 125;
document.getElementById("zoom").addEventListener("change", () => {
  document.body.style.zoom = document.getElementById("zoom").value / 125;
});

Menu_show();
showTime();

//時刻設定
function showTime() {
  const now = new Date();
  const nowYear = now.getYear() + 1900;
  const nowMonth = now.getMonth() + 1;
  const nowDate = now.getDate();
  document.getElementById("dateArea").innerHTML = `${nowYear}/${nowMonth}/${nowDate}`;
}
