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
const [partsDb, setPartsDb] =useState([]);





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
<QuoteFormCustomerInfoBox/>
<QuoteNumberDataIssuedBox/>
</div>

{/* <AddPart/> */}
<QuoteFormPartsList/>

<QuoteFormSignatureLine/>

  

  
    </div>
  )
}


export default QuoteForm;