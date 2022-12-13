import React from 'react'

 function QuoteFormCustomerInfoBox() {
  return (
    <div className='customerBoxInfo'>
        

<table className='TableQuoteForm'>

<thead className='TableHeadQuoteForm'>
 <tr>
   <th>CUSTOMER</th>  
     
 </tr>
</thead>


<tbody>
 <tr>
 <td >
    <input 
    type="text"
     />
 </td> 
 
 </tr>

 <tr className='TableHeadQuoteForm'>
   <th>CONTACT</th>  
     
 </tr>

 <tr>
 <td >
    <input
    type="text"
     />
 </td> 
 
 </tr>


 <tr className='TableHeadQuoteForm'>
   <th>ADDRESS</th>  
     
 </tr>

 <tr>
 <td >
    <textarea
    type="text"
     />
 </td> 
 
 </tr>




 

 

</tbody>

</table>


    </div>
  )
}


export default QuoteFormCustomerInfoBox