// 問題の重複をチェックする
export function duplicationCheck(check, check_array) {
  let duplicationFlag = false;
  for (let i = 0; i < check_array.length; i++) {
    if (check_array[i] === check) {
      duplicationFlag = true;
    }
  }
  // もしも重複がなかったら格納する。
  if (!duplicationFlag) {
    return true;
  } else return false;
}
