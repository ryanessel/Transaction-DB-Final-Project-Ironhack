import React from 'react'

 function QuoteRecordQuoteNumTag(props) {
  return (
    <div className='quoteRecordNumTag'>



<table className='quoteRecordTable'>

<thead className='quoteRecordTableHead'>
 <tr>
   <th>QUOTE #</th>  
   <th>DATE ISSUED</th>  
   <th>VALIDITY</th> 

  
 </tr>
</thead>


<tbody>
 <tr>
   
 <td >
{props.targetQuoteData.quoteNumber}
 </td>
 <td >
 {props.targetQuoteData.dateIssued}
 </td>

 <td >
 {props.targetQuoteData.validity}
 </td>
  
 </tr>

 </tbody>

</table>

    </div>
  )
}



export default QuoteRecordQuoteNumTag;