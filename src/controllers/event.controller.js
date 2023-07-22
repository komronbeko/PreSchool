const Events = require("../models/Event");


// GET
exports.getEvents = async (_, res) => {
  const client = await Events.find();
  res.status(200).json(client);
};

// POST
exports.createEvents = async (req, res) => {
  const { event_id, event_name, event_date,start_time} = req.body;
  console.log( Events);

  await Events.create({
    event_id, event_name, event_date,start_time
  });

  res.status(201).json({ message: "Successfully create Events" });
};

// EDIT
exports.editEvents = async (req, res) => {
  console.log("salom");
  const {event_id, event_name, event_date,start_time} = req.body;
  const { id } = req.params   ;

  await Events.findByIdAndUpdate(id, {
    $set: {
        event_id, event_name, event_date,start_time
    },
  });

  res.status(201).json({ message: "Successfully Updated Events" });
};

//DELETE 
exports.deleteEvents = async (req, res) => {
  const { id } = req.params;

  await Events.findByIdAndDelete(id);

  res.status(202).json({ message: "Successfully Deleted Events" });
};
