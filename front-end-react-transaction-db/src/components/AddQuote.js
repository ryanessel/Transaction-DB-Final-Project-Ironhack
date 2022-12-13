import { useState } from "react"
import axios from "axios";
import AddPart from "./AddPart";
import PartsPage from "../pages/PartsPage";



const API_URL = "http://localhost:5005"

 function AddQuote(props) {
const [quoteNumber, setQuoteNumber ] =useState("")    
const [customer, setCustomer ] =useState("");


const [cost, setCost ] = useState("")
const [sell, setSell ] = useState("")
const [profit, setProfit ] = useState("")
const [margin, setMargin ] = useState("")
const [partNumber, setPartNumber ] = useState("")
const [partDescription, setPartDescription ] = useState("")
const [material, setMaterial ] = useState("")


const [quoteParts, setQuotedParts] =useState([]);
        

const handleSubmit = (e) => {

    e.preventDefault();

    const requestBody = {
            quoteNumber,
            customer,
            quoteParts

    }

    const requestBodyForParts = {
        cost,
        sell,
        partNumber,
        partDescription,
        material,
        //calculated
        profit,
        margin,

    }



    // if inside the one above both get created but i need to send the created parts data to the quote array

//new part should be made
//quote is made
axios
.post(`${API_URL}/quotes`, requestBody)
.then((quoteRes) => {

    let quotePartsArray = quoteRes.data.quoteParts
    setQuotedParts(quoteRes.data.quoted)
    console.log("MAINQOUTEREST", quoteRes)

    setQuoteNumber("");
    setCustomer("");
    quoteRes.data.quoteNumber = 777



    console.log(quotePartsArray)

    

    //Axios post for making part (with qty)

  //in that same axios we will add the response.part Id (with qty) to the respnonse abobve.


})




}






  return (


    <div className='addQuote'>
        
        <form onSubmit={handleSubmit}>
        <label>Quote Number:</label>
 <input className="quoteNumberInput"
        type="text"
        name="quoteNumber"
        value={quoteNumber}
        onChange={(e) => setQuoteNumber(e.target.value)}
    />
        <br/>

        <label>Customer:</label>
 <input className="quoteNumberInput"
        type="text"
        name="customer"
        value={customer}
        onChange={(e) => setCustomer(e.target.value)}
    />
        <br/>
        


        <button type="submit">Submit</button>

        </form>


    </div>
  )
}
export default AddQuote;