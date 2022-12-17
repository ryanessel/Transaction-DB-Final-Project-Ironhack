import React from 'react'

 function QuoteFormTotalBox({grandTotal,
  totalSell,
  updateTotalSell}) {
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
 <td className='recordTotalCell'

 >

<input className='hideGrandTotalInput'
 type="text"
 value={`$ ${totalSell.sellTotal}`}
 onChange={(e)=>{updateTotalSell(e, "sellTotal")}}
 
/>

 $ {totalSell.sellTotal = grandTotal()}
 {console.log(" SELL TOLTAL on total page",totalSell.sellTotal)}
 </td>
  
 </tr>

 

</tbody>

</table>


    </div>
  )
}


export default QuoteFormTotalBox;