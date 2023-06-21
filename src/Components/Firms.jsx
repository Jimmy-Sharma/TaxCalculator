import React,{useState} from 'react'
import '../Styling/Select.css'

const Firms = () => {

  const [firmsNetTaxableIncome, setFirmsNetTaxableIncome] = useState(0)
  const [firmsIncomeTax, setFirmsIncomeTax] = useState(0)
  const [firmsSurcharge, setFirmsSurcharge] = useState(0)
  const [firmsHealthandEducation, setFirmsHealthandEducation] = useState(0)
  const [firmsTotalTaxLiability, setFirmsTotalTaxLiability] = useState(0)
  const [firmsRelief, setFirmsRelief] = useState(0)
  const [firmsCreditUtilized, setFirmsCreditUtilized] = useState(0)
  const [firmsAssessedTax, setFirmsAssessedTax] = useState(0)

  const handleFirmsSubmit=()=>{

  }

  return (
    <div>
      <form action="#" >
        <div className='theWhiteOne'>
          <h4>Net Taxable Income</h4>
          <input type="text" onChange={(e)=>setFirmsNetTaxableIncome(e.target.value)}  />
        </div>
        <div className='theblueone'>
          <h4>Income Tax</h4>
          <input type="text" value={firmsIncomeTax}  />
        </div>
        <div className='theWhiteOne'>
          <h4>Surcharge</h4>
          <input type="text" value={firmsSurcharge}  />
        </div>
        <div className='theblueone'>
          <h4>Health and Education Cess</h4>
          <input type="text" value={firmsHealthandEducation}  />
        </div>
        <div className='theWhiteOne'>
          <h4>Total Tax Liability</h4>
          <input type="text" value={firmsTotalTaxLiability}  />
        </div>
        <div className='theblueone'>
          <h4>Relief</h4>
          <input type="text" onChange={(e)=>setFirmsRelief(e.target.value)}  />
        </div>
        <div className='theWhiteOne'>
          <h4>TDS/TCS/MAT (AMT) Credit Utilized</h4>
          <input type="text" onChange={(e)=>setFirmsCreditUtilized(e.target.value)}  />
        </div>
        <div className='theblueone'>
          <h4>Assessed Tax</h4>
          <input type="text" value={firmsAssessedTax}  />
        </div>
        <div>
          <button id='calculateBTNHRA' onClick={handleFirmsSubmit}>Calculate</button>
          <button id='resetBTNHRA'>Reset</button>
        </div>
      </form>
    </div>
  )
}

export default Firms