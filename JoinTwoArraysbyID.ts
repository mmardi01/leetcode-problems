type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type ArrayType = { id: number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
  const arr3: ArrayType[] = [];
  arr1.sort((a, b) => a.id - b.id);
  arr2.sort((a, b) => a.id - b.id);
  for (let i = 0, j = 0; i < arr1.length || j < arr2.length; ) {
    if (arr1[i] && arr2[j] && arr1[i].id === arr2[j].id)
        arr3.push({...arr1[i++], ...arr2[j++]});
    else if (arr1[i] && arr2[j] && (arr1[i].id <= arr2[j].id))
        arr3.push(arr1[i++]);
    else if (arr1[i] && arr2[j] && (arr1[i].id >= arr2[j].id))
        arr3.push(arr2[j++]);
    else if (arr1[i] && !arr2[j])
        arr3.push(arr1[i++]);
    else 
        arr3.push(arr2[j++]);

  }
  return arr3;
}

const arr1 = [
    { id: 1, x: 2, y: 3 },
    { id: 2, x: 3, y: 6 },
  ],
  arr2 = [
    { id: 2, x: 10, y: 20 },
    { id: 3, x: 0, y: 0 },
  ];
console.log(join(arr1, arr2));
