-Quote Form Data to send using form.
not sure how to do this

<QuoteFormCustomerInfoBox/>
customer,
contact,
address,

<QuoteNumberDataIssuedBox/>
quoteNumber,
dateIssued,
validity,

**parts section -send to parts obj array in the quote form**
<QuoteFormRowExample/>
no,
partNumber,
description,
material,
cost,
margin,
qty,   -**calculated** - ()
sell   -**calculated**
totalPartCost(rowTotal)

 <QuoteFormTotalBox />
grandtotal,

 <QuoteFormNotesBox/>
notes

**maybe don't do the auot fill in parts thing**


customer,
contact,
address,
quoteNumber,
dateIssued,
validity,
no,
partNumber,
description,
material,
cost,
margin,
qty,  
sell   
totalPartCost,
grandtotal,
notes