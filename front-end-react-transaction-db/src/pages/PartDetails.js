import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// want this to be editable on this page.


const API_URL = `http://localhost:5005`

 function PartDetails() {

const [ targetPart, setTargetPart ] = useState(null)

const { partId } = useParams()


const getPartInfo = () => {

    axios
    .get(`${API_URL}/part/${partId}`)
    .then((response) => {
        console.log("PART DETIALS", response.data)
        setTargetPart(response.data)
    })
    .catch(err => console.log(err))

}

useEffect(() => {
getPartInfo()
}, [])


  return (
    <div>
     <h1>PartDetails</h1>   
    {targetPart && targetPart.partNumber}


    </div>
  )

}


export default PartDetails;