import axios from "axios";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import bigDecimal from "js-big-decimal";
import EditQuoteCustomerInfoBox from "./editPageComponents/EditQuoteCustomerInfoBox";
import EditQuoteDataIssuedBox from "./editPageComponents/EditQuoteDataIssuedBox";
import EditQuotePartsList from "./editPageComponents/EditQuotePartsList";


const API_URL = "http://localhost:5005"

function QuoteEditForm({updateQuoteRecord, setShowState, showState}) {
    const { quoteId } = useParams()


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
    const updateTotalSell = (e, thingToUpdate)=>{
        console.log("UPDATE TOTAL SELL")
        
          setTotalSell({...totalSell, [thingToUpdate]: e.target.value})
        }

        const getGrandTotal = () => {
            let sum = 0;
          
            newParts.map((thePart) => {
              const allRowTotals = ((thePart.sell * 100 )  * ( thePart.qty)).toFixed(2) / 100
              sum = bigDecimal.add (sum,  allRowTotals)
          
          
            })
        
        
          return sum;
         
          
          }

    const updateQuote = (e) => {
        e.preventDefault();
    
        const requestBody = {
    
            customer: customerInfo.customer,
            contact: customerInfo.contact,
            address: customerInfo.address,

            quoteNumber: quoteInfo.quoteNumber,
            dateIssued: quoteInfo.dateIssued,
            validity: quoteInfo.validity,

            quoteParts: newParts 

        }
    
        axios
        .put(`${API_URL}/quote/${quoteId}`, requestBody)
        .then((response) =>{
    
            console.log("PUT RESPONSE?", response)
            console.log("SHOW STATE", showState)
            updateQuoteRecord()
            setShowState(!showState)
        })
    
    
    }
    
console.log("EUOTE EDIT NEW PARTS", newParts)

    const getQuoteInfo = () => {

        axios
         .get(`${API_URL}/quote/${quoteId}`)
         .then((response) => {
            console.log("EDIT QUOTE RESPONSE DATA", response.data)
            setCustomerInfo({
                customer: response.data.customer,
                contact: response.data.contact,
                address: response.data.address,
                
            
            });
            setQuoteInfo({
                quoteNumber: response.data.quoteNumber,
                dateIssued: response.data.dateIssued,
                validity: response.data.validity,


            })

            setNewParts(response.data.quoteParts)

         })
         .catch(err => console.log(err))

    }

    useEffect(() => {

        getQuoteInfo();
    }, [])




console.log(customerInfo)

    const updateCustomerForm = (e, thingToUpdate)=>{
       
          setCustomerInfo({...customerInfo, [thingToUpdate]: e.target.value})
        }

        const updateQuoteForm = (e, thingToUpdate)=>{
            setQuoteInfo({...quoteInfo, [thingToUpdate]: e.target.value})
          }

        console.log("NEW newparts check",newParts)

  return (
    <div className="quoteEditForm">
        <h1>Edit Quote</h1>
    <button onClick={updateQuote} className="quoteUpdateBtn"> UPDATE QUOTE </button>


<div className='quoteTopData'>
<EditQuoteCustomerInfoBox updateCusInfo={updateCustomerForm} cusInfo={customerInfo}  />
<EditQuoteDataIssuedBox updateQteInfo={updateQuoteForm} qteInfo={quoteInfo}  />
</div>

{console.log("QUOTE EDIT MAIN PAGE PARTS CHECK", newParts)}
<EditQuotePartsList newParts={newParts} setNewParts={setNewParts}  grandTotal={getGrandTotal} totalSell={totalSell} updateTotalSell={updateTotalSell}/>


    </div>
  )
}



export default QuoteEditForm;