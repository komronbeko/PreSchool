const Holidays = require("../models/Holiday");

// GET
exports.getHolidays = async (_, res) => {
  const client = await Holidays.find();
  res.status(200).json(client);
};
// GURUPPROPKA
exports.getHolidaysShow = async (req, res) => {
  const limit = req.query.limit
const client = await Holidays.find().skip(0).limit(limit);
res.status(200).json(client);
};
// PAGINATION
exports.getHolidaysPagination = async (req, res) => {
  const skip = req.query.skip
  const limit = req.query.limit
const client = await Holidays.find().skip(skip).limit(limit);
res.status(200).json(client);
};



// POST
exports.createHolidays = async (req, res) => {
  const { holiday_id, holiday_name, type_holiday,start_date ,end_date} = req.body;
  console.log( Holidays);

  await Holidays.create({
    holiday_id, holiday_name, type_holiday,start_date ,end_date
  });

  res.status(201).json({ message: "Successfully create Holidays" });
};
// EDIT
exports.editHolidays = async (req, res) => {
  const {holiday_id, holiday_name, type_holiday,start_date ,end_date } = req.body;
  const { id } = req.params   ;

  await Holidays.findByIdAndUpdate(id, {
    $set: {
        holiday_id, holiday_name, type_holiday,start_date ,end_date
    },
  });

  res.status(201).json({ message: "Successfully Updated Holidays" });
};

// DELETE
exports.deleteHolidays = async (req, res) => {
  const { id } = req.params;

  await Holidays.findByIdAndDelete(id);

  res.status(200).json({ message: "Successfully Deleted Holidays" });
};
