import React from 'react'

 function QuoteFormTotalBox(props) {
  return (
    <div className='quoteFormTotalBox'>
                <table className='recTotal'>

<thead className='addPartTableHeadQuoteForm'>
 <tr>
   <th>GRAND TOTAL</th>
     

  
 </tr>
</thead>


<tbody>
 <tr>
 <td className='recordTotalCell'>
 $ {props.grandTotal()}
 </td>
  
 </tr>

 

</tbody>

</table>


    </div>
  )
}


export default QuoteFormTotalBox;