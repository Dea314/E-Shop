// products from backend to mongodb
const products = [
  {
    name: "Lenovo Comp1 Name Product1",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 5,
    price: 100,
    category: "Computers/Laptops/Lenovo",
    images: [
      { path: "/img/ebooks-category.png" },
      { path: "/img/books-category.png" },
      { path: "/img/toys-category.png" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [{ key: "color", value: "blue" }],
  },
  {
    name: "Lenovo Comp2 Name Product2",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 5,
    price: 100,
    category: "Computers/Laptops/Lenovo",
    images: [
      { path: "/img/books-category.png" },
      { path: "/img/toys-category.png" },
      { path: "/img/ebooks-category.png" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "black" },
      { key: "RAM", value: "1 TB" },
    ],
  },
  {
    name: "Dell Comp Name Product3 ",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 5,
    price: 100,
    category: "Computers/Laptops/Dell",
    images: [
      { path: "/img/cams-category.png" },
      { path: "/img/ebooks-category.png" },
      { path: "/img/ebooks-category.png" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "black" },
      { key: "RAM", value: "1 TB" },
    ],
  },
  {
    name: "Tablet Name Product4 ",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 5,
    price: 100,
    category: "Tablets",
    images: [
      { path: "/img/games-category.png" },
      { path: "/img/electronics-category.png" },
      { path: "/img/toys-category.png" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
  },
  {
    name: "Tablet Name Product5",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 10,
    price: 200,
    category: "Tablets",
    images: [
      { path: "/img/eboos-category.png" },
      { path: "/img/games-category.png" },
      { path: "/img/toys-category.png" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
  },
  {
    name: "Tablet Name Product6",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 15,
    price: 300,
    category: "Tablets",
    images: [
      { path: "/img/toys-category.png" },
      { path: "/img/camss-category.png" },
      { path: "/img/games-category.png" },
    ],
    rating: 4,
    reviewsNumber: 7,
    reviews: [],
  },
  {
    name: "Tablet Name Product7",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 20,
    price: 400,
    category: "Tablets",
    images: [
      { path: "/img/games-category.png" },
      { path: "/img/cams-category.png" },
      { path: "/img/toys-category.png" },
    ],
    rating: 4,
    reviewsNumber: 8,
    reviews: [],
  },
  {
    name: "Tablet Name Product8",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 25,
    price: 500,
    category: "Tablets",
    images: [
      { path: "/img/ebooks-category.png" },
      { path: "/img/games-category.png" },
      { path: "/img/cams-category.png" },
    ],
    rating: 3,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Monitor Name Product9",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 5,
    price: 100,
    category: "Monitors",
    images: [
      { path: "/img/games-category.png" },
      { path: "/img/book-category.png" },
      { path: "/img/toys-category.png" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
  },
  {
    name: "Monitor Name Product10",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 10,
    price: 200,
    category: "Monitors",
    images: [
      { path: "/imgs/toys-category.png" },
      { path: "/imgs/cams-category.png" },
      { path: "/img/electronics-category.png" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
  },
  {
    name: "Monitor Name Product11",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 15,
    price: 300,
    category: "Monitors",
    images: [
      { path: "/img/toys-category.png" },
      { path: "/img/ebooks-category.png" },
      { path: "/img/games-category.png" },
    ],
    rating: 4,
    reviewsNumber: 7,
    reviews: [],
  },
  {
    name: "Monitor Name Product12",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 20,
    price: 400,
    category: "Monitors",
    images: [
      { path: "/img/cams-category.png" },
      { path: "/img/books-category.png" },
      { path: "/img/toys-category.png" },
    ],
    rating: 4,
    reviewsNumber: 8,
    reviews: [],
  },
  {
    name: "Monitor Name Product13",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 25,
    price: 500,
    category: "Monitors",
    images: [
      { path: "/img/book-category.png" },
      { path: "/img/games-category.png" },
      { path: "/img/toys-category.png" },
    ],
    rating: 3,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Game Name Product14",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 5,
    price: 100,
    category: "Games",
    images: [
      { path: "/img/games-category.png" },
      { path: "/img/ebooks-category.png" },
      { path: "/img/cams-category.png" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
  },
  {
    name: "Game Name Product15",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 10,
    price: 200,
    category: "Games",
    images: [
      { path: "/img/electronics-category.png" },
      { path: "/img/games-category.png" },
      { path: "/img/books-category.png" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
  },
  {
    name: "Game Name Product16",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 15,
    price: 300,
    category: "Games",
    images: [
      { path: "/img/cams-category.png" },
      { path: "/img/books-category.png" },
      { path: "/img/games-category.png" },
    ],
    rating: 4,
    reviewsNumber: 7,
    reviews: [],
  },
  {
    name: "Game Name Product17",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 20,
    price: 400,
    category: "Games",
    images: [
      { path: "/img/games-category.png" },
      { path: "/img/ebooks-category.png" },
      { path: "/img/toys-category.png" },
    ],
    rating: 4,
    reviewsNumber: 8,
    reviews: [],
  },
  {
    name: "Game Name Product18",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 25,
    price: 500,
    category: "Games",
    images: [
      { path: "/img/cams-category.png" },
      { path: "/imge/games-category.png" },
      { path: "/img/electronics-category.png" },
    ],
    rating: 3,
    reviewsNumber: 9,
    reviews: [],
  },
];

module.exports = products;
