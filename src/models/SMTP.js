const { model, Schema } = require("mongoose");

const schema = new Schema(
  {
    email_from_address: {
      type: String

    },
    email_password: {
      type: String

    },
    email_host : {
      type: String

    },
    email_port : {
      type: Number,
    },

  },
  {
    timestamps: true,
  }
);

module.exports = model("SMTP", schema);
