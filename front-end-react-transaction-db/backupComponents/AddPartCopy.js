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
        <h1>ADD PART</h1>




        <div className='addPartInput'>
        <form className="addMovieForm"onSubmit={handleSubmit}>
    <label>Cost:</label>
    <input className="addMovieInput"
        type="number"
        name="cost"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
    />
<br/>
    <label>Sell:</label>
    <input className="addMovieInput"
        type="number"
        name="sell"
        value={sell}
        onChange={(e) => setSell(e.target.value)}
    />

<br/>
    <label>Part Nubmer:</label>
    <input className="addMovieInput"
        type="string"
        name="partNubmer"
        value={partNumber}
        onChange={(e) => setPartNumber(e.target.value)}
    />

<br/>
    <label>Part Description:</label>
    <input className="addMovieInput"
        type="string"
        name="partDescription"
        value={partDescription}
        onChange={(e) => setPartDescription(e.target.value)}
    />

<br/>
    <label>Material:</label>
    <input className="addMovieInput"
        type="string"
        name="material"
        value={material}
        onChange={(e) => setMaterial(e.target.value)}
    />
    <br/>
<button type="submit">Submit</button>


    </form>



        </div>
    </div>
  )
}


export default AddPart;