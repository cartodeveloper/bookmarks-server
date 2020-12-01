const express = require("express");
const uuid = require("uuid/v4");
const logger = require("./logger");

const bookmarksRouter = express.Router();
const bodyParser = express.json();

bookmarksRouter
  .route("/bookmarks")
  .get((req, res) => {
    res.json(bookmarks);
  })
  .post(bodyParser, (req, res) => {
    for (const field of ["title", "url", "rating"]) {
      if (!req.body[field]) {
        logger.error(`${field} is required`);
        return res.status(400).send(`${field} is required`);
      }
    }

    const { title, url, description, rating } = req.body;

    const bookmark = { id: uuid(), title, url, description, rating };

    bookmarks.push(bookmark);

    logger.info(`Bookmark with id ${bookmark.id} created`);
    res
      .status(201)
      .location(`http://localhost:8000/bookmarks/${bookmark.id}`)
      .json(bookmark);
  });
module.exports = bookmarksRouter;
