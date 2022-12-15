import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';

const API_URL = `http://localhost:5005`

 function AddPart(props) {
    const [cost, setCost ] = useState("")
    const [sell, setSell ] = useState("")
    const [profit, setProfit ] = useState("")
    const [margin, setMargin ] = useState("")
    const [partNumber, setPartNumber ] = useState("")
    const [partDescription, setPartDescription ] = useState("")
    const [material, setMaterial ] = useState("")
    const [test, setTest] = useState(5)
            
const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
        cost,
        sell,
        partNumber,
        partDescription,
        material,
        //calculated
        profit,
        margin,
        test
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


const setSellVal = () => {

setSell(3)
return sell
}


  return (
    <div className='addPartBox'>
        <h1>ADD PART</h1>

        <form className="addMovieForm"onSubmit={handleSubmit}>
<table className='addPartTable'>

   <thead className='addPartTableHead'>
    <tr>
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

    

  </tbody>

  </table>
  <button className='addPartBtn' type="submit">ADD PART TO DATABASE</button>
  </form>

  
        <div className='addPartInput'>
 


        </div>
    </div>
  )
}


export default AddPart;