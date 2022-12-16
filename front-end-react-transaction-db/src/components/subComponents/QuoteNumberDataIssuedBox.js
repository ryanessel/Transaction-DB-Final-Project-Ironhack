import React from 'react'

function QuoteNumberDataIssuedBox({updateQteInfo,
  qteInfo}) {
  return (
    <div className='quoteNumberBox'>
        
        
<table className='TableQuoteForm'>

<thead className='TableHeadQuoteForm'>
 <tr>
   <th>QUOTE #</th>  
   <th>DATE ISSUED</th>  
   <th>VALIDITY</th> 

  
 </tr>
</thead>


<tbody>
 <tr>
 <td >
    <input 
    type="text"
    value={qteInfo.quoteNumber}
    onChange={(e)=>{updateQteInfo(e , "quoteNumber" )}}

     />
 </td>
 <td >
 <input 
    type="text"
    value={qteInfo.dateIssued}
    onChange={(e)=>{updateQteInfo(e, "dateIssued")}}

     />
 </td>

 <td >
 <input 
    type="text"
    value={qteInfo.validity}
    onChange={(e)=>{updateQteInfo(e, "validity")}}

     />
 </td>
  
 </tr>



 

 

</tbody>

</table>
        
</div>
  )
}


export default QuoteNumberDataIssuedBox;