import React, { useState } from 'react'
import '../Styling/Select.css'

const Individual = () => {

    const [indisection, setIndisection] = useState("")
    const [indigender, setIndigender] = useState("")
    const [indiResidential, setIndiResidential] = useState("")
    const [indisalary, setIndisalary] = useState(0)
    const [indiProperty, setIndiProperty] = useState(0)
    const [indiCapital, setIndiCapital] = useState(0)
    const [indiOther, setIndiOther] = useState(0)
    const [indiProfits, setIndiProfits] = useState(0)
    const [indiAgricultural, setIndiAgricultural] = useState(0)
    const [indiDeductions, setIndiDeductions] = useState(0)
    const [indiNetTaxable, setIndiNetTaxable] = useState(0)
    const [indiLiabletoTax, setIndiLiabletoTax] = useState(0)
    const [indiShortTermCapital, setIndiShortTermCapital] = useState(0)
    const [indiLongTermCapitalA, setIndiLongTermCapitalA] = useState(0)
    const [indiLongTermCapitalB, setIndiLongTermCapitalB] = useState(0)
    const [indiLongTermCapitalC, setIndiLongTermCapitalC] = useState(0)
    const [indiWinningsfromLottery, setIndiWinningsfromLottery] = useState(0)
    const [indiTaxafterrelief, setIndiTaxafterrelief] = useState(0)
    const [indiSurcharge, setIndiSurcharge] = useState(0)
    const [indiHealthandEducation, setIndiHealthandEducation] = useState(0)
    const [indiTotalTaxLiability, setIndiTotalTaxLiability] = useState(0)
    const [indiReliefotherthanrelief, setIndiReliefotherthanrelief] = useState(0)
    const [indiCreditUtilized, setIndiCreditUtilized] = useState(0)
    const [indiAssessedTax, setIndiAssessedTax] = useState(0)

    const handleIndiSubmit = () => {
        console.log(indisection,
        indigender,
        indiResidential,
        indisalary,
        indiProperty,
        indiCapital,
        indiOther,
        indiProfits,
        indiAgricultural,
        indiDeductions,
        indiNetTaxable,
        indiLiabletoTax,
        indiShortTermCapital,
        indiLongTermCapitalA,
        indiLongTermCapitalB,
        indiLongTermCapitalC,
        indiWinningsfromLottery,
        indiTaxafterrelief,
        indiSurcharge,
        indiHealthandEducation,
        indiTotalTaxLiability,
        indiReliefotherthanrelief,
        indiCreditUtilized,
        indiAssessedTax)
    }


    return (
        <div>
            <form action="#" >
                <div  className='theWhiteOne'>
                    <h4>Whether opting for taxation under Section 115BAC?</h4>
                    <select name="" id="" onChange={(e) => setIndisection(e.target.value)}>
                        <option value="Select">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div className='theblueone'>
                    <h4>Male / Female / Senior Citizen</h4>
                    <select name="" id="" onChange={(e) => setIndigender(e.target.value)}>
                        <option value="Select">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Senior Citizen">Senior Citizen</option>
                        <option value="Super Senior Citizen">Super Senior Citizen</option>
                    </select>
                </div>
                <div  className='theWhiteOne'>
                    <h4>Residential Status</h4>
                    <select name="" id="" onChange={(e) => setIndiResidential(e.target.value)}>
                        <option value="Select">Select</option>
                        <option value="Resident">Resident</option>
                        <option value="Non-Resident">Non-Resident</option>
                        <option value="Not Ordinary Resident">Not Ordinary Resident</option>
                    </select>
                </div>
                <div className='theblueone'>
                    <h4>Income from Salary (Income from salary after standard deduction of Rs.50000.)</h4>
                    <input type="text" onChange={(e) => setIndisalary(e.target.value)} />
                </div>
                <div  className='theWhiteOne'>
                    <h4>Income From House Property</h4>
                    <input type="text" onChange={(e) => setIndiProperty(e.target.value)} />
                </div>
                <div className='theblueone'>
                    <h4>Capital Gains</h4>
                    <input type="text" onChange={(e) => setIndiCapital(e.target.value)} />
                </div>
                <div  className='theWhiteOne'>
                    <h4>Income From Other Sources</h4>
                    <input type="text" onChange={(e) => setIndiOther(e.target.value)} />
                </div>
                <div className='theblueone'>
                    <h4>Profits and Gains of Business or Profession (enter profit only)</h4>
                    <input type="text" onChange={(e) => setIndiProfits(e.target.value)} />
                </div>
                <div className='theWhiteOne'>
                    <h4>Agricultural Income</h4>
                    <input type="text" onChange={(e) => setIndiAgricultural(e.target.value)} />
                </div>
                <div className='theblueone'>
                    <h4>Deductions</h4>
                    <input type="text" onChange={(e) => setIndiDeductions(e.target.value)} />
                </div>
                <div className='theWhiteOne'>
                    <h4>Net Taxable Income</h4>
                    <input type="text" onChange={(e) => setIndiNetTaxable(e.target.value)} />
                </div>
                <div className='withTwoInputsb'>
                    <h4>Income Liable to Tax at Normal Rate ---</h4>
                    <input type="text" onChange={(e) => setIndisection(e.target.value)} />
                    <input type="text" onChange={(e) => setIndisection(e.target.value)} />
                </div>
                <div className='withTwoInputsw'>
                    <h4>Short Term Capital Gains (Covered u/s 111A) 15%</h4>
                    <input type="text" onChange={(e) => setIndisection(e.target.value)} />
                    <input type="text" onChange={(e) => setIndisection(e.target.value)} />
                </div>
                <div className='withTwoInputsb'>
                    <h4>Long Term Capital Gains (Covered u/s 112A) 10%</h4>
                    <input type="text" onChange={(e) => setIndisection(e.target.value)} />
                    <input type="text" onChange={(e) => setIndisection(e.target.value)} />
                </div>
                <div className='withTwoInputsw'>
                    <h4>Long Term Capital Gains (Charged to tax @ 20%) 20%</h4>
                    <input type="text" onChange={(e) => setIndisection(e.target.value)} />
                    <input type="text" onChange={(e) => setIndisection(e.target.value)} />
                </div>
                <div className='withTwoInputsb'>
                    <h4>Long Term Capital Gains (Charged to tax @ 10%) 10%</h4>
                    <input type="text" onChange={(e) => setIndisection(e.target.value)} />
                    <input type="text" onChange={(e) => setIndisection(e.target.value)} />
                </div>
                <div className='withTwoInputsw'>
                    <h4>Winnings from Lottery, Crossword Puzzles, etc) 30%</h4>
                    <input type="text" onChange={(e) => setIndisection(e.target.value)} />
                    <input type="text" onChange={(e) => setIndisection(e.target.value)} />
                </div>
                <div className='theblueone'>
                    <h4>Income Tax after relief u/s 87A</h4>
                    <input type="text" onChange={(e) => setIndiTaxafterrelief(e.target.value)} />
                </div>
                <div  className='theWhiteOne'>
                    <h4>Surcharge</h4>
                    <input type="text" onChange={(e) => setIndiSurcharge(e.target.value)} />
                </div>
                <div className='theblueone'>
                    <h4>Health and Education Cess</h4>
                    <input type="text" onChange={(e) => setIndiHealthandEducation(e.target.value)} />
                </div>
                <div className='theWhiteOne'>
                    <h4>Total Tax Liability</h4>
                    <input type="text" onChange={(e) => setIndiTotalTaxLiability(e.target.value)} />
                </div>
                <div className='theblueone'>
                    <h4>Relief other than relief u/s 87A</h4>
                    <input type="text" onChange={(e) => setIndiReliefotherthanrelief(e.target.value)} />
                </div>
                <div className='theWhiteOne'>
                    <h4>TDS/TCS/MAT (AMT) Credit Utilized</h4>
                    <input type="text" onChange={(e) => setIndiCreditUtilized(e.target.value)} />
                </div>
                <div className='theblueone'>
                    <h4>Assessed Tax</h4>
                    <input type="text" onChange={(e) => setIndiAssessedTax(e.target.value)} />
                </div>
                <div>
                    <button id='calculateBTNHRA' onClick={handleIndiSubmit}>Calculate</button>
                    <button id='resetBTNHRA'>Reset</button>
                </div>
            </form>
        </div>
    )
}

export default Individual