const { model, Schema } = require("mongoose");

const schema = new Schema(
  {
    time_zone: {
      type: String

    },
    date_format: {
      type: String

    },
    time_format : {
      type: String

    },
    surrency_symbol : {
      type: String
    }
  },
  {
    timestamps: true,
  }
);

module.exports = model("LocalizationDetails", schema);
