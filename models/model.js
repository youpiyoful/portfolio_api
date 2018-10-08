var db = require("./../db.js");

function sql(key, tabledata, sqlrequest) {
    var result = db.query(sqlrequest, function (error, results, fields) {
        if (error) {
            var apiResult = {};
            apiResult.data = [];
            console.log(error)
            console.log(apiResult)
            res.json(apiResult);
        }
        var resultJson = JSON.stringify(results);
        tabledata[key] = JSON.parse(resultJson);
    });
}

module.exports.accueil = function(tabledata){
    sql('accueil', tabledata, 'SELECT * FROM accueil')
}
module.exports.contact = function(tabledata){
    sql('contact', tabledata, 'SELECT * FROM contact')
}
module.exports.competences = function(tabledata){
    sql('competences', tabledata, 'SELECT * FROM competence')
}
module.exports.projects = function(tabledata){
    sql('projects', tabledata, 'SELECT * FROM project')
}
module.exports.category = function(tabledata){
    sql('category', tabledata, 'SELECT * FROM category')
}