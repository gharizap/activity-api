const Activities = require("../models/Activities.js");

const getActivities = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  const userId = req.cookies.userId;
  if(!refreshToken) return res.status(401);
  
  try {
    const activities = await Activities.findAll({
      where: {
        user_id: userId
      }
    });
    res.status(200).json(activities);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getActivities;
