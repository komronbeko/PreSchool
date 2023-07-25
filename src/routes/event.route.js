const { Router } = require("express");
const {createEvents,getEvents, getEventsShow,getEventsPagination, editEvents, deleteEvents} = require("../controllers/event.controller");
const route = new Router();
route.post("/post/event", createEvents);
route.get("/get/event", getEvents);
route.put("/edit/event/:id", editEvents);
route.delete("/delete/event/:id", deleteEvents)
 
module.exports = route;
