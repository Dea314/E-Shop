// categories from database
const categories = [
  {
    name: "Cameras digital",
    description:
      "Cameras - Designed to match your passion for photography, our new cameras feature all the latest imaging innovations, thanks to our on-going, industry-leading investment in research and development.",
    image: "/images/cams-category.png",
  },
  {
    name: "Cameras/Canon",
    description:
      "Cameras/Canon - Compact, light and small, our interchangeable lens mirrorless cameras distil the best of Canon compacts and DSLRs to deliver superb quality photos and movies. They range from APS-C models with smaller lenses to full-frame powerhouses where creativity is at the core.",
    image: "/images/cams.png",
  },
  {
    name: "Cameras/Leica",
    description:
      "Cameras/Leica - With the Leica you have the choice to express your creativity uncompromisingly, precisely and passionately. Combined with the new Leica Vario-Elmarit-SL 24-70 f/2.8 ASPH. for photos and videos in legendary picture quality and for even more exciting changes of perspective.",
    image: "/images/leica.png",
  },

  {
    name: "Tablets",
    description:
      "Tablets - Games, internet, and multimedia - shop the latest tablets. Many use a tablet every day in their free time and at work for viewing presentations, video-conferencing, reading e-books, watching movies, sharing photos, and more",
    image: "/images/electronics-category.png",
    attrs: [
      { key: "RAM", value: ["1 TB", "2 TB", "4 TB"] },
      { key: "color", value: ["blue", "red", "silver", "black"] },
    ],
  },

  {
    name: "Games",
    description:
      "Games - From competitive shooters to sprawling MMOs and relaxing puzzle games, here are the best PC games to play right now.",
    image: "/images/games-category.png",
  },

  {
    name: "eBooks",
    description:
      "eBooks - Discover the advantages of digital reading with our eBooks, eBook readers & apps. Secure top offers now! We're happy to help you find what's right for you. ",
    image: "/images/ebooks-category.png",
    attrs: [{ key: "genre", value: ["fiction", "novels", "art"] }],
  },

  {
    name: "Books",
    description:
      "Books - Looking for your new favourite book? Browse some of our top categories such as Children's Books, Fiction, Graphic Novels, Anime & Manga, Food & Drink, Crafts & Hobbies, Art & Photography, Biography, and Crime & Thriller. ",
    image: "/images/books-category.png",
    attrs: [{ key: "genre", value: ["fiction", "novels", "art"] }],
  },
  {
    name: "Toys",
    description:
      "Toys - Discover the huge selection of toys and games here in our online shop. Age-appropriate toys for babies, children, and teenagers can be found in the toy guide.",
    image: "/images/toys-category.png",
  },
];

module.exports = categories;
