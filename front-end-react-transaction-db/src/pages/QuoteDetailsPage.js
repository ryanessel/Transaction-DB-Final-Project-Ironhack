import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import QuoteRecordQuoteNumTag from "../components/subComponents/QuoteRecordQuoteNumTag";
import QuoteRecordCustomerInfo from "../components/subComponents/QuoteRecordCustomerInfo";
import QuoteRecordTotalBox from "../components/subComponents/QuoteRecordTotalBox";
import QuoteRecordNotes from "../components/subComponents/QuoteRecordNotes";


const API_URL = `http://localhost:5005`




 function QuoteDetailsPage() {
  const [targetQuote, setTargetQuote] = useState("")
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


   

      <div className="QuoteBoxCustomerBox">
      <QuoteRecordCustomerInfo customerName={targetQuote.customer}/>
      <QuoteRecordQuoteNumTag quoteNumber={targetQuote.quoteNumber}/>
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
                      {partsQuoted.part.partNumber}   
                      </td>
                
                      <td> 
                      {partsQuoted.part.partDescription}   
                      </td>
                
                      <td>
                      {partsQuoted.part.material} 
                      </td>
                {/* cost should be hidden at print */}
                      <td className="hideOnPrint">  
                      {partsQuoted.part.cost}   
                      </td>
                
                      <td>
                      {partsQuoted.qty} 
                      </td>

                      {/* <td>
                      {partsQuoted.part.sell} 
                      </td> */}

                      <td>
                      {partsQuoted.part.sell * partsQuoted.qty } 
                      </td>



                    
                   </tr>    

  </tbody>



          )
      })}
</table>
<QuoteRecordNotes/>
<br/>
<QuoteRecordTotalBox totalSell={targetQuote.totalSell}/>
<div> TOTAL: {targetQuote.totalSell}</div>




  {/* maybe a buttonn like submit i */}
 

    </div>
  )
}



export default QuoteDetailsPage;