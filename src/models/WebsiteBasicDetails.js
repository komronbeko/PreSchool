const { model, Schema } = require("mongoose");

const schema = new Schema(
  {
    website_name: {
      type: String

    },
    logo: {
      type: String

    },
    favicon : {
      type: String

    },
    RTL : {
      type: Boolean
    }
  },
  {
    timestamps: true,
  }
);

module.exports = model("WebsiteBasicDetails", schema);
