import React from 'react'

function QuoteFormNotesBox({updateNotes,
  noteInfo}) {
  return (
    <div className='flexQuoteFromNoteBox'>
        
        
<table className='addPartTableQuoteForm'>

<thead className='addPartTableHeadQuoteForm'>
 <tr>
   <th>NOTES</th>
     

  
 </tr>
</thead>


<tbody>
 <tr>
 <td className='quoteNotes'>
 <textarea
    type="text"
    value={noteInfo.notes}
    onChange={(e)=>{updateNotes(e, "notes")}}
     />
 </td>
  
 </tr>

 

</tbody>

</table>
        
</div>
  )
}


export default QuoteFormNotesBox