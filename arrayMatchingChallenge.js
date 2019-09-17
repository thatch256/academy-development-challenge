function ArrayMatching(strArr) {
  let str1 = strArr[0];
  let str2 = strArr[1];
  let result = [];

  str1 = str1
    .replace(/[\[\]]/g, "")
    .split(", ")
    .map(Number);

  str2 = str2
    .replace(/[\[\]]/g, "")
    .split(", ")
    .map(Number);

  let longArray = str1.length > str2.length ? str1 : str2;
  let shortArray = str1.length <= str2.length ? str1 : str2;

  for (let i = 0; i < longArray.length; i += 1) {
    if (shortArray[i]) {
      let add = shortArray[i] + longArray[i];
      result.push(add);
    } else {
      result.push(longArray[i]);
    }
  }

  return result.join("-");
}

console.log(ArrayMatching(["[1, 2, 1]", "[2, 1, 5, 2]"]))
