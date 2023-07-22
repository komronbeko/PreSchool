const { model, Schema } = require("mongoose");

const schema = new Schema(
  {
    exam_name: {
      type: String,
      required: true,
    },
    clas: {
      type: Number,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    fees: {
      type: String,
      required: true,
    },
    start_time: {
      type: String,
      required: true,
    },
    end_time: {
      type: String,
      required: true,
    },
    exam_date: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("ExamList", schema);
