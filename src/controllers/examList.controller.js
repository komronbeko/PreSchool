const ExamLists = require("../models/ExamList");

// GET
exports.getExamLists = async (_, res) => {
  const client = await ExamLists.find();
  res.status(200).json(client);
};

// GURUPPIROFKA
exports.getExamListsShow = async (req, res) => {
  const limit = req.query.limit
const client = await ExamLists.find().skip(0).limit(limit);
res.status(200).json(client);
};
// PAGINATION
exports.getExamListsPagination = async (req, res) => {
  const skip = req.query.skip
  const limit = req.query.limit
const client = await ExamLists.find().skip(skip).limit(limit);
res.status(200).json(client);
};

// POST
exports.createExamLists = async (req, res) => {
  const { exam_name, clas, subject,fees ,start_time,end_time,exam_date} = req.body;
  // console.log( ExamLists);
  console.log(exam_date);

  await ExamLists.create({
    exam_name, clas, subject,fees ,start_time,end_time,exam_date
  });

  res.status(201).json({ message: "Successfully create ExamLists" });
};

// EDIT
exports.editExamLists = async (req, res) => {
  const {exam_name, clas, subject,fees ,start_time,end_time,exam_date} = req.body;
  const { id } = req.params   ;

  await ExamLists.findByIdAndUpdate(id, {
    $set: {
        exam_name, clas, subject,fees ,start_time,end_time,exam_date
    },
  });

  res.status(201).json({ message: "Successfully Updated ExamLists" });
};

// DELETE
exports.deleteExamLists = async (req, res) => {
  const { id } = req.params;

  await ExamLists.findByIdAndDelete(id);

  res.status(202).json({ message: "Successfully Deleted ExamLists" });
};
