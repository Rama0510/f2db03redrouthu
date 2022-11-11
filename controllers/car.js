var Car = require('../models/car'); 
 
// List of all Costumes 
exports.car_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Car list'); 
}; 
 
// for a specific Costume. 
exports.car_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Car.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle Costume create on POST. 
exports.car_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Car create POST'); 
}; 
 
// Handle Costume delete form on DELETE. 
exports.car_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Car delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.car_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Car update PUT' + req.params.id); 
};

// List of all Costumes 
exports.car_list = async function(req, res) { 
    try{ 
        theCars = await Car.find(); 
        res.send(theCars); 
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
        theCars = await Car.find(); 
        res.render('cars', { title: 'Car Search Results', results: theCars }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle Costume create on POST. 
exports.car_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Car(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.car_name = req.body.car_name; 
    document.car_color = req.body.car_color; 
    document.car_size = req.body.car_size; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle Costume update form on PUT. 
exports.car_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Car.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.car_name)  
               toUpdate.car_name = req.body.car_name; 
        if(req.body.car_color) toUpdate.car_color = req.body.car_color; 
        if(req.body.car_size) toUpdate.car_size = req.body.car_size; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 