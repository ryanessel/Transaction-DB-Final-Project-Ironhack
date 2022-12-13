import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import QuoteFormRowExample from './QuoteFormRowExample';

const API_URL = `http://localhost:5005`

 function QuoteFormPartsList (props) {
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
    <div className='addPartBox'>
     

        <form className="addMovieForm"onSubmit={handleSubmit}>
<table className='addPartTable'>

   <thead className='addPartTableHead'>
    <tr>
      <th>NO.</th> 
      <th>PART NUMBER</th>  
      <th>DESCRIPTION</th>
      <th>MATERIAL</th>  
      <th>COST</th>
      <th>SELL</th>  
     
    </tr>
  </thead>


  <tbody>
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
    {/* THESE ARE EXTRA ROWS NEED TO ADD THEM AUTOMICALLY */}
    {/* THE ROWS NEED ACCESS TO THE parts database so  i can have it auto populate when the part number is correct */}
<QuoteFormRowExample/>
<QuoteFormRowExample/>


    

  </tbody>

  </table>
  {/* maybe a buttonn like submit i */}
  </form>

  
        <div className='addPartInput'>
 


        </div>
    </div>
  )
}


export default QuoteFormPartsList;