import { useState, useEffect, useContext, } from 'react';
import axios from 'axios';
import bigDecimal from 'js-big-decimal';
import AddPart from './AddPart';
import { useNavigate } from 'react-router-dom';
import QuoteFormNotesBox from './subComponents/QuoteFormNotesBox';
import QuoteNumberDataIssuedBox from './subComponents/QuoteNumberDataIssuedBox';
import QuoteFormCustomerInfoBox from './subComponents/QuoteFormCustomerInfoBox';
import QuoteFormPartsList from './subComponents/QuoteFormPartsList';
import QuoteFormSignatureLine from './subComponents/QuoteFormSignatureLine';
import QuoteFormTotalBox from './subComponents/QuoteFormTotalBox';
import { AuthContext } from '../context/auth.context';


const API_URL = `http://localhost:5005`


 function QuoteForm() {
  const nav = useNavigate();
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

const [totalSell, setTotalSell] = useState({

  sellTotal: ""
})

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

const { user } = useContext(AuthContext)
console.log(user.name)
console.log("QUOTE INFO", quoteInfo)
console.log("Customer Info", customerInfo)
console.log("NOTES CHECK", noteSection)
console.log("TOTAL SELL PRICE", totalSell.sellTotal)
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


const updateTotalSell = (e, thingToUpdate)=>{
  console.log("UPDATE TOTAL SELL")
  
    setTotalSell({...totalSell, [thingToUpdate]: e.target.value})
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



  const getGrandTotal = () => {
    let sum = 0;
  
    newParts.map((thePart) => {
      const allRowTotals = ((thePart.sell * 100 )  * ( thePart.qty)).toFixed(2) / 100
      sum = bigDecimal.add (sum,  allRowTotals)
  
  
    })


  return sum;
 
  
  }



  const createQuote = (e) => {
    e.preventDefault();

    const requestBody = {
      quoteNumber : quoteInfo.quoteNumber,
      dateIssued: quoteInfo.dateIssued ,
      validity: quoteInfo.validity,

      customer: customerInfo.customer,
      contact: customerInfo.contact,
      address: customerInfo.address,
    
      notes: noteSection.notes,

      author: user.name,
// can't get teh console log in this page but it gets the correct show stuff
      totalSell: totalSell.sellTotal,
      quoteParts:  newParts 

    }





    axios  
        .post(`${API_URL}/quotes`, requestBody)
        .then((response) => {

         console.log("QUOTES POST TEST", response)

          nav(`/quotes`)

          
            // Navigate(`/movies`)
        })
        .catch((err) => console.log(err))

    }


    // do an axios call on this page to have acess to all the parts!
  return (
    <div className='quoteForm'>
        <h1>QUOTE FORM</h1>

<button onClick={createQuote}>MAKE QUOTE</button>

{/* <AddPart/> */}

<div className='quoteTopData'>
<QuoteFormCustomerInfoBox updateCusInfo={updateCustomerForm} cusInfo={customerInfo}/>
<QuoteNumberDataIssuedBox  updateQteInfo={updateQuoteForm} qteInfo={quoteInfo}/>
</div>

{/* <AddPart/> */}
<QuoteFormPartsList newParts={newParts} setNewParts={setNewParts}  grandTotal={getGrandTotal} totalSell={totalSell} updateTotalSell={updateTotalSell}/>



<div className='flexTotalAndNoteBox'>
    <QuoteFormTotalBox  grandTotal={getGrandTotal} totalSell={totalSell} updateTotalSell={updateTotalSell}/>
     <QuoteFormNotesBox  updateNotes={updateNoteBox} noteInfo={noteSection}/>
     {console.log("Sell Total 2",totalSell.sellTotal)}

       
     
  </div>


<QuoteFormSignatureLine/>



  
    </div>
  )
}


export default QuoteForm;