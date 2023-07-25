const { model, Schema } = require("mongoose");

const schema = new Schema(
  {
    email_from_address: {
      type: String

    },
    email_password: {
      type: String

    },
    emails_from_name : {
      type: String

    }
  },
  {
    timestamps: true,
  }
);

module.exports = model("PHPMail", schema);
