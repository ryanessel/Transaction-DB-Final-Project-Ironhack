import { useState } from 'react';
import axios from 'axios';
import AddPart from './AddPart';
import QuoteFormNotesBox from './subComponents/QuoteFormNotesBox';
import QuoteNumberDataIssuedBox from './subComponents/QuoteNumberDataIssuedBox';
import QuoteFormCustomerInfoBox from './subComponents/QuoteFormCustomerInfoBox';
import QuoteFormPartsList from './subComponents/QuoteFormPartsList';
import QuoteFormSignatureLine from './subComponents/QuoteFormSignatureLine';

 function QuoteForm() {

    // do an axios call on this page to have acess to all the parts!
  return (
    <div className='quoteForm'>
        <h1>QUOTE FORM</h1>



{/* <AddPart/> */}


<QuoteFormCustomerInfoBox/>
<QuoteNumberDataIssuedBox/>
<AddPart/>
<QuoteFormPartsList/>
<QuoteFormNotesBox/>
<QuoteFormSignatureLine/>

  

  
    </div>
  )
}


export default QuoteForm;