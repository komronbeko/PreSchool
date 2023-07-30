const fileUpload = require('../middlewares/fileUpload');
const { getGroup, postGroup, putGroup, getGroupOne } = require('../controllers/group.controller');

const router = require('express').Router();

router.get("/api/group", getGroup);
router.get("/api/group/one/:id", getGroupOne);
router.post("/api/group/create", fileUpload, postGroup);
router.put("/api/group/edit/:id", fileUpload, putGroup);


module.exports = router;