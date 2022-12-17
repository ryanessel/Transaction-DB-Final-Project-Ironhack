
import { useParams } from 'react-router-dom'






 function EditQuoteCustomerInfoBox ({updateCusInfo,
  cusInfo})  {


 


    
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
    value={cusInfo.customer}
    onChange={(e)=>{updateCusInfo(e, "customer")}}

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
value={cusInfo.contact}
onChange={(e)=>{updateCusInfo(e, "contact")}}
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
    value={cusInfo.address}
    onChange={(e)=>{updateCusInfo(e, "address")}}
     />
 </td> 
 
 </tr>




 

 

</tbody>

</table>


    </div>
  )
}


export default EditQuoteCustomerInfoBox