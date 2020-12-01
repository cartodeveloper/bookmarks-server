const uuid = require("uuid/v4");
const bookmarks = [
  {
    id: uuid(),
    title: "MevysPro",
    url: "https://www.mevyspro.com",
    description: "Hair Professional Systems",
    rating: 5,
  },
  {
    id: uuid(),
    title: "Google",
    url: "https://www.google.com",
    description: "MyBFF",
    rating: 4,
  },
  {
    id: uuid(),
    title: "YOUTUBE",
    url: "https://www.youtube.com",
    description: "The perfect place to learn",
    rating: 5,
  },
];

module.exports = { bookmarks };
