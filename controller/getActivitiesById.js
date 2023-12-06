const Activities = require("../models/Activities.js");

const getActivitiesById = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    const userId = req.cookies.userId;
    const activityId = req.params.id;
    if(!refreshToken) return res.status(401);

    const activityIsExist = await Activities.findOne({
      where: {
          id: activityId
      }
    });

    if (!activityIsExist) {
        return res.status(404).json({
            "error": true,
            "message": "Activity not found"
        });
    };

    if(userId !== activityIsExist.user_id) {
      return res.status(401).json({
        "error": true,
        "message": "Unauthorized"
      });
    };

    try {
      const activities = await Activities.findOne({
        where: {
          id: activityId
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
  
  module.exports = getActivitiesById;