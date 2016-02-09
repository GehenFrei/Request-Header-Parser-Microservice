'use strict';


module.exports = function (app) {

      
   app.route('/api/whoami')
      .get(function (req, res) {
         var ipAdress = req.headers['x-forwarded-for'];
         var language =  req.headers['accept-language'].split(",")[0];
         var userAgent = req.headers['user-agent'];
         userAgent = userAgent.substring(userAgent.indexOf("(") + 1, userAgent.indexOf(")"));
         res.json({"ipaddress": ipAdress,
                   "language": language,
                   "software": userAgent
            });
      });
      
   app.route("*")
      .get(function(req, res) {
          res.sendStatus(404);
      })
};
