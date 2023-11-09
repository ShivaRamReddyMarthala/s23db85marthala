var elephant = require('../models/elephant');
// List of all elephant
exports.elephant_list = function(req, res) {
res.send('NOT IMPLEMENTED: elephant list');
};
// for a specific elephant.
exports.elephant_detail = function(req, res) {
res.send('NOT IMPLEMENTED: elephant detail: ' + req.params.id);
};

// Handle elephant delete form on DELETE.
exports.elephant_delete = function(req, res) {
res.send('NOT IMPLEMENTED: elephant delete DELETE ' + req.params.id);
};
// Handle elephant update form on PUT.
exports.elephant_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: elephant update PUT' + req.params.id);
};

// List of all elephant
exports.elephant_list = async function(req, res) {
    try{
    theelephant = await elephant.find();
    res.send(theelephant);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // VIEWS
// Handle a show all view
exports.elephant_view_all_Page = async function(req, res) {
    try{
    theelephant = await elephant.find();
    res.render('elephant', { title: 'elephant Search Results', results: theelephant });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // Handle elephant create on POST.
exports.elephant_create_post = async function(req, res) {
    console.log(req.body)
    let document = new elephant();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"elephant_type":"goat", "cost":12, "size":"large"}
    //[{ name: "Jumbo", age: 10, species: "Asian"},{ name: "Torto", age: 30, species: "African"},{ name: "Marie", age: 20, species: "America"}]  
    document.name = req.body.name;
    document.age = req.body.age;
    document.species = req.body.species;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    