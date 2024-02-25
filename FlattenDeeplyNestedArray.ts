type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (
  arr: MultiDimensionalArray,
  n: number
): MultiDimensionalArray {
  let depth = -1;
  let strArray = JSON.stringify(arr);
  console.log(strArray)
  let str = "";
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] === "[") {
      depth++;
    }
    if (strArray[i] === "]") {
      depth--;
    }

    if (depth > 0 && depth <= n && strArray[i] === "[") {
      continue;
    } else if (depth >= 0 && depth < n && strArray[i] === "]") continue;
    str = str.concat(strArray[i]);
  }
  try {
    return JSON.parse(str);
  }
  catch {

      return [];
    }
};

const arr = [[],[],[],[],[],[],[],[],[],[]];

console.log(flat(arr, 2));
