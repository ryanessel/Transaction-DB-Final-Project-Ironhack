import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import QuoteRecordQuoteNumTag from "../components/subComponents/QuoteRecordQuoteNumTag";
import QuoteRecordCustomerInfo from "../components/subComponents/QuoteRecordCustomerInfo";
import QuoteRecordTotalBox from "../components/subComponents/QuoteRecordTotalBox";
import QuoteRecordNotes from "../components/subComponents/QuoteRecordNotes";
import QuoteEditForm from "../components/QuoteEditForm";
import bigDecimal from "js-big-decimal";


const API_URL = `http://localhost:5005`




 function QuoteDetailsPage() {
  const [targetQuote, setTargetQuote] = useState("")
  const [show, setShow] = useState(false);
  const { quoteId } = useParams(null)
 

console.log("ITS WORKIGN")
const getQuoteDetails = () => {


  axios
  .get(`${API_URL}/quote/${quoteId}`)
  .then((response) => {
    console.log("QUOTE DATA", response.data)
    setTargetQuote(response.data)
  
  })
  .catch(err => console.log(err))
}



  



useEffect(() => {
getQuoteDetails();


}, [])




  return (
    <div className="quoteRecord">


<button onClick={() => setShow(!show)}>
{show ? "Cancel Changes" : "Edit Quote"}
</button>
{/* ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓EDIT QUOTE SECTION↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */}
{show &&
  <>
 
<QuoteEditForm updateQuoteRecord={getQuoteDetails} setShowState={setShow} showState={show}/>
</>

}

{/*　↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑EDIT QUOTE SECTION↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ */}


{/* ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓RECORD QUOTE SECTION↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */}

{!show && 
<>
<h1>QUOTE RECORD</h1>
   

      <div className="QuoteBoxCustomerBox">
      <QuoteRecordCustomerInfo customerName={targetQuote.customer} targetQuoteData={targetQuote} />
      <QuoteRecordQuoteNumTag targetQuoteData={targetQuote}/>
      </div>


      <table className='addPartTable'>
      <thead className='addPartTableHead'>
      <tr>
      <th>NO.</th> 
      <th>PART NUMBER</th>  
      <th>DESCRIPTION</th>
      <th>MATERIAL</th>  
      {/* <th className="hideOnPrint">COST</th> */}
      <th>QTY</th>  
      <th>SELL</th>  
      <th>TOTAL SELL</th>  

    
     
    </tr>
  </thead>

    
      

       {targetQuote.quoteParts &&  targetQuote.quoteParts.map((partsQuoted, index) => {
          return (
            

                               
                  <tbody>
                    <tr>

                      <td>
                     {index + 1}
                      </td>

                      <td>    
                      {partsQuoted.partNumber}   
                      </td>
                
                      <td> 
                      {partsQuoted.partDescription}   
                      </td>
                
                      <td>
                      {partsQuoted.material} 
                      </td>
                {/* cost should be hidden at print */}
                      <td className="hideOnPrint">  
                      {partsQuoted.cost}   
                      </td>
                
                      <td>
                      {partsQuoted.qty} 
                      </td>

                      {/* <td>
                      {partsQuoted.part.sell} 
                      </td> */}

                      <td>
                        {/* this will change depending one what is updated in the database */}
                      {bigDecimal.multiply(partsQuoted.sell, partsQuoted.qty) } 
                      </td>



                    
                   </tr>    

  </tbody>



          )
      })}
</table>
<QuoteRecordNotes targetQuoteData={targetQuote}/>
<br/>
<QuoteRecordTotalBox totalSell={targetQuote.totalSell}/>
<div> Issued By: {targetQuote.author}</div>

</>
}
{/*　↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑RECORD QUOTE SECTION↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ */}
  {/* maybe a buttonn like submit i */}
 

    </div>
  )
}



export default QuoteDetailsPage;