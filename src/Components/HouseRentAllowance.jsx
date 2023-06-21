import React, { useRef, useState } from 'react'
import '../Styling/HouseRentAllowance.css'
import Navbar from './Navbar'

const HouseRentAllowance = () => {

    const [checked, setChecked] = useState(false)
    const [salary, setSalary] = useState(0)
    const [salaryda, setSalaryda] = useState(0)
    const [commision, setCommision] = useState(0)
    const [hrareceived, setHrareceived] = useState(0)
    const [rent, setRent] = useState(0)
    const [exempted, setExempted] = useState(0)
    const [taxable, setTaxable] = useState(0)

    const handleSubmit = () => {
        let totalSalary = +salary + +salaryda + +commision

        let first = rent - (0.1 * totalSalary);

        let second = hrareceived;

        let third = checked ? (0.5 * totalSalary) : (0.4 * totalSalary)
        console.log(first, second, third)
        console.log(Math.min(first, second, third))
        if (first < 0) {
            setExempted(0)
            setTaxable(second)
        } else if (first && first < second && first < third) {
            setExempted(first)
            setTaxable(second - first)
        } else if (second && second < first && second < third) {
            setExempted(second)
            setTaxable(second - second)
        } else if (third && third < first && third < second) {
            setExempted(third)
            setTaxable(second - third)
        }

        console.log("ex" + exempted)
        console.log("tx" + taxable)
    }

    const handleHRAReset = () => {
        window.location.reload()
    }
    return (
        <>
        <div>
            <Navbar/>
        </div>
        <div id='headContainer'>
            <div id='headLine'>
                <p>(As amended upto Finance Act, 2023)</p>
            </div>
            <div id='heading'>
                <img src="calculate.png" alt="" /> <p>HOUSE RENT ALLOWANCE</p>
            </div>
        </div>
        <div id='houseRentMainDiv' >
            <form action="#"  id='formHRA'>
                <div className='smallDivb'>
                    <p>Basic salary</p>     <input type="text" onChange={(e) => setSalary(e.target.value)} />
                </div>
                <div className='smallDivw'>
                    <p>DA forming part of salary</p>     <input type="text" onChange={(e) => setSalaryda(e.target.value)} />
                </div>
                <div className='smallDivb'>
                    <p>Commission (as % of turnover achieved by the employee)</p>     <input type="text" onChange={(e) => setCommision(e.target.value)} />
                </div>
                <div className='smallDivw'>
                    <p>HRA Received</p>     <input type="text" onChange={(e) => setHrareceived(e.target.value)} />
                </div>
                <div className='smallDivb'>
                    <p>Rent Paid</p>     <input type="text" onChange={(e) => setRent(e.target.value)} />
                </div>
                <div className='smallDivw'>
                    <p>Tick if residing in metro city.</p>     <div id='tickBoxDiv'><input type="checkbox" onChange={(e) => setChecked(!checked ? true : false)} /><h6>(Tick if Yes)</h6></div>
                </div>
                <div className='smallDiv0'>
                    <p>Exempted House Rent Allowance</p>     <input type="text" disabled={true} value={exempted || 0} />
                </div>
                <div className='smallDiv0'>
                    <p>Taxable House Rent Allowance</p>     <input type="text" disabled={true} value={taxable || 0} />
                </div>
                <div id='bottomBTNdiv'>
                    <button id='calculateBTNHRA' onClick={handleSubmit}>Calculate</button>
                    <button id='resetBTNHRA' >Reset</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default HouseRentAllowance