import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import bigDecimal from 'js-big-decimal';
// want this to be editable on this page.


const API_URL = `http://localhost:5005`

 function PartDetails(props) {
  const [ targetPart, setTargetPart ] = useState(null)
  const [cost, setCost ] = useState("")
  const [sell, setSell ] = useState("")
  const [profit, setProfit ] = useState("")
  const [margin, setMargin ] = useState("")
  const [partNumber, setPartNumber ] = useState("")
  const [partDescription, setPartDescription ] = useState("")
  const [material, setMaterial ] = useState("")
  const [test, setTest] = useState(5)





  const { partId } = useParams()
  const [show, setShow] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
        cost,
        sell,
        partNumber,
        partDescription,
        material,
        //calculated
     
    }

  axios
    .put(`${API_URL}/part/${partId}`, requestBody)
    .then((response) => {
      getPartInfo()
    })





    }




const getPartInfo = () => {

    axios
    .get(`${API_URL}/part/${partId}`)
    .then((response) => {
        console.log("PART DETIALS", response.data)
        setTargetPart(response.data)
        setPartNumber(response.data.partNumber)
        setPartDescription(response.data.partDescription)
        setMaterial(response.data.material)
        setCost(response.data.cost)
        setSell(response.data.sell)
       

    })
    .catch(err => console.log(err))

}

useEffect(() => {
getPartInfo()
}, [])




  return (
    <div>
   
    {targetPart && (
      <div>
          <div>PN: {targetPart.partNumber}</div>
          <div>Description: {targetPart.partDescription}</div>
          <div>Cost: {targetPart.cost}</div>
          <div>Sell: {targetPart.sell}</div>
          <div>Margin: {Math.round((targetPart.sell * 100 ) - (targetPart.cost * 100)) /100} % ※NOTE: rounded to 2 decimal points at the most</div>          
      </div>
      
      
      )}

   
    <button onClick={() => setShow(!show)}>
      {show ? "Hide FORM" : "Edit Part"}
    </button>
  
  


      {show && 
      <div className='editablePart'> 
        
        
        <h1>EDIT PART</h1>

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
  <button type="submit">UPDATE PART</button>
  </form>









        
      </div>
      }     

    </div>
  )

}


export default PartDetails;