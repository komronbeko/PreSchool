const LocalizationDetails = require('../models/LocalizationDetails');


const LocalizationDetailsPut = async(req, res)=>{
  try{

    const {
      time_zone,
      date_format,
      time_format,
      surrency_symbol,
     } = req.body;

    const localizationDetails = await LocalizationDetails.find();
    if (localizationDetails.length){
      await LocalizationDetails.findOneAndUpdate({
        time_zone,
        date_format,
        time_format,
        surrency_symbol,
      })
      
      res.status(201).json({ message: "Updated successfully"})
    }
    else{
      await LocalizationDetails.create({ 
        time_zone,
        date_format,
        time_format,
        surrency_symbol,
      });
      res.status(201).json({ message : "Successfully created!"});
    }
  }
  catch(error){
    res.status(500).json({ message : "Internal error"})
  }
  
}
const LocalizationDetailsGet = async( _, res)=>{
  try {
    const data = await LocalizationDetails.findOne();
    res.status(200).json({ message : "Success!", data})
  } catch (error) {
    res.status(500).json({ message : "Internal error"})
  }

}



module.exports = {

  //Localization DEtails
  LocalizationDetailsGet,
  LocalizationDetailsPut,


}