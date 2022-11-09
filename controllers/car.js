var car = require('../models/car'); 
// List of all cars 
exports.car_list = async function(req, res) { 
    try{ 
        thecars = await car.find(); 
        res.send(thecars); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// VIEWS 
// Handle a show all view 
exports.car_view_all_Page = async function(req, res) { 
    try{ 
        thecar = await car.find(); 
        res.render('cars', { title: 'cars Search Results', results: thecar }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
 
// List of all car 
exports.car_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: car list'); 
}; 
 
// for a specific car. 
exports.car_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: car detail: ' + req.params.id); 
}; 
 
// Handle car create on POST. 
exports.car_create_post = async function (req, res) {
    console.log(req.body)
    let document = new car();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"car_Name": "BMW", "car_clour": "red", "App_Size": 315.1,}
    document.car_Name = req.body.car_Name;
    document.car_clour = req.body.car_clour;
    document.car_Size = req.body.car_Size;
   

    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle car delete form on DELETE.
exports.car_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: car delete DELETE ' + req.params.id);
};
// Handle car update form on PUT.
exports.car_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: car update PUT' + req.params.id);
};
exports.car_view_all_Page = async function (req, res) {
    try {
        thecar = await car.find();
        res.render('cars', { title: 'cars Search Results', App_Results: thecar });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};