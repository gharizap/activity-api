const Users = require("../models/Users.js");

const getUsers = async (req, res) => {
  try {
    const response = await Users.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getUsers;
