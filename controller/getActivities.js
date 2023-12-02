const Activities = require("../models/Activity.js");

const getUsers = async (req, res) => {
  try {
    const response = await Activities.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getUsers;
