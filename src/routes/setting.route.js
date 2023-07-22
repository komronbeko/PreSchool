const { Router } = require("express");
const {
  WebsiteBasicDetailsPut,
  WebsiteBasicDetailsGet,
  WebsiteBasicDetailsDelete,
} = require("../controllers/general.settings.controller");
const {
  AddressDetailsGet,
  AddressDetailsPut,
} = require("../controllers/setting.adress.dt.controller");
const {
  LocalizationDetailsGet,
  LocalizationDetailsPut,
} = require("../controllers/localization.details.controller");
const {
  PHPMailGet,
  PHPMailPut,
  SMTPGet,
  SMTPPut,
} = require("../controllers/setting.email.controller");

const route = new Router();

//Website Basic Details
route.get("/settings/general/basic/get", WebsiteBasicDetailsGet);
route.put("/settings/general/basic/put", WebsiteBasicDetailsPut);
route.delete("/settings/general/basic/delete", WebsiteBasicDetailsDelete);

//Address Details
route.get("/settings/general/address/get", AddressDetailsGet);
route.put("/settings/general/address/put", AddressDetailsPut);

//Localization DEtails
route.get("/settings/localiztion/details/get", LocalizationDetailsGet);
route.put("/settings/localiztion/details/put", LocalizationDetailsPut);

//PHP Mail
route.get("/settings/email/php/get", PHPMailGet);
route.put("/settings/email/php/put", PHPMailPut);

//SMTP
route.get("/settings/email/smtp/get", SMTPGet);
route.put("/settings/email/smtp/put", SMTPPut);

module.exports = route;
