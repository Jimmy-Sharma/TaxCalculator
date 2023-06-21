import React, { useState } from 'react'
import '../Styling/Select.css'

const AOPs = () => {

  const [aoptaxationunderSection, setAoptaxationunderSection] = useState("")
  const [aopNetTaxableIncome, setAopNetTaxableIncome] = useState(0)
  const [aopIncomeTax, setAopIncomeTax] = useState(0)
  const [aopSurcharge, setAopSurcharge] = useState(0)
  const [aopHealthandEducation, setAopHealthandEducation] = useState(0)
  const [aopTotalTaxLiability, setAopTotalTaxLiability] = useState(0)
  const [aopRelief, setAopRelief] = useState(0)
  const [aopCreditUtilized, setAopCreditUtilized] = useState(0)
  const [aopAssessedTax, setAopAssessedTax] = useState(0)

  const handleAOPSubmit = () => {
    let assesedTax;
    let income_tax;
    let surcharge;
    if (aoptaxationunderSection == "No") {
      if (+aopNetTaxableIncome <= 250000) {
        setAopIncomeTax(0)
      } else if (+aopNetTaxableIncome > 250000 && +aopNetTaxableIncome <= 500000) {
        income_tax = (+aopNetTaxableIncome * 0.05)
        setAopIncomeTax(income_tax)
      } else if (+aopNetTaxableIncome > 500000 && +aopNetTaxableIncome <= 1000000) {
        income_tax = (+aopNetTaxableIncome * 0.2)
        console.log(income_tax)
        setAopIncomeTax(income_tax)
      } else if (+aopNetTaxableIncome > 1000000) {
        income_tax = (+aopNetTaxableIncome * 0.3)
        setAopIncomeTax(income_tax)
        if (+aopNetTaxableIncome > 5000000 && +aopNetTaxableIncome <= 10000000) {
          surcharge = (income_tax * 0.1)
          setAopSurcharge(surcharge)
        } else if (+aopNetTaxableIncome > 10000000 && +aopNetTaxableIncome <= 20000000) {
          surcharge = (income_tax * 0.15)
          setAopSurcharge(surcharge)
        }
      }
    }


    let cess = (income_tax * 0.04)
    setAopHealthandEducation(cess)


    let total_Liablity = income_tax + surcharge + cess
    setAopTotalTaxLiability(total_Liablity)

    assesedTax = (total_Liablity - (+aopRelief + +aopCreditUtilized))
    setAopAssessedTax(assesedTax)
  }

  return (
    <div>
      <form action="#" >
        <div className='theWhiteOne'>
          <h4>Whether opting for taxation under Section 115BAC?</h4>
          <select name="" id="" onChange={(e) => setAoptaxationunderSection(e.target.value)}>
            <option value="Select">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className='theWhiteOne'>
          <h4>Net Taxable Income</h4>
          <input type="text" onChange={(e) => setAopNetTaxableIncome(e.target.value)} />
        </div>
        <div className='theblueone'>
          <h4>Income Tax</h4>
          <input type="text" value={aopIncomeTax} />
        </div>
        <div className='theWhiteOne'>
          <h4>Surcharge</h4>
          <input type="text" value={aopSurcharge} />
        </div>
        <div className='theblueone'>
          <h4>Health and Education Cess</h4>
          <input type="text" value={aopHealthandEducation} />
        </div>
        <div className='theWhiteOne'>
          <h4>Total Tax Liability</h4>
          <input type="text" value={aopTotalTaxLiability} />
        </div>
        <div className='theblueone'>
          <h4>Relief</h4>
          <input type="text" onChange={(e) => setAopRelief(e.target.value)} />
        </div>
        <div className='theWhiteOne'>
          <h4>TDS/TCS/MAT (AMT) Credit Utilized</h4>
          <input type="text" onChange={(e) => setAopCreditUtilized(e.target.value)} />
        </div>
        <div className='theblueone'>
          <h4>Assessed Tax</h4>
          <input type="text" value={aopAssessedTax} />
        </div>
        <div>
          <button id='calculateBTNHRA' onClick={handleAOPSubmit}>Calculate</button>
          <button id='resetBTNHRA'>Reset</button>
        </div>
      </form>
    </div>
  )
}

export default AOPs