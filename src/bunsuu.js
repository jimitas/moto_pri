const number = ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩", "⑪", "⑫", "⑬", "⑭", "⑮", "⑯", "⑰", "⑱", "⑲", "⑳"];
const fugou = ["ア", "イ", "ウ", "エ"];

// 「ア」～「エ」の記号を追加
export function addLabel(index) {
  const label = document.createElement("div");
  label.classList.add("improper_fraction");
  label.textContent = fugou[index];
  return label;
}
// 番号を追加
export function addNumber(index) {
  const label = document.createElement("div");
  label.classList.add("improper_fraction");
  label.textContent = number[index];
  return label;
}

// 帯分数を追加
export function addCompoundNumber(taibunsuValue) {
  // 帯分数を生成
  const compoundNumber = document.createElement("div");
  compoundNumber.classList.add("improper_fraction");
  compoundNumber.textContent = taibunsuValue;
  return compoundNumber;
}

// 分数を生成する関数
export function generatingFractions(bunshiValue, bunboValue) {
  // 分子を生成
  const numerator = document.createElement("span");
  numerator.classList.add("numerator");
  numerator.textContent = bunshiValue;
  // 分母を生成
  const denominator = document.createElement("span");
  denominator.classList.add("denominator");
  denominator.textContent = bunboValue;
  // 分子と分母を一つにまとめる。
  const fractionWrapper = document.createElement("div");
  fractionWrapper.appendChild(numerator);
  fractionWrapper.appendChild(denominator);
  return fractionWrapper;
}

// 約分する
export function reduceFraction(numerator, denominator) {
  // 分子と分母の最大公約数を求める
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const commonDivisor = gcd(numerator, denominator);

  // 分子と分母を最大公約数で割ることで約分する
  const reducedNumerator = numerator / commonDivisor;
  const reducedDenominator = denominator / commonDivisor;

  // 約分後の分母・分子を返す
  return [reducedNumerator, reducedDenominator];
}

//足し算する(約分はしない)
export function bunsuAdd(bunshiValue, bunboValue, bunshiValue_2, bunboValue_2) {
  const resultNumerator = Math.floor(bunshiValue * bunboValue_2 + bunshiValue_2 * bunboValue);
  const resultDenominator = bunboValue * bunboValue_2;

  // 分母・分子を返す
  return [resultNumerator, resultDenominator];
}

//引き算する(約分はしない)
export function bunsuMinus(bunshiValue, bunboValue, bunshiValue_2, bunboValue_2) {
  const resultNumerator = bunshiValue * bunboValue_2 - bunshiValue_2 * bunboValue;
  const resultDenominator = bunboValue * bunboValue_2;

  // 分母・分子を返す
  return [resultNumerator, resultDenominator];
}

//分数のかけ算
export function bunsuMultiplication(
  taibunsuValue,
  bunshiValue,
  bunboValue,
  taibunsuValue_2,
  bunshiValue_2,
  bunboValue_2
) {
  // 帯分数を仮分数に直しておく
  bunshiValue = taibunsuValue * bunboValue + bunshiValue;
  bunshiValue_2 = taibunsuValue_2 * bunboValue_2 + bunshiValue_2;
  // 計算する
  const resultNumerator = bunshiValue * bunshiValue_2;
  const resultDenominator = bunboValue * bunboValue_2;
  // 約分する
  const [bunshi_result, bunbo_result] = reduceFraction(resultNumerator, resultDenominator);
  // 分母・分子を返す
  return [bunshi_result, bunbo_result];
}

//分数のわり算
export function bunsuDivision(
  taibunsuValue,
  bunshiValue,
  bunboValue,
  taibunsuValue_2,
  bunshiValue_2,
  bunboValue_2
) {
  // 帯分数を仮分数に直しておく
  bunshiValue = taibunsuValue * bunboValue + bunshiValue;
  bunshiValue_2 = taibunsuValue_2 * bunboValue_2 + bunshiValue_2;
  // 計算する
  const resultNumerator = bunshiValue * bunboValue_2;
  const resultDenominator = bunboValue * bunshiValue_2;
  // 約分する
  const [bunshi_result, bunbo_result] = reduceFraction(resultNumerator, resultDenominator);
  // 分母・分子を返す
  return [bunshi_result, bunbo_result];
}

//分数式を生成する関数
export function createFractionFormula(
  taibunsuValue,
  bunshiValue,
  bunboValue,
  taibunsuValue_2,
  bunshiValue_2,
  bunboValue_2,
  bango,
  kigo
) {
  // 分数の大枠生成
  const fraction = document.createElement("div");
  fraction.classList.add("d-flex", "fraction");
  // 番号を追加
  const label = addNumber(bango);
  fraction.appendChild(label);
  //帯分数(左)の作成(帯分数が０の場合は除く)
  if (taibunsuValue > 0) {
    const compaundNumber = addCompoundNumber(taibunsuValue);
    fraction.appendChild(compaundNumber);
  }
  //分数(左)の作成(分子=0の場合は除く)
  if (bunshiValue !== 0) {
    const fractionWrapper = generatingFractions(bunshiValue, bunboValue);
    fraction.appendChild(fractionWrapper);
  }
  // 符号を作成
  const kigoElm = document.createElement("div");
  kigoElm.classList.add("improper_fraction");
  kigoElm.textContent = kigo;
  fraction.appendChild(kigoElm);
  //帯分数(右)の作成(帯分数が０の場合は除く)
  if (taibunsuValue_2 > 0) {
    const compaundNumber = addCompoundNumber(taibunsuValue_2);
    fraction.appendChild(compaundNumber);
  }
  //分数(左)の作成(分子=0の場合は除く)
  if (bunshiValue_2 !== 0) {
    const fractionWrapper_2 = generatingFractions(bunshiValue_2, bunboValue_2);
    fraction.appendChild(fractionWrapper_2);
  }
  // イコールの作成
  const equal = document.createElement("div");
  equal.classList.add("improper_fraction");
  equal.textContent = "＝　　　";
  fraction.appendChild(equal);

  //分数式を返却
  return fraction;
}
