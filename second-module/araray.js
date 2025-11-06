const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    rating: 4.5,
    price: 120,
  },
  {
    id: 2,
    name: "Running Shoes",
    category: "Sports",
    rating: 4.2,
    price: 85,
  },
  {
    id: 3,
    name: "Smartwatch",
    category: "Electronics",
    rating: 4.7,
    price: 150,
  },
  {
    id: 4,
    name: "Coffee Maker",
    category: "Appliances",
    rating: 4.3,
    price: 95,
  },
  {
    id: 5,
    name: "Gaming Mouse",
    category: "Electronics",
    rating: 4.6,
    price: 60,
  },
  {
    id: 6,
    name: "Desk Lamp",
    category: "Home Decor",
    rating: 4.1,
    price: 40,
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    category: "Audio",
    rating: 4.4,
    price: 75,
  },
  {
    id: 8,
    name: "Leather Wallet",
    category: "Fashion",
    rating: 4.0,
    price: 50,
  },
  {
    id: 9,
    name: "Electric Kettle",
    category: "Kitchen",
    rating: 4.3,
    price: 55,
  },
  {
    id: 10,
    name: "Yoga Mat",
    category: "Fitness",
    rating: 4.5,
    price: 35,
  },
];

const filterTopElectronics = products
  .filter((item) => item.category === "Electronics")
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 3)
  .map((item) => ({ name: item.name }));
console.log(filterTopElectronics);




