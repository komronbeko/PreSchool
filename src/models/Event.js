const { model, Schema } = require("mongoose");

const schema = new Schema(
  {
    event_id: {
      type: Number,
      required: true,
    },
    event_name: {
      type: String,
      required: true,
    },
    event_date: {
      type:String,
      required: true,
    },
    start_time: {
      type: String,
      required: true,
    },

  },
  {
    timestamps: true,
  }
);

module.exports = model("Event", schema);
