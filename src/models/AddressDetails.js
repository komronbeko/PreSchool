const { model, Schema } = require("mongoose");

const schema = new Schema(
  {
    address_line_1: {
      type: String

    },
    address_line_2: {
      type: String

    },
    city : {
      type: String

    },
    state : {
      type: String
    },
    postal_code : {
      type: String
    },
    country:{
      type: String
    }
  },
  {
    timestamps: true,
  }
);

module.exports = model("AddressDetails", schema);
