type valType = string | number | boolean;

const formatValue = (value: valType): valType => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    if (value === true) {
      return false;
    }
    return true;
  }
};

const getLength = (value: string | number[]): number => {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value.length;
  }
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
    // return { Name: this.name, Age: this.age };
  }
}


type bookDetails = {
  title: string;
  rating: number;
};

const filterByRating = (items: bookDetails[]): bookDetails[] => {
  const filteredValue = items.filter((item) => item.rating >= 4);
  return filteredValue;
};

type usersInfo = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (users: usersInfo[]): usersInfo[] => {
  const activeUsers = users.filter((user) => user.isActive === true);
  return activeUsers;
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (bookInfo: Book) => {
  console.log(
    `Title: ${bookInfo.title}, Author: ${bookInfo.author}, Published: ${
      bookInfo.publishedYear
    }, isAvailable: ${bookInfo.isAvailable === true ? "Yes" : "No"}`
  );
};

type array = number[] | string[];

const getUniqueValues = (firstArray: array, secondArray: array): number[] => {
  let newArray: number[] = [];
  // console.log(firstArray, secondArray)
  const firstNumArray = firstArray.map((val) =>
    typeof val === "string" ? parseInt(val) : val
  );
  const seecondNumArray = secondArray.map((val) =>
    typeof val === "string" ? parseInt(val) : val
  );

  // console.log(firstNumArray, " ", seecondNumArray);

  firstNumArray.forEach((val) => newArray.push(val));
  seecondNumArray.forEach((val) => newArray.push(val));

  const sortedArray = newArray.sort();
  let ans: number[] = [];
  const len = sortedArray.length;
  let l = 0;
  while (l < len) {
    ans.push(sortedArray[l]);
    while (l < len - 1 && sortedArray[l] === sortedArray[l + 1]) {
      l++;
    }
    l++;
  }

  return ans;
};

type productDetails = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};
const calculateTotalPrice = (product: productDetails[]) => {
     
   const totalPrice = product.reduce((total, item) => {
        const sumOfProduct = item.price * item.quantity
        if(item.discount){
          const discount = sumOfProduct * (item.discount / 100)
          const mainPrice = sumOfProduct - discount
          total += mainPrice
        }else{
          total += sumOfProduct
        }
        return total;
   }, 0)

   return totalPrice
};


