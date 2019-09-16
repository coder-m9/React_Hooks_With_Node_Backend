const axios = require("axios");
const config = require("config");

module.exports.getUserStats = function getUserStats(req, res) {
  const { name, status } = req.query;
  axios
    .get(config.get("url.GCS_UserStat"))
    .then(response => {
      let userData = [];

      if (response.data.output) userData = response.data.output;

      userData = userData.filter(data => {
        let filterCheck = true;
        if (name)
          filterCheck =
            filterCheck && data.name.toLowerCase() === name.toLowerCase();

        if (status)
          filterCheck =
            filterCheck && data.status.toLowerCase() === status.toLowerCase();

        return filterCheck;
      });

      res.status(200);
      res.json(userData);

      return res;
    })
    .catch(error => {
      console.log(error.stack);
      res.status(500);
      res.json({ "Error Message": "Internal error occured" });
      return res;
    });
};
