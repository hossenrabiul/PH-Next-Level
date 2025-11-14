const arrNum: number[] = [1, 3, 4, 5];

const arrWithStr: string[] = arrNum.map((num) => num.toString());

type areaNum = {
  width: number;
  height: number;
};

type areaBol = {
  [key in "width" | "height"]: boolean;
};


// type areaStr = {
//   [key in keyof areaNum]: string;
// };

type area<T> = {
  [key in keyof T]: T[key]
};

const area : area<{width : string, height : number}> = {
    width : "500",
    height : 4545,
}

console.log(area);
