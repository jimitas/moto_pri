// 教科書の問題例文を参照にする。

export function step10() {
  let a = 6;
  let b = 5;
  const text1a = `
  こどもが　${a}人　あそんでいました。<br/>
  そこへ、　${b}人　やってきました。<br/>
  みんなで　なん人になりましたか。
  `;
  const text1b = `
  こどもが　${a}人　あそんでいました。<br/>
  ${b}人　かえっていきました。<br/>
  のこりは　なん人になりましたか。
  `;
  const text2a = `
  あかい　かさが　${a}本，　<br/>
  きいろい　かさが、　${b}本　あります。<br/>
  かさは　ぜんぶで　なん本　ですか。
  `;
  const text2b = `
  あかい　かさが　${a}本，　<br/>
  きいろい　かさが、　${b}本　あります。<br/>
  あかい　かさは、きいろい　かさより、なん本　おおいですか。
  `;
  console.log(text1a);
  console.log(text1b);
  console.log(text2a);
  console.log(text2b);
}
