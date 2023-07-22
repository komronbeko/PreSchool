const { model, Schema } = require("mongoose");

const schema = new Schema(
  {
    holiday_id: {
      type: Number,
      required: true,
      unique: true,
    },
    holiday_name: {
      type: String,
      required: true,
    },
    type_holiday: {
      type: String,
      required: true,
    },
    start_date: {
      type: String,
      required: true,
    },
    end_date: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Holiday", schema);
