/**
 * 数据单元的变量替换
 */

const main = (inputStr) => {
  const result = inputStr.split(",");
  // 使用A,B,C等作为Key去初始化个Map
  let map = {};
  for (let i = 0; i < result.length; i++) {
    map[String.fromCharCode("A".charCodeAt() + i)] = result[i];
  }
  let resultArr = [];
  for (let i = 0; i < result.length; i++) {
    let leftIndex = result[i].indexOf("<");
    let rightIndex = result[i].indexOf(">");
    if (leftIndex === -1 && rightIndex === -1) {
      resultArr.push(result[i]);
    } else if (leftIndex === -1 || rightIndex === -1) {
      console.log(-1);
      return;
    } else if (leftIndex > rightIndex || rightIndex - leftIndex !== 2) {
      console.log(-1);
      return;
    } else {
      let resultStr = "";
      resultStr += result[i].substring(0, leftIndex);
      resultStr += map[result[i].substring(leftIndex + 1, rightIndex)];
      resultStr += result[i].substring(rightIndex + 1);
      resultArr.push(resultStr);
    }
  }
  console.log(resultArr.join(","));
};
const test = "<B>12,12,23<B>";
main(test);
