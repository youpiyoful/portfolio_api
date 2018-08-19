var db = require("./../db.js");
var appRouter = function (app) {
    app.get("/", function (req, res, next) {
        console.log("coucou");
        var result = db.query('select * from accueil', function (error, results, fields) {
            //if error, print blank results
            if (error) {
                // console.log(error);
                var apiResult = {};
                //create an empty data table
                apiResult.data = [];
                //send the results (apiResult) as JSON to Express (res)
                //Express uses res.json() to send JSON to client
                //you will see res.send() used for HTML
                res.json(apiResult);
            }
            //make results 
            var resultJson = JSON.stringify(results);
            resultJson = JSON.parse(resultJson);
            var apiResult = {};
            // create a meta table to help apps
            //do we have results? what section? etc
            //add our JSON results to the data table
            apiResult.data = resultJson;
            //send JSON to Express
            res.json(apiResult);
        });
    })
}
module.exports = appRouter;