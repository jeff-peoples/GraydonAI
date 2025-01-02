const express = require("express");
const {
  getAdminMessage,
  getProtectedMessage,
  getPublicMessage,
  getChatCompletion
} = require("./messages.service");
const { validateAccessToken } = require("../middleware/auth0.middleware.js");

const messagesRouter = express.Router();

messagesRouter.get("/public", (req, res) => {
  const message = getPublicMessage();

  res.status(200).json(message);
});

messagesRouter.get("/protected", validateAccessToken, (req, res) => {
  const message = getProtectedMessage(req);

  res.status(200).json(message);
});

messagesRouter.post("/getchatcompletion", validateAccessToken, async (req, res) => {
  const message = await getChatCompletion(req);

  res.status(200).json(message);
});

messagesRouter.get("/admin", validateAccessToken, (req, res) => {
  const message = getAdminMessage();

  res.status(200).json(message);
});

module.exports = { messagesRouter };
