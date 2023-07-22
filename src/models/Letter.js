const { Schema, model, default: mongoose } = require("mongoose")


const schema = new Schema({
    from: {
        type: String,
        required: true,
        lowercase: true,
    },
    to: {
        type: String,
        required: true,
        lowercase: true
    },
    Cc: {
        type: String,
    },
    Bcc: {
        type: String,
    },
    subject: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true
    },
    important: {
        type: Boolean,
        default: false
    },
    readed: {
        type: Boolean,
        default: false
    },
    trash: {
        type: Boolean,
        default: false
    },
    arrchived: {
        type: Boolean,
        default: false
    },
    inTrash: {
        type: Boolean,
        default: false
    },
    user_id: {
      type: String,
      required: true  
    },
    replied: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Letter",
        default: null
    }
}, {timestamps: true})

module.exports = model("Letter", schema);
