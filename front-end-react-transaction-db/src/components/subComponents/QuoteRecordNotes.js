import React from 'react'

export default function QuoteRecordNotes(props) {
  return (
    <div className='quoteRecordNotes'>
        <table className='quoteRecordNotesTable'>

<thead className='addPartTableHeadQuoteForm'>
 <tr>
   <th>NOTES</th>
     

  
 </tr>
</thead>


<tbody>
 <tr>
 <td className='quoteNotes'>
 {props.targetQuoteData.notes}
 </td>
  
 </tr>

 

</tbody>

</table>




    </div>
  )
}
