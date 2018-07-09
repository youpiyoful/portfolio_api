var db = require("./../db.js");
var appRouter = function (app) {
    app.get("/presentation", function (req, res) {
        var result = db.query('SELECT nom, description, email_add       qress as email, phone_number as tel, linkedin_link as linkedin, github_link as github, places.place_name as entreprise, cities.city as ville FROM presentation INNER JOIN places ON presentation.place_id = places.id INNER JOIN cities ON places.city_id = cities.id', function (error, results, fields) {
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
    app.get("/experiences", function (req, res) {
        db.query('SELECT dateStart.year as debut, dateEnd.year as fin, places.place_name as entreprise, cities.city as ville, countries.country as pays, exp_title as poste, exp_description as missions FROM experiences INNER JOIN dates dateStart ON experiences.date_start_id = dateStart.id INNER JOIN dates dateEnd ON experiences.date_end_id = dateEnd.id INNER JOIN places ON experiences.place_id = places.id INNER JOIN cities ON places.city_id = cities.id INNER JOIN cities_countries ON cities.id = cities_countries.cities_id INNER JOIN countries ON countries.id = cities_countries.countries_id ', function (error, results, fields) {
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
    app.get("/formations", function (req, res) {
        db.query('SELECT dateStart.year as debut, dateEnd.year as fin, diploma_name as diplome, places.place_name as ecole, cities.city as ville, countries.country as pays FROM school INNER JOIN dates dateStart ON school.date_start_id = dateStart.id INNER JOIN dates dateEnd ON school.date_end_id = dateEnd.id INNER JOIN places ON school.place_id = places.id INNER JOIN cities ON places.city_id = cities.id INNER JOIN cities_countries ON cities.id = cities_countries.cities_id INNER JOIN countries ON countries.id = cities_countries.countries_id', function (error, results, fields) {
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
    app.get("/competences", function (req, res) {
        db.query('SELECT skill FROM skills', function (error, results, fields) {
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

    app.get("/touslesprojets", function (req, res) {
        db.query('SELECT project_name titre, images.picture as image FROM projects INNER JOIN images ON projects.main_img_id = images.id', function (error, results, fields) {
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
    app.get("/unprojet", function (req, res) {
        db.query('SELECT projects.project_name as projet, projects.project_description as description, projects.link_to_project as lien, dates.year as annee, places.place_name as ville, mainImg.picture as mainImg, SecImg.picture as secImg FROM projects INNER JOIN dates ON projects.project_year_id = dates.id INNER JOIN places ON projects.place_id = places.id INNER JOIN images as mainImg ON projects.main_img_id = mainImg.id INNER JOIN images as SecImg ON projects.sec_img_id = SecImg.id WHERE projects.id  = 1 ', function (error, results, fields) {
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

};

module.exports = appRouter;