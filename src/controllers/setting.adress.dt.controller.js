const AddressDetails = require('../models/AddressDetails');


const AddressDetailsPut = async(req, res)=>{
  try{

    const {
      address_line_1,
      address_line_2,
      city,
      state,
      postal_code,
      country, 
    } = req.body;

    const addressDetails = await AddressDetails.find();
    if (addressDetails.length){
      await AddressDetails.findOneAndUpdate({
        address_line_1,
        address_line_2,
        city,
        state,
        postal_code,
        country,

      })
      
      res.status(201).json({ message: "Updated successfully"})
    }
    else{
    await  AddressDetails.create({
         address_line_1,
        address_line_2,
        city,
        state,
        postal_code,
        country,
      });
      res.status(201).json({ message : "Successfully created!"});
    }
  }
  catch(error){
    res.status(500).json({ message : "Internal error"})
  }
  
}
const AddressDetailsGet = async( _, res)=>{
  try {
    const data = await AddressDetails.findOne();
    res.status(200).json({ message : "Success!", data})
  } catch (error) {
    res.status(500).json({ message : "Internal error"})
  }

}
module.exports = {
  AddressDetailsGet,
  AddressDetailsPut,

}