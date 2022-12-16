import { useState, useEffect } from 'react';
import axios from 'axios';
import AddPart from './AddPart';
import QuoteFormNotesBox from './subComponents/QuoteFormNotesBox';
import QuoteNumberDataIssuedBox from './subComponents/QuoteNumberDataIssuedBox';
import QuoteFormCustomerInfoBox from './subComponents/QuoteFormCustomerInfoBox';
import QuoteFormPartsList from './subComponents/QuoteFormPartsList';
import QuoteFormSignatureLine from './subComponents/QuoteFormSignatureLine';
import QuoteFormTotalBox from './subComponents/QuoteFormTotalBox';

const API_URL = `http://localhost:5005`


 function QuoteForm() {

  const [newParts, setNewParts] = useState([{

    no: "",
    partNumber: "",
    partDescription: "",
    material: "",
    cost: "",
    margin: "",
    qty: "",
    sell:"",
    rowTotal: "",
    profit: "",
   
 


} ])


  const [noteSection, setNoteSection] = 
  useState({
  
    notes: "",

    
  
  })

const [customerInfo, setCustomerInfo] = 
useState({

  customer: "",
  contact: "",
  address: "",
  

})



const [quoteInfo, setQuoteInfo] = 
useState({
  quoteNumber: "",
  dateIssued: "",
  validity: "",

})

console.log("QUOTE INFO", quoteInfo)
console.log("Customer Info", customerInfo)
console.log("NOTES CHECK", noteSection)
const [partsDb, setPartsDb] =useState([]);


const updateNoteBox = (e, thingToUpdate)=>{
  console.log("note section update")
  
    setNoteSection({...noteSection, [thingToUpdate]: e.target.value})
  }


const updateCustomerForm = (e, thingToUpdate)=>{
console.log("CUS INFO CHECKL")

  setCustomerInfo({...customerInfo, [thingToUpdate]: e.target.value})
}



const updateQuoteForm = (e, thingToUpdate)=>{
  setQuoteInfo({...quoteInfo, [thingToUpdate]: e.target.value})
}


function getAllParts () {
  axios
  .get(`${API_URL}/parts`)
  .then((response) => {
      console.log("PARTS DB", response.data)
      setPartsDb(response.data)

  })

}

  useEffect(() => {
      getAllParts()
  }, [])






    // do an axios call on this page to have acess to all the parts!
  return (
    <div className='quoteForm'>
        <h1>QUOTE FORM</h1>



{/* <AddPart/> */}

<div className='quoteTopData'>
<QuoteFormCustomerInfoBox updateCusInfo={updateCustomerForm} cusInfo={customerInfo}/>
<QuoteNumberDataIssuedBox  updateQteInfo={updateQuoteForm} qteInfo={quoteInfo}/>
</div>

{/* <AddPart/> */}
<QuoteFormPartsList newParts={newParts} setNewParts={setNewParts}/>
<QuoteFormNotesBox  updateNotes={updateNoteBox} noteInfo={noteSection}/>
<QuoteFormSignatureLine/>

  

  
    </div>
  )
}


export default QuoteForm;