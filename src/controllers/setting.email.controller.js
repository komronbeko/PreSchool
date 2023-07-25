const PHPMail = require('../models/PHPMail');
const SMTP = require('../models/SMTP')

const PHPMailPut = async(req, res)=>{
  try{

    var {
      email_from_address,
      email_password,
      emails_from_name,
     } = req.body;



    const phpmail = await PHPMail.find();
    if (phpmail.length){
      await PHPMail.findOneAndUpdate({
        email_from_address,
        email_password,
        emails_from_name,
      })

      
      res.status(201).json({ message: "Updated successfully"})
    }
    else{
      await PHPMail.create({ 
        email_from_address,
        email_password,
        emails_from_name,
      });
      res.status(201).json({ message : "Successfully created!"});
    }
  }
  catch(error){
    res.status(500).json({ message : "Internal error"})
  }
  
}
const PHPMailGet = async( _, res)=>{
  try {
    const data = await PHPMail.findOne();
    res.status(200).json({ message : "Success!", data})
  } catch (error) {
    res.status(500).json({ message : "Internal error"})
  }

}



//SMTP
const SMTPPut = async(req, res)=>{
  try{

    var {
      email_from_address,
      email_password,
      email_host,
      email_port
     } = req.body;



    const SMTPs = await SMTP.find();
    if (SMTPs.length){
      await SMTP.findOneAndUpdate({
        email_from_address,
        email_password,
        email_host,
        email_port
      })

      
      res.status(201).json({ message: "Updated successfully"})
    }
    else{
      await SMTP.create({ 
        email_from_address,
        email_password,
        email_host,
        email_port
      });
      res.status(201).json({ message : "Successfully created!"});
    }
  }
  catch(error){
    res.status(500).json({ message : "Internal error"})
  }
  
}
const SMTPGet = async( _, res)=>{
  try {
    const data = await SMTP.findOne();
    res.status(200).json({ message : "Success!", data})
  } catch (error) {
    res.status(500).json({ message : "Internal error"})
  }

}

module.exports = {
  //PHP Mail
  PHPMailGet,
  PHPMailPut,

  //SMTP
  SMTPGet,
  SMTPPut,

}