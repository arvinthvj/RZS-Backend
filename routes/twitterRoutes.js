const express = require("express");

const {sendATweet, deleteATweetById } = require("../controllers/twitterController");

const twitterRouter = express.Router();

twitterRouter.post('/tweetIt', sendATweet);
twitterRouter.delete('/deleteById/:id', deleteATweetById);

module.exports = {
  twitterRoutes: twitterRouter,
};
