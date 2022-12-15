import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';

const API_URL = `http://localhost:5005`

 function QuoteFormRowExample({part, updatePart, index, grandTotal}) {
 const {         cost,
  margin,
  qty,
  sell ,
 
  no,
  partNumber,
  partDescription,
  material,

  //calculated
  profit,
  } = part


            //build
const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
        cost,
        sell,
        no,
        partNumber,
        partDescription,
        material,
        //calculated
        profit,
        margin,
    }





    axios  
        .post(`${API_URL}/quotes`, requestBody)
        .then((response) => {

         console.log(response)



          
            // Navigate(`/movies`)
        })
        .catch((err) => console.log(err))

    }





  return (

     

 



    <tr>
    <td>    <input className="addMovieInput"
        type="string"
        name="no"
        value={no}
        onChange={(e) => updatePart(e.target, index)}
    />
    </td>
      <td>    <input className="addMovieInput"
        type="string"
        name="partNumber"
        value={partNumber}
        onChange={(e) => updatePart(e.target, index)}
    />
    </td>

      <td>    <input className="addMovieInput"
        type="string"
        name="partDescription"
        value={partDescription}
        onChange={(e) => updatePart(e.target, index)}
    />
    </td>

      <td>
      <input className="addMovieInput"
        type="string"
        name="material"
        value={material}
        onChange={(e) => updatePart(e.target, index)}
    />

      </td>

      <td>    <input className="addMovieInput"
        type="number"
        name="cost"
        value={cost}
        onChange={(e) => updatePart(e.target, index)}
    />
    </td>


    <td>
      <input className="addMovieInput"
        type="number"
        name="margin"
        value={margin}
        onChange={(e) => updatePart(e.target, index)}
    /> 
      </td>


    <td>    <input className="addMovieInput"
        type="number"
        name="qty"
        value={qty}
        onChange={(e) => updatePart(e.target, index)}
    />
    </td>

    <td type="number"
        name="sell"
        value={sell} >
    {Math.round(part.cost / (1 - (part.margin / 100))*100) / 100 }
      </td>


{/* don't need the row total. can do it on the other pages */}
    <td> 
{(Math.round((part.cost /(1 - (part.margin/ 100)) * part.qty)*100) / 100)}
      </td>
     
    </tr>


 

    




  
    
  )
}


export default QuoteFormRowExample;