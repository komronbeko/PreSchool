const Admins = require("../models/Admin")
const Teachers = require("../models/Teacher")
const Students = require("../models/Student")


const currentUser = async (req, res, next) => {
    const data = req.verified;
    const user = await Admins.findById(data.id) || await Teachers.findById(data.id) || await Students.findById(data.id)
    req.user = user
    next()
  };
  
  module.exports = currentUser;
  