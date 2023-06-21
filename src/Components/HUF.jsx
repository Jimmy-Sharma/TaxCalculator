import React, { useState } from 'react'
import '../Styling/Select.css'

const HUF = () => {

  const [huftaxationunderSection, setHuftaxationunderSection] = useState("")
  const [hufNetTaxableIncome, setHufNetTaxableIncome] = useState(0)
  const [hufIncomeTax, setHufIncomeTax] = useState(0)
  const [hufSurcharge, setHufSurcharge] = useState(0)
  const [hufHealthandEducation, setHufHealthandEducation] = useState(0)
  const [hufTotalTaxLiability, setHufTotalTaxLiability] = useState(0)
  const [hufRelief, setHufRelief] = useState(0)
  const [hufCreditUtilized, setHufCreditUtilized] = useState(0)
  const [hufAssessedTax, setHufAssessedTax] = useState(0)

  const handleHufSubmit = () => {
    let assesedTax;
    let income_tax;
    let surcharge;
    if (huftaxationunderSection === "No") {
      if (+hufNetTaxableIncome <= 250000) {
        setHufIncomeTax(0)
      } else if (+hufNetTaxableIncome > 250000 && +hufNetTaxableIncome <= 500000) {
        income_tax = (+hufNetTaxableIncome * 0.05)
        setHufIncomeTax(income_tax)
      } else if (+hufNetTaxableIncome > 500000 && +hufNetTaxableIncome <= 1000000) {
        income_tax = (+hufNetTaxableIncome * 0.2)
        console.log(income_tax)
        setHufIncomeTax(income_tax)
      } else if (+hufNetTaxableIncome > 1000000) {
        income_tax = (+hufNetTaxableIncome * 0.3)
        setHufIncomeTax(income_tax)
        if (+hufNetTaxableIncome > 5000000 && +hufNetTaxableIncome <= 10000000) {
          surcharge = (income_tax * 0.1)
          setHufSurcharge(surcharge)
        } else if (+hufNetTaxableIncome > 10000000 && +hufNetTaxableIncome <= 20000000) {
          surcharge = (income_tax * 0.15)
          setHufSurcharge(surcharge)
        }
      }
      let cess = (income_tax * 0.04)
      setHufHealthandEducation(cess)

      let total_Liablity = income_tax + +hufSurcharge + cess
      setHufTotalTaxLiability(total_Liablity)

      assesedTax = (total_Liablity - (+hufRelief + +hufCreditUtilized))
      setHufAssessedTax(assesedTax)
    } else if (huftaxationunderSection === "Yes") {
      if (+hufNetTaxableIncome <= 250000) {
        setHufIncomeTax(0)
      } else if (+hufNetTaxableIncome > 250000 && +hufNetTaxableIncome <= 500000) {
        income_tax = (+hufNetTaxableIncome * 0.05)
        setHufIncomeTax(income_tax)
      } else if (+hufNetTaxableIncome > 500000 && +hufNetTaxableIncome <= 750000) {
        income_tax = (+hufNetTaxableIncome * 0.1)
        console.log(income_tax)
        setHufIncomeTax(income_tax)
      } else if (+hufNetTaxableIncome > 750000 && +hufNetTaxableIncome <= 1000000) {
        income_tax = (+hufNetTaxableIncome * 0.15)
        console.log(income_tax)
        setHufIncomeTax(income_tax)
      } else if (+hufNetTaxableIncome > 1000000 && +hufNetTaxableIncome <= 1250000) {
        income_tax = (+hufNetTaxableIncome * 0.2)
        console.log(income_tax)
        setHufIncomeTax(income_tax)
      } else if (+hufNetTaxableIncome > 1250000 && +hufNetTaxableIncome <= 1500000) {
        income_tax = (+hufNetTaxableIncome * 0.25)
        console.log(income_tax)
        setHufIncomeTax(income_tax)
      } else if (+hufNetTaxableIncome > 1500000) {
        income_tax = (+hufNetTaxableIncome * 0.3)
        setHufIncomeTax(income_tax)
      }
      if (+hufNetTaxableIncome > 5000000 && +hufNetTaxableIncome <= 10000000) {
        surcharge = (income_tax * 0.1)
        setHufSurcharge(surcharge)
      } else if (+hufNetTaxableIncome > 10000000 && +hufNetTaxableIncome <= 20000000) {
        surcharge = (income_tax * 0.15)
        setHufSurcharge(surcharge)
      }
      let cess = (income_tax * 0.04)
      setHufHealthandEducation(cess)

      let total_Liablity = income_tax + +hufSurcharge + cess
      setHufTotalTaxLiability(total_Liablity)

      assesedTax = (total_Liablity - (+hufRelief + +hufCreditUtilized))
      setHufAssessedTax(assesedTax)
    }
  }



  return (
    <div>
      <form action="#">
        <div className='theWhiteOne'>
          <h4>Whether opting for taxation under Section 115BAC?</h4>
          <select name="" id="" onChange={(e) => setHuftaxationunderSection(e.target.value)}>
            <option value="Select">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className='theWhiteOne'>
          <h4>Net Taxable Income</h4>
          <input type="text" onChange={(e) => setHufNetTaxableIncome(e.target.value)} />
        </div>
        <div className='theblueone'>
          <h4>Income Tax</h4>
          <input type="text" value={hufIncomeTax} />
        </div>
        <div className='theWhiteOne'>
          <h4>Surcharge</h4>
          <input type="text" value={hufSurcharge} />
        </div>
        <div className='theblueone'>
          <h4>Health and Education Cess</h4>
          <input type="text" value={hufHealthandEducation} />
        </div>
        <div className='theWhiteOne'>
          <h4>Total Tax Liability</h4>
          <input type="text" value={hufTotalTaxLiability} />
        </div>
        <div className='theblueone'>
          <h4>Relief</h4>
          <input type="text" onChange={(e) => setHufRelief(e.target.value)} />
        </div>
        <div className='theWhiteOne'>
          <h4>TDS/TCS/MAT (AMT) Credit Utilized</h4>
          <input type="text" onChange={(e) => setHufCreditUtilized(e.target.value)} />
        </div>
        <div className='theblueone'>
          <h4>Assessed Tax</h4>
          <input type="text" value={hufAssessedTax} />
        </div>
        <div>
          <button onClick={handleHufSubmit} id='calculateBTNHRA'>Calculate</button>
          <button id='resetBTNHRA'>Reset</button>
        </div>
      </form>
    </div>
  )
}

export default HUF