const config = require('config');
const Event = require('../models/Event');

exports.create = async (req, res) => {
  const { name, description, image1, image2, location, price, paid, inter, proximity, date, time } = req.body;
  try {
    const data = { name, description, image1, image2, location, price, paid, inter, proximity, date, time }
    const event = new Event(data);
    await event.save();
    res.status(201).json({
      message: 'Product created successfully.',
      event: event
    });
  } catch(err) {
    console.error(err.message);
    if (!err.statusCode) {
      err.statusCode = 500;
    }
  }
}

exports.delete = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ msg: 'Event not found' });
    }
    await event.remove();
    res.json({ msg: 'Post removed' });
  } catch(err) {
    console.error(err.message);
    if (!err.statusCode) {
      err.statusCode = 500;
    }
  }
}
