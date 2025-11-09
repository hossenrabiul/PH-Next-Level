const insertionSorting = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      let tmp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = tmp;

      let k = i;
      while (k > 0 && arr[k - 1] > arr[k]) {
        let tmp = arr[k - 1];
        arr[k - 1] = arr[k];
        arr[k] = tmp;
        k--;
      }
    }
  }

  return arr;
};
let arr = [5, 3, 8,4,2 ];
console.log(insertionSorting(arr));
