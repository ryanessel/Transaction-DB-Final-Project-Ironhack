import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import bigDecimal from 'js-big-decimal';

const API_URL = `http://localhost:5005`

 function QuoteFormRowExample({part, updatePart, index, grandTotal}) {
 const {         cost,
  margin,
  qty,
  sell ,
 
  no,
  partNumber,
  partDescription,
  material,

  //calculated
  profit,
  } = part


            //build
// const handleSubmit = (e) => {
//     e.preventDefault();

//     const requestBody = {
//         cost,
//         sell,
//         no,
//         partNumber,
//         partDescription,
//         material,
//         //calculated
//         profit,
//         margin,
//     }





//     axios  
//         .post(`${API_URL}/quotes`, requestBody)
//         .then((response) => {

//          console.log("QUOTES POST TEST", response)



          
//             // Navigate(`/movies`)
//         })
//         .catch((err) => console.log(err))

//     }





  return (

     

 



    <tr>
    <td>    <input className="quoteFormNo"
        type="string"
        name="no"
        value={no}
        onChange={(e) => updatePart(e.target, index)}
    />
    </td>
      <td>    <input className="quoteFormPartNumber"
        type="string"
        name="partNumber"
        value={partNumber}
        onChange={(e) => updatePart(e.target, index)}
    />
    </td>

      <td>    <input className="quoteFormPartDescription"
        type="string"
        name="partDescription"
        value={partDescription}
        onChange={(e) => updatePart(e.target, index)}
    />
    </td>

      <td>
      <input className="quoteFormMaterial"
        type="string"
        name="material"
        value={material}
        onChange={(e) => updatePart(e.target, index)}
    />

      </td>

      <td className='hideOnPrint'>    <input className="quoteFormCost"
        type="number"
        name="cost"
        value={cost}
        onChange={(e) => updatePart(e.target, index)}
    />
    </td>


    <td className='hideOnPrint' >
      <input className="quoteFormMargin"
        type="number"
        name="margin"
        value={margin}
        onChange={(e) => updatePart(e.target, index)}
    /> 
      </td>


    <td>    <input className="quoteFormQty"
        type="number"
        name="qty"
        value={qty}
        onChange={(e) => updatePart(e.target, index)}
    />
    </td>

    <td type="number"
        name="sell"
        value={sell}
        onChange={(e) => updatePart(e.target, index)}
        disabled
        >
        
    {/* {Math.round(part.cost / (1 - (part.margin / 100))*100) / 100 } */}
      {part.sell= Math.round(part.cost / (1 - (part.margin / 100))*100) / 100}
      {console.log("PART SELL", part.sell)}
      </td>


{/* don't need  total in db obj. just calculate if  */}
    <td> 
{((part.sell * 100 )  * ( part.qty)).toFixed(2) / 100}

      </td>
     

    {/* NPM PACKAGE THAT FIXES floating point numbers maths issue. */}
     {/* <div>Big Decimal Test     {bigDecimal.multiply("9.72", "87")}</div> */}

    
    </tr>


 

    




  
    
  )
}


export default QuoteFormRowExample;