const express = require("express");

const {sendATweet } = require("../controllers/twitterController");

const twitterRouter = express.Router();

twitterRouter.post('/tweetIt', sendATweet);

module.exports = {
  twitterRoutes: twitterRouter,
};
