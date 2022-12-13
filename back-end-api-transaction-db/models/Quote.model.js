const { Schema, model } = require("mongoose");
//EACH PROJECT WILL HOLD AND ARRAY OF TASKS (one or more)
// coming from another collection

const quoteSchema = new Schema ({
    quoteNumber: String,
    customer: String,
    // we won't be list all parts on the quote page
    //we just need ACCESS to all parts in the parts 
    //collection so that when we search via partNumber
    //or description we will get a filtered result of parts to ad

    // maybe we don't need all of them, in THIS model.
    // cause we need the obj made after the model to reflect ONLY
    //the parts quoted NOt all parts in the dataBASE
    quoteParts: [{part:{ type: Schema.Types.ObjectId, ref: "Part" },
                    qty: Number
}],// can't see  in mongodb but can see if you look at the API URL
    // ownere will be added later on
    totalSell: Number,//i guess this should be calculated before the data is sent to this key
    totalCost: Number,
    totalProfit: Number,
    marginPercent: Number
});


const Quote = model("Quote", quoteSchema);

module.exports = Quote;