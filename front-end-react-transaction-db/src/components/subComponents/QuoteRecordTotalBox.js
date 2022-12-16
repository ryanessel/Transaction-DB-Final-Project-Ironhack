import React from 'react'

export default function QuoteRecordTotalBox(props) {
  return (
    <div className='quoteRecordTotalBox'>
        <table className='recTotal'>

<thead className='addPartTableHeadQuoteForm'>
 <tr>
   <th>TOTAL</th>
     

  
 </tr>
</thead>


<tbody>
 <tr>
 <td className='recordTotalCell'>
 $ {props.totalSell}
 </td>
  
 </tr>

 

</tbody>

</table>




    </div>
  )
}
