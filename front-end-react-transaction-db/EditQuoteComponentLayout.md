QuoteEditForm is the MAIN component 

<EditQuoteCustomerInfoBox/>
customer,
contact,
address,

<EditQuoteDataIssuedBox/>
quoteNumber,
dateIssued,
validity,


<EditQuotePartsList>
---> <EditQuoteRowExample/> 
      no,
      partNumber,
      description,
      material,
      cost,
      margin,
      qty,   -**calculated** - ()
      sell   -**calculated**
      totalPartCost(rowTotal)

<EditQuoteTotalBox /> 
grandtotal, **signatureLine component is in here as well but it isn't needed to "EDIT" the quoute**


<EditQuoteNotesBox/>

notes