import React,{useState} from 'react'
import '../Styling/Select.css'

const LLP = () => {

  const [llpNetTaxableIncome, setLlpNetTaxableIncome] = useState(0)
  const [llpIncomeTax, setLlpIncomeTax] = useState(0)
  const [llpSurcharge, setLlpSurcharge] = useState(0)
  const [llpHealthandEducation, setLlpHealthandEducation] = useState(0)
  const [llpTotalTaxLiability, setLlpTotalTaxLiability] = useState(0)
  const [llpRelief, setLlpRelief] = useState(0)
  const [llpCreditUtilized, setLlpCreditUtilized] = useState(0)
  const [llpAssessedTax, setLlpAssessedTax] = useState(0)

  const handleLlpSubmit=()=>{

  }

  return (
    <div>
      <form action="#" >
        <div  className='theWhiteOne'>
          <h4>Net Taxable Income</h4>
          <input type="text"  onChange={(e)=>setLlpNetTaxableIncome(e.target.value)} />
        </div>
        <div className='theblueone'>
          <h4>Income Tax</h4>
          <input type="text" value={llpIncomeTax} />
        </div>
        <div className='theWhiteOne'>
          <h4>Surcharge</h4>
          <input type="text"  value={llpSurcharge} />
        </div>
        <div className='theblueone'>
          <h4>Health and Education Cess</h4>
          <input type="text"  value={llpHealthandEducation} />
        </div>
        <div className='theWhiteOne'>
          <h4>Total Tax Liability</h4>
          <input type="text"  value={llpTotalTaxLiability} />
        </div>
        <div className='theblueone'>
          <h4>Relief</h4>
          <input type="text" onChange={(e)=>setLlpRelief(e.target.value)} />
        </div>
        <div className='theWhiteOne'>
          <h4>TDS/TCS/MAT (AMT) Credit Utilized</h4>
          <input type="text"  onChange={(e)=>setLlpCreditUtilized(e.target.value)} />
        </div>
        <div className='theblueone'>
          <h4>Assessed Tax</h4>
          <input type="text"   value={llpAssessedTax} />
        </div>
        <div>
          <button id='calculateBTNHRA' onClick={handleLlpSubmit}>Calculate</button>
          <button id='resetBTNHRA'>Reset</button>
        </div>
      </form>
    </div>
  )
}

export default LLP