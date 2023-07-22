const { Router } = require("express");

const {createExamLists,getExamLists,getExamListsShow,getExamListsPagination, editExamLists, deleteExamLists} = require("../controllers/examList.controller");

const route = new Router();

route.post("/post/exemlist", createExamLists);
route.get("/get/exemlist", getExamLists);
route.get("/get/exemlist/show", getExamListsShow);
route.get("/get/exemlist/pagination", getExamListsPagination);
route.put("/put/exemlist/:id", editExamLists);
route.delete("/delete/exemlist/:id", deleteExamLists);



module.exports = route;
