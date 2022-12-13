import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';

const API_URL = `http://localhost:5005`

 function QuoteFormRowExample(props) {
    const [cost, setCost ] = useState("")
    const [sell, setSell ] = useState("")
    const [profit, setProfit ] = useState("")
    const [margin, setMargin ] = useState("")
    const [no, setNo] = useState("");
    const [partNumber, setPartNumber ] = useState("")
    const [partDescription, setPartDescription ] = useState("")
    const [material, setMaterial ] = useState("")
            
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
        .post(`${API_URL}/parts`, requestBody)
        .then((response) => {

            setCost("");
            setSell("");
            setPartNumber("");
            setPartDescription("");
            setMaterial("");



            props.refreshParts();
            // Navigate(`/movies`)
        })
        .catch((err) => console.log(err))

    }





  return (

     

 



    <tr>
    <td>    <input className="addMovieInput"
        type="string"
        name="No."
        value={no}
        onChange={(e) => setNo(e.target.value)}
    />
    </td>
      <td>    <input className="addMovieInput"
        type="string"
        name="partNubmer"
        value={partNumber}
        onChange={(e) => setPartNumber(e.target.value)}
    />
    </td>

      <td>    <input className="addMovieInput"
        type="string"
        name="partDescription"
        value={partDescription}
        onChange={(e) => setPartDescription(e.target.value)}
    />
    </td>

      <td>
      <input className="addMovieInput"
        type="string"
        name="material"
        value={material}
        onChange={(e) => setMaterial(e.target.value)}
    />

      </td>

      <td>    <input className="addMovieInput"
        type="number"
        name="cost"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
    />
    </td>

      <td>
      <input className="addMovieInput"
        type="number"
        name="sell"
        value={sell}
        onChange={(e) => setSell(e.target.value)}
    />
      </td>
     
    </tr>

 

    




  
    
  )
}


export default QuoteFormRowExample;