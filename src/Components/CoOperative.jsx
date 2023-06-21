import React,{useState} from 'react'
import '../Styling/Select.css'

const CoOperative = () => {

  const [cooperativeSectionBad, setcooperativeSectionBad] = useState("")
  const [cooperativeSectionBae, setcooperativeSectionBae] = useState("")
  const [cooperativeNetTaxableIncome, setcooperativeNetTaxableIncome] = useState(0)
  const [cooperativeIncomeTax, setcooperativeIncomeTax] = useState(0)
  const [cooperativeSurcharge, setcooperativeSurcharge] = useState(0)
  const [cooperativeHealthandEducation, setcooperativeHealthandEducation] = useState(0)
  const [cooperativeTotalTaxLiability, setcooperativeTotalTaxLiability] = useState(0)
  const [cooperativeRelief, setcooperativeRelief] = useState(0)
  const [cooperativeCreditUtilized, setcooperativeCreditUtilized] = useState(0)
  const [cooperativeAssessedTax, setcooperativeAssessedTax] = useState(0)

  const handleCoOperavtiveSubmit=()=>{

  }


  return (
    <div>
      <form action="#" onSubmit={handleCoOperavtiveSubmit}>
        <div className='theWhiteOne'>
          <h4>Co-operative society opted and qualify for section 115BAD</h4>
          <select name="" id="" onChange={(e)=>setcooperativeSectionBad(e.target.value)}>
            <option value="Select">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className='theWhiteOne'>
          <h4>Co-operative society opted and qualify for section 115BAE</h4>
          <select name="" id="" onChange={(e)=>setcooperativeSectionBae(e.target.value)}>
            <option value="Select">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className='theWhiteOne'>
          <h4>Net Taxable Income</h4>
          <input type="text" onChange={(e)=>setcooperativeNetTaxableIncome(e.target.value)} />
        </div>
        <div className='theblueone'>
          <h4>Income Tax</h4>
          <input type="text" value={cooperativeIncomeTax} />
        </div>
        <div className='theWhiteOne'>
          <h4>Surcharge</h4>
          <input type="text" value={cooperativeSurcharge} />
        </div>
        <div className='theblueone'>
          <h4>Health and Education Cess</h4>
          <input type="text" value={cooperativeHealthandEducation} />
        </div>
        <div className='theWhiteOne'>
          <h4>Total Tax Liability</h4>
          <input type="text" value={cooperativeTotalTaxLiability} />
        </div>
        <div className='theblueone'>
          <h4>Relief</h4>
          <input type="text" onChange={(e)=>setcooperativeRelief(e.target.value)} />
        </div>
        <div className='theWhiteOne'>
          <h4>TDS/TCS/MAT (AMT) Credit Utilized</h4>
          <input type="text" onChange={(e)=>setcooperativeCreditUtilized(e.target.value)} />
        </div>
        <div className='theblueone'>
          <h4>Assessed Tax</h4>
          <input type="text" value={cooperativeAssessedTax} />
        </div>
        <div>
          <button id='calculateBTNHRA' onClick={handleCoOperavtiveSubmit} >Calculate</button>
          <button id='resetBTNHRA'>Reset</button>
        </div>
      </form>
    </div>
  )
}

export default CoOperative