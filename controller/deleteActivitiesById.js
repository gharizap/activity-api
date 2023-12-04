const Activities = require("../models/Activities.js");

const deleteActivitiesById = async(req, res) => {
    const refreshToken = req.cookies.refreshToken;
    const activityId = req.params.id;
    if(!refreshToken) return res.status(401);

    try {
        await Activities.destroy({
            where: {
                id: activityId
            }
        });

        res.json({
            "error": false,
            "message": "success",
        });
    } catch (error) {
        res.status(404).json({
            "error": true,
            "message": error.message
        })
    }
};

module.exports = deleteActivitiesById;