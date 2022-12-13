const mongoose = require('mongoose');
const router = require("express").Router();
const User = require("../models/User.model");
const Part = require("../models/Part.model")


//GET ROUTE - ALL PARTS!!!1
router.get("/parts", (req, res, next) => {
Part.find()
.then((allParts) =>  res.json(allParts));
 
});


//GET ROUTE DETAILS (ID)
router.get('/part/:partId', (req, res, next) => {
    const { partId } = req.params

    if(!mongoose.Types.ObjectId.isValid(partId)) {
        res.status(400).json({message: "Speficied id doesn't exist or isn't valid"})
        return;
    }

    Part.findById(partId)
        .then(project => res.status(200).json(project))
        .catch(error => res.json(error))

})



//POST ROUTE - CREATES A NEW PART IN THE DB PER THE INPUTS
router.post('/parts', (req, res, next) => {
    const { 
        cost, 
        sell,
        profit, 
        margin, 
        partNumber,
        partDescription,
        material, } = req.body;

    Part.create({
        cost, 
        sell, 
        profit, 
        margin, 
        partNumber,
        partDescription,
        material,})
        .then(newPart => res.json(newPart))
        .catch(err => res.json(err));

});


module.exports = router;
