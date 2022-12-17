import React from 'react'

 function QuoteRecordCustomerInfo(props) {
  return (
    <div className='customerRecordInfo'>




 
<table className='customerInfoRecordTable'>

<thead className='quoteRecordTableHead'>
 <tr>
   <th>CUSTOMER</th>  
     
 </tr>
</thead>


<tbody>
 <tr>
 <td >
{props.customerName}
 </td> 
 
 </tr>

 <tr className='TableHeadQuoteForm'>
   <th>CONTACT</th>  
     
 </tr>

 <tr>
 <td >

{props.targetQuoteData.contact}
 </td> 
 
 </tr>


 <tr className='TableHeadQuoteForm'>
   <th>ADDRESS</th>  
     
 </tr>

 <tr>
 <td >
 {props.targetQuoteData.address}
 </td> 
 
 </tr>




 

 

</tbody>

</table>

    </div>
  )
}



export default QuoteRecordCustomerInfo;