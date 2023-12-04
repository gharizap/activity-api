const Activities = require("../models/Activities.js");

const getActivitiesById = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    const activitiesId = req.params.id;
    if(!refreshToken) return res.status(401);
    
    try {
      const activities = await Activities.findOne({
        where: {
          id: activitiesId
        }
      });
      res.status(200).json(activities);
    } catch (error) {
      console.log(error.message);
    }
  };
  
  module.exports = getActivitiesById;