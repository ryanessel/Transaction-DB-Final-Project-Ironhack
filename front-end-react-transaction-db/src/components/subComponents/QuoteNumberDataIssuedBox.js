import React from 'react'

function QuoteNumberDataIssuedBox(props) {
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
     />
 </td>
 <td >
 <input 
    type="text"
     />
 </td>

 <td >
 <input 
    type="text"
     />
 </td>
  
 </tr>



 

 

</tbody>

</table>
        
</div>
  )
}


export default QuoteNumberDataIssuedBox;