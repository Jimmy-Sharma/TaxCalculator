import React, { useState } from 'react'
import '../Styling/Select.css'

const Foreign = () => {

  const [foreignNetTaxableIncome, setForeignNetTaxableIncome] = useState(0)
  const [foreignIncomeTax, setForeignIncomeTax] = useState(0)
  const [foreignSurcharge, setForeignSurcharge] = useState(0)
  const [foreignHealthandEducation, setForeignHealthandEducation] = useState(0)
  const [foreignTotalTaxLiability, setForeignTotalTaxLiability] = useState(0)
  const [foreignRelief, setForeignRelief] = useState(0)
  const [foreignCreditUtilized, setForeignCreditUtilized] = useState(0)
  const [foreignAssessedTax, setForeignAssessedTax] = useState(0)

  const handleForeignSubmit = () => {
    let assesedTax;
    let income_tax;
    let surcharge;
    if (+foreignNetTaxableIncome <= 10000000) {
      setForeignIncomeTax(0)
    } else if (+foreignNetTaxableIncome > 10000000 && +foreignNetTaxableIncome <= 100000000) {
      income_tax = (+foreignNetTaxableIncome * 0.02)
      setForeignIncomeTax(income_tax)
    } else if (+foreignNetTaxableIncome > 100000000) {
      income_tax = (+foreignNetTaxableIncome * 0.05)
      setForeignIncomeTax(income_tax)
      if (+foreignNetTaxableIncome > 10000000) {
        surcharge = (income_tax * 0.12)
        setForeignSurcharge(surcharge)
      }
    }



    let cess = ((income_tax+surcharge) * 0.04)
    setForeignHealthandEducation(cess)


    let total_Liablity = income_tax + surcharge + cess
    setForeignTotalTaxLiability(total_Liablity)

    assesedTax = (total_Liablity - (+foreignRelief + +foreignCreditUtilized))
    setForeignAssessedTax(assesedTax)
  }

  return (
    <div>
      <form action="#" >
        <div className='theWhiteOne'>
          <h4>Net Taxable Income</h4>
          <input type="text" onChange={(e) => setForeignNetTaxableIncome(e.target.value)} />
        </div>
        <div className='theblueone'>
          <h4>Income Tax</h4>
          <input type="text" value={foreignIncomeTax} />
        </div>
        <div className='theWhiteOne'>
          <h4>Surcharge</h4>
          <input type="text" value={foreignSurcharge} />
        </div>
        <div className='theblueone'>
          <h4>Health and Education Cess</h4>
          <input type="text" value={foreignHealthandEducation} />
        </div>
        <div className='theWhiteOne'>
          <h4>Total Tax Liability</h4>
          <input type="text" value={foreignTotalTaxLiability} />
        </div>
        <div className='theblueone'>
          <h4>Relief</h4>
          <input type="text" onChange={(e) => setForeignRelief(e.target.value)} />
        </div>
        <div className='theWhiteOne'>
          <h4>TDS/TCS/MAT (AMT) Credit Utilized</h4>
          <input type="text" onChange={(e) => setForeignCreditUtilized(e.target.value)} />
        </div>
        <div className='theblueone'>
          <h4>Assessed Tax</h4>
          <input type="text" value={foreignAssessedTax} />
        </div>
        <div>
          <button id='calculateBTNHRA' onClick={handleForeignSubmit}>Calculate</button>
          <button id='resetBTNHRA'>Reset</button>
        </div>
      </form>
    </div>
  )
}

export default Foreign