/**
 * 山脉的个数
 * 穷举即可
 */

/**
 * @param{number[]} arr
 * @return {number}
 */
const validMountainCount = function (arr) {
  let result = 0;
  const arrLen = arr.length;
  for (let i = 0; i < arrLen; i++) {
    if (
      (i === 0 && arr[i] > arr[i + 1]) ||
      (i === arrLen - 1 && arr[i] > arr[i - 1])
    ) {
      result++;
    } else if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      result++;
    }
  }
  console.log(result);
};

const arr1 = [0, 1, 2, 3, 2, 4];
const arr2 = [3, 0, 3, 4, 1];
const arr3 = [0, 1, 4, 3, 1, 0, 0, 1, 2, 3, 1, 2, 1, 0];
validMountainCount(arr1);
validMountainCount(arr2);
validMountainCount(arr3);
