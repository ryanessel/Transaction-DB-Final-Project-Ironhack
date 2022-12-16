import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const API_URL = `http://localhost:5005`


 function TestComponent() {
    //stuff has to be set up in the use state seciton
const [test, setTest] = useState(44)
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
 test ,
 cost: 22,
 sell: 33,
 partNumber: "@@@",
 partDescription :"222",
 material: "222",
 //calculated
 profit: 22,
 margin:22,
    }



console.log(test)

    axios  
        .post(`${API_URL}/parts`, requestBody)
        .then((response) => {
            console.log("TEST COMPONENT", response)
            
           



            
            // Navigate(`/movies`)
        })
        .catch((err) => console.log(err))

    }



  return (
    <div>
<p>submit static input data TEST</p>
    <form onSubmit={handleSubmit}>
<input
type="number" 
name="test" 
value={test} 

 readOnly


/>
  
    <button>SUBMIT</button>
    </form>


    </div>
  )
}



export default TestComponent