import { Menu_show } from "./00_menu.js";

//ズーム設定
document.body.style.zoom = 100 / 125;
console.log("test");
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
