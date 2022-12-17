import React from 'react'
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import AddPart from '../components/AddPart';
import { AuthContext } from '../context/auth.context';
import { useNavigate, Link } from 'react-router-dom';


const API_URL = `http://localhost:5005`



 function PartsPage() {
    const [parts, setParts] = useState("")

const nav = useNavigate()

    const {
        isLoggedIn,
        user,
        logOutUser
      } = useContext(AuthContext)

function getAllParts () {
    axios
    .get(`${API_URL}/parts`)
    .then((response) => {
        console.log(response.data)
        setParts(response.data)

    })

}

    useEffect(() => {
        getAllParts()
    }, [])

    const deletePart = (id) => {
      axios
      .delete(`${API_URL}/part/${id}`, {new: true})
      .then(() => {
    
       
    getAllParts();
    
    
        
      })
    
    }

// MAYBE THIS IS OKAY FOR ROUTE PROTECTION
//BUT USING IF TO DISPLAY THE PAGE CAUSES ISSUES WHERE IT DOESN"T THIN IT IS LOGGED IN  




   
    return (
    <div className='partsPage'>


    <h1>PartsPage</h1>
     {isLoggedIn &&  <AddPart refreshParts={getAllParts}/>}
    

     <table className='addPartTable'>

<thead className='addPartTableHead'>
 <tr>
   <th>DELETE PART</th>  
   <th>PART NUMBER</th>  
   <th>DESCRIPTION</th>
   <th>MATERIAL</th>  
   <th>COST</th>
   <th>SELL</th>  
   <th>PROFIT</th> 
   <th>MARGIN %</th> 
  
 </tr>
</thead>


<tbody>
    {(isLoggedIn &&  parts.length > 0) && parts.map((part) => {
        return(
   
 <tr>
  <button onClick={()=> deletePart(part._id)  }>DELETEPART</button>
   <td> 

   <Link to={`/part/${part._id}`}>
 {part.partNumber} 
   </Link>

   
   </td>

   <td>  
    {part.partDescription}  
   </td>

   <td>
    {part.material}
   </td>

   <td> 
    $ {part.cost}
   </td>

   <td>
    $ {part.sell}
   </td>
  

   <td>
    $ {part.profit}
   </td>
  
   <td>
   {Math.round((part.sell * 100 ) - (part.cost * 100)) /100} %
   </td>
  
 </tr>
)
})}

</tbody>

</table>

   


{!isLoggedIn && <div>REDIRECTING . . . {nav(`/login`)} </div> }

<button className='refreshPartsTable' onClick={getAllParts} >REFRESH PARTS</button>

    </div>
  )
}

export default PartsPage;
