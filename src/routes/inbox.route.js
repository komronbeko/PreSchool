const { Router } = require("express");
const { AllMessages, newMessage, deleteMessage, message, markRead, markUnRead, searchMessages, fowardMessage, replyMessage } = require("../controllers/inbox.controller");
const isAuth = require("../middlewares/isAuth")
const currentUser = require("../middlewares/currentUser");
const route = new Router();

route.get("/messages", isAuth, currentUser,AllMessages)
route.post("/messages/new", isAuth, currentUser, newMessage)
route.delete("/messages/trash/:id", isAuth, currentUser, deleteMessage)
route.get("/message/:id", isAuth, currentUser, message)
route.post("/messages/readed/", isAuth, currentUser, markRead)
route.post("/messages/unreaded/", isAuth, currentUser, markUnRead)
route.get("/messages/search", isAuth, currentUser, searchMessages)
route.put("/messages/foward/:id", isAuth, currentUser, fowardMessage)
route.put("/messages/reply/:id", isAuth, currentUser, replyMessage)

module.exports = route;