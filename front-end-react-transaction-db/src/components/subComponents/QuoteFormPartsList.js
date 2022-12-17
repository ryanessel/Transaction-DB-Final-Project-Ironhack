import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import QuoteFormRowExample from './QuoteFormRowExample';
import QuoteFormTotalBox from './QuoteFormTotalBox';
import QuoteFormNotesBox from './QuoteFormNotesBox';
import bigDecimal from 'js-big-decimal';
const API_URL = `http://localhost:5005`

 function QuoteFormPartsList ({newParts,
  setNewParts, totalSell, 
updateTotalSell}) {
const [grandTotal, setGrandTotal] =useState(0)
//everyrthing typed
  //   const [newParts, setNewParts] = useState([{

  //     no: "",
  //     partNumber: "",
  //     partDescription: "",
  //     material: "",
  //     cost: "",
  //     margin: "",
  //     qty: "",
  //     sell:"",
  //     rowTotal: "",
  //     profit: "",
     
   


  // } ])
          
  
  console.log(newParts)
const addRow = () => {
const copyNewParts = [...newParts]; // makes a copay of aarray
copyNewParts.push({      
no: "",
partNumber: "",
partDescription: "",
material: "",
cost: "",
margin: "",
qty:"",
sell:"",
rowTotal: "",
profit: "",


})



setNewParts(copyNewParts);
}


const deleteRow = () => {

  const copyNewParts = [...newParts]; // makes a copay of aarray
copyNewParts.pop();
setNewParts(copyNewParts);
}



const getGrandTotal = () => {
  let sum = 0;

  newParts.map((thePart) => {
    const allRowTotals = ((thePart.sell * 100 )  * ( thePart.qty)).toFixed(2) / 100
    sum = bigDecimal.add (sum,  allRowTotals)


  })
return sum;


}





const updatePart = (target, index) => {
console.log(target.value, target.name, index)
const partsCopy = [...newParts];
partsCopy[index][target.name] = target.value
setNewParts(partsCopy);
}

const total = 0


  return (
    <div className='quoteFormPartsList'>
     
     <button onClick={addRow}> + </button>
  <button onClick={deleteRow}> - </button>
  <div className='flexQuotePartList'>
        <form >
<table className='addPartTable'>

   <thead className='addPartTableHead'>
    <tr>
      <th>NO.</th> 
      <th>PART NUMBER</th>  
      <th>DESCRIPTION</th>
      <th>MATERIAL</th>  
      <th className='hideOnPrint'>COST</th>
      <th  className='hideOnPrint'>MARGIN %</th>
      <th>QTY</th>
      <th>SELL</th>  
      <th>ROW TOTAL</th>
     
    </tr>
  </thead>


  <tbody>

    {/* THESE ARE EXTRA ROWS NEED TO ADD THEM AUTOMICALLY */}
    {/* THE ROWS NEED ACCESS TO THE parts database so  i can have it auto populate when the part number is correct */}


{newParts.map((part, index) => {
return (
  
// do I send the props through here?
//do i get the part data from "parts"
<QuoteFormRowExample part={part} index={index} updatePart={updatePart} totalSell={totalSell}  grandTotal={getGrandTotal}  updateTotalSell={updateTotalSell} />
 



 
)

})}


{/* make 3 object, show 1 row for each object, map over them  */}

{/* 3 blank parts lik */}

    

  </tbody>

  </table>
  {/* maybe a buttonn like submit i */}
 

  </form>
  </div>






  
  
    </div>
  )
}


export default QuoteFormPartsList;