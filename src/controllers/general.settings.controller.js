const { v4: uuid } = require('uuid');
const path = require('path');
const WebsiteBasicDetails = require('../models/WebsiteBasicDetails');

const WebsiteBasicDetailsPut = async(req, res)=>{
  try{

    const { website_name, RTL } = req.body;
    const { logo_image, favicon_image }  = req.files;

    const extraname1 = path.extname(logo_image.name);
    const logo = `${uuid()}${extraname1}`;

    const extraname2 = path.extname(favicon_image.name);
    const favicon = `${uuid()}${extraname2}`;

    logo_image.mv(`${process.cwd()}/uploads/settings/${logo}`);
    favicon_image.mv(`${process.cwd()}/uploads/settings/${favicon}`);



    const websiteBasicDetails = await WebsiteBasicDetails.find();
    if (websiteBasicDetails.length){
      await WebsiteBasicDetails.findOneAndUpdate({
        website_name,
        logo,
        favicon,
        RTL,
      })
      
      res.status(201).json({ message: "Updated successfully"})
    }
    else{
      WebsiteBasicDetails.create({ website_name, logo, favicon, RTL });
      res.status(201).json({ message : "Successfully created!"});
    }
  }
  catch(error){
    res.status(500).json({ message : "Internal error"})
  }
  
}
const WebsiteBasicDetailsGet = async( _, res)=>{
  try {
    const data = await WebsiteBasicDetails.find();
    res.status(200).json({ message : "Success!", data})
  } catch (error) {
    res.status(500).json({ message : "Internal error"})
  }

}
const WebsiteBasicDetailsDelete = async(req, res)=>{
 const details =  await WebsiteBasicDetails.find();
 res.status(201).json({ message : "Delete!"})
}
module.exports = {
 
  WebsiteBasicDetailsGet,
  WebsiteBasicDetailsPut,
  WebsiteBasicDetailsDelete,
}