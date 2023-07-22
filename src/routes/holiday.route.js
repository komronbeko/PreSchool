const { Router } = require("express");
const {createHolidays,getHolidays, getHolidaysShow, getHolidaysPagination, editHolidays, deleteHolidays} = require("../controllers/holiday.controller");
const route = new Router();
route.post("/post/holiday", createHolidays);
route.get("/get/holiday", getHolidays);
route.get("/get/holiday/show", getHolidaysShow);
route.get("/get/holiday/pagination", getHolidaysPagination);
route.put("/put/holiday/:id", editHolidays);
route.delete("/delete/holiday/:id", deleteHolidays);

module.exports = route;
