import React, { useState } from 'react'
import '../Styling/Select.css'

const Domestic = () => {
  const [domesticIncomeTax, setDomesticIncomeTax] = useState(0)
  const [domesticNetTaxableIncome, setDomesticNetTaxableIncome] = useState(0)
  const [domesticSurcharge, setDomesticSurcharge] = useState(0)
  const [domesticHealthandEducation, setDomesticHealthandEducation] = useState(0)
  const [domesticTotalTaxLiability, setDomesticTotalTaxLiability] = useState(0)
  const [domesticRelief, setDomesticRelief] = useState(0)
  const [domesticCreditUtilized, setDomesticCreditUtilized] = useState(0)
  const [domesticAssessedTax, setDomesticAssessedTax] = useState(0)
  console.log(domesticNetTaxableIncome, setDomesticNetTaxableIncome)
  const handleDomesticSubmit = () => {
    let assesedTax;
    let income_tax;
    let surcharge;
    if (+domesticNetTaxableIncome <= 10000000) {
      setDomesticIncomeTax(0)
    } else if (+domesticNetTaxableIncome > 10000000 && +domesticNetTaxableIncome <= 100000000) {
      income_tax = (+domesticNetTaxableIncome * 0.07)
      setDomesticIncomeTax(income_tax)
    } else if (+domesticNetTaxableIncome > 100000000) {
      income_tax = (+domesticNetTaxableIncome * 0.12)
      setDomesticIncomeTax(income_tax)
      if (+domesticNetTaxableIncome > 10000000) {
        surcharge = (income_tax * 0.12)
        setDomesticSurcharge(surcharge)
      }
    }



    let cess = ((income_tax + surcharge) * 0.04)
    setDomesticHealthandEducation(cess)


    let total_Liablity = income_tax + surcharge + cess
    setDomesticTotalTaxLiability(total_Liablity)

    assesedTax = (total_Liablity - (+domesticRelief + +domesticCreditUtilized))
    setDomesticAssessedTax(assesedTax)
  }


  return (
    <div>
      <form action="#" >
        <div className='theWhiteOne'>
          <h4>Net Taxable Income</h4>
          <input type="text" value={domesticNetTaxableIncome} onChange={(e) => setDomesticNetTaxableIncome(e.target.value)} />
        </div>
        <div className='theblueone'>
          <h4>Income Tax</h4>
          <input type="text" value={domesticIncomeTax} />
        </div>
        <div className='theWhiteOne'>
          <h4>Surcharge</h4>
          <input type="text" value={domesticSurcharge} />
        </div>
        <div className='theblueone'>
          <h4>Health and Education Cess</h4>
          <input type="text" value={domesticHealthandEducation} />
        </div>
        <div className='theWhiteOne'>
          <h4>Total Tax Liability</h4>
          <input type="text" value={domesticTotalTaxLiability} />
        </div>
        <div className='theblueone'>
          <h4>Relief</h4>
          <input type="text" onChange={(e) => setDomesticRelief(e.target.value)} />
        </div>
        <div  className='theWhiteOne'>
          <h4>TDS/TCS/MAT (AMT) Credit Utilized</h4>
          <input type="text" onChange={(e) => setDomesticCreditUtilized(e.target.value)} />
        </div>
        <div className='theblueone'>
          <h4>Assessed Tax</h4>
          <input type="text" value={domesticAssessedTax} />
        </div>
        <div>
          <button id='calculateBTNHRA' onClick={handleDomesticSubmit}>Calculate</button>
          <button id='resetBTNHRA'>Reset</button>
        </div>
      </form>
    </div>
  )
}

export default Domestic