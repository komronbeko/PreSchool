const Joi = require("joi")
const Letters = require("../models/Letter")

exports.AllMessages = async(req,res) => {
    const {start,limit,select} = req.query
    const {_id : id, email} = req.user
    let letters = null
    if (select === "all") {
        letters = await Letters.find({to: email, inTrash: false})  
    }
    else if(select === "important") {
        letters = await Letters.find({to: email, important: true, inTrash: false})
    }
    else if(select === "readed") {
        letters = await Letters.find({to: email, readed: true, inTrash: false})
    }
    else if(select === "trash") {
        letters = await Letters.find({user_id: id, inTrash: true})
    }
    else if(select === "draft") {
        letters = await Letters.find({user_id: id, inTrash: false})
    }
    else if(select === "noreaded") {
        letters = await Letters.find({to: email, readed: false, inTrash: false})
    }
    else if(select === "sent") {
        letters = await Letters.find({user_id: id, inTrash: false}).skip((start - 1) * limit).limit(limit)
    }
    res.status(200).json(letters)
}

exports.searchMessages = async(req,res) => {
    Letters.createIndexes({subject: "text"})
    const {value} = req.query
    const messages = await Letters.find({
        "$or": [
            {subject: {$regex: value}}
        ]
    })
    console.log(messages);
}

exports.newMessage = async(req,res) => {
    const {to, cc, bcc, subject, text} = req.body
    const {_id : id, role, email} = req.user
    const schema = Joi.object({
        to: Joi.string().email().required(),
        cc: Joi.string(),
        bcc: Joi.string(),
        subject: Joi.string().required(),
        text: Joi.string().required()
    })
    const {error} = schema.validate({to, cc, bcc, subject, text})
    if (error) return res.status(400).json({error: error.message})
    Letters.create({to: to, cc: cc ? cc : null, bcc: bcc ? bcc : null, subject: subject, text: text, from: role === 'admin' ? "preskool@gmail.com" : email, user_id: id})
    res.status(201).json({message: "Message sent successfully"})
}

exports.deleteMessage = async(req,res) => {
    try {
    const {id} = req.params
    const {_id : user_id} = req.user
    const checkMessage = await Letters.findOne({_id: id, user_id: user_id})
    if (!checkMessage) return res.status(400).json({error: "Message not found"})
    await Letters.findByIdAndUpdate(id, {inTrash: true})
    res.status(200).json({message: "Message deleted successfully"})
    } catch (error) {
       if (error.name === "CastError") 
        return res.status(400).json({error: "Message not found"})
        res.status(500).json({ message: "INTERNAL ERROR", error: error.message });
    }
}

exports.message = async(req,res) => {
    const {id} = req.params
    let {email} = req.user
    const message = await Letters.findById({_id: id})
    if (!message) return res.status(400).json({message: "Message not found"})
    if (email !== message.from && email !== message.to) {
        return res.status(400).json({message: "Message is not to you or from you"})
    }
    res.status(200).json(message)
}

exports.fowardMessage = async(req,res) => {
    const {id} = req.params
    let {email} = req.user
    const message = await Letters.findById({_id: id})
    if (!message) return res.status(400).json({message: "Message not found"})
    if (email !== message.from && email !== message.to) {
        return res.status(400).json({message: "Message is not to you or from you"})
    }
    res.status(200).json (message)
}

exports.replyMessage = async(req,res) => {
    const {id} = req.params
    let {_id : user_id, role, email} = req.user
    email = "preskool@gmail.com"
    const message = await Letters.findById({_id: id})
    if (!message) return res.status(400).json({message: "Message not found"})
    if (email !== message.to) {
        return res.status(400).json({message: "The message is not for you so you can't reply to it."})
    }
    const { cc, bcc, subject, text} = req.body
    const schema = Joi.object({
        cc: Joi.string(),
        bcc: Joi.string(),
        subject: Joi.string().required(),
        text: Joi.string().required()
    })
    const {error} = schema.validate({cc, bcc, subject, text})
    if (error) return res.status(400).json({error: error.message})
    Letters.create({to: message.from, cc: cc ? cc : null, bcc: bcc ? bcc : null, subject: subject, text: text, from: role === 'admin' ? "preskool@gmail.com" : email, user_id: user_id, replied: message._id})
    res.status(201).json({message: "Messages replied successfully"})
}

exports.markRead = async(req,res) => {
    let {messages} = req.query
    let {email} = req.user
    messages = messages.split(",")
    for (let i = 0; i < messages.length; i++) {
        const checkLetter  = await Letters.findById(messages[i])
        if (email !== checkLetter.from && email !== checkLetter.to) {
            return res.status(400).json({message: "Message is not to you or from you"})
        }
        await Letters.findByIdAndUpdate(messages[i], {readed: true})
    }
    res.status(200).json({message: "Messages readed successfully"})
}

exports.markUnRead = async(req,res) => {
    let {messages} = req.query
    let {email} = req.user
    messages = messages.split(",")
    for (let i = 0; i < messages.length; i++) {
        const checkLetter  = await Letters.findById(messages[i])
        if (email !== checkLetter.from && email !== checkLetter.to) {
            return res.status(400).json({message: "Message is not to you or from you"})
        }
        await Letters.findByIdAndUpdate(messages[i], {readed: false})
    }
    res.status(200).json({message: "Messages readed successfully"})
}


