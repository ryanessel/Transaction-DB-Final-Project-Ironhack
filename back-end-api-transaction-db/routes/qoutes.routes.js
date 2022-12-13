const mongoose = require('mongoose');
const router = require("express").Router();
const User = require("../models/User.model");
const Quote = require("../models/Quote.model")
const Part = require("../models/Part.model")


//GET ROUTE - ALL QUOTES
router.get("/quotes", (req, res, next) => {
Quote.find()
.populate("quoteParts")
.then((allQuotes) =>  res.json(allQuotes))
.catch(error => res.json(error))
});



//GET QUOTE DETAILS ID
router.get("/quote/:quoteId", (req, res, next) => {
    const { quoteId } = req.params;

    
    Quote.findById(quoteId)
    .populate("quoteParts.part") // the parts that exist 
    .then((theQuote) => { 
     const theQty =  theQuote.quoteParts[0].qty
     const theSell = theQuote.quoteParts[0].part.sell
     const theCost = theQuote.quoteParts[0].part.cost


        //  theQuote.totalSell = theSell * theQty;
        //  theQuote.totalCost = theCost * theQty;
        //  theQuote.totalProfit = theQuote.totalSell - theQuote.totalCost;
        
// adding new keys to the quote array
        theQuote.totalSell = 0
        theQuote.totalCost = 0
        theQuote.totalProfit = 0
        theQuote.marginPercent = 0

        theQuote.quoteParts.map((thePart) => {

            console.log("※※※※※MAP CHECK※※※※※", thePart)
            console.log("※※※※※partCheck※※※※※", thePart.part)

            console.log("※※※multiplication check※※※", thePart.part.cost * thePart.qty)

            theQuote.totalCost += (thePart.part.cost * thePart.qty)
            theQuote.totalSell += (thePart.part.sell * thePart.qty)
            theQuote.totalProfit = (theQuote.totalSell - theQuote.totalCost)
            theQuote.marginPercent = ((theQuote.totalProfit * 100 / theQuote.totalSell * 100) / 100 )
        })



        // forEach loop
        //loop through theQuote.quoteParts
        //add up all relavent numbers
        //updatedQuote. =+ thatPart.price

        //
        
        res.json(theQuote)
        console.log("-=-=-=-=qty=-=-=-=-", theQuote.quoteParts[0].qty)
        console.log("-=-=-=-=sellPrice=-=-=-=-", theQuote.quoteParts[0].part.sell)
    
    });
     
    });





    //QUOTE POST- CREATE ROUTE
    

// okay for these to be simple/.


    router.post(`/quotes`, (req, res, next ) => {
        
        const {
        quoteNumber,
        customer,
        quoteParts           
        } = req.body;
        
        Quote.create({
            quoteNumber,
            customer,
            quoteParts})
            .then((newQuote) => res.json(newQuote))



    })



    module.exports = router;





