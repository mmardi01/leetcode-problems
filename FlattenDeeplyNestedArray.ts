type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (
  arr: MultiDimensionalArray,
  n: number
): MultiDimensionalArray {
  let splited : string  = JSON.stringify(arr)
  let res : string[] = [];
  let depth = -1;
  console.log(splited)
  for(let i = 0; i < splited.length; i++) {
    if (splited[i] === ',')
      continue;
    if (splited[i] === '[')
      depth++;
    if (splited[i] === ']')
      depth--;
    if (splited[i] === '[' && depth > 0 && depth <= n)
      continue;
    if (splited[i] === ']' && depth > -1 &&  depth  < n) {

    }
  }

  // console.log(JSON.parse(res.join(''))) 
  return [];
};

const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];

console.log(flat(arr, 1));
