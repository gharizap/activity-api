const Activities = require("../models/Activities.js");

const getActivities = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  const userId = req.cookies.userId;
  if(!refreshToken) return res.status(401);
  
  const activitiesIsExist = Activities.findAll({
    where: {
      user_id: userId
    }
  });

  if(!activitiesIsExist){
    return res.status(404).json({
      "error": true,
      "message": "Activity not found"
  });
  };

  try {
    const activities = await Activities.findAll({
      where: {
        user_id: userId
      }
    });
    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({
      "error": true,
      "message": error.message
  });
  }
};

module.exports = getActivities;
