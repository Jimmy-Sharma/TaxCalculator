import React, { useState } from 'react'
import Individual from './Individual'
import HUF from './HUF'
import AOPs from './AOPs'
import Domestic from './Domestic'
import Foreign from './Foreign'
import Firms from './Firms'
import LLP from './LLP'
import CoOperative from './CoOperative'
import Select from './Select'
import Navbar from './Navbar'
import '../Styling/AdvanceTax.css'

const AdvanceTax = () => {

    const [payer, setPayer] = useState("")

    const handlePayer = (e) => {
        setPayer(e)
        console.log(e)
    }

    return (
        <>
            <div>
                <Navbar />
            </div>
            <div id='headContainer'>
                <div id='headLine'>
                    <p>(As amended upto Finance Act, 2023)</p>
                </div>
                <div id='heading'>
                    <img src="calculate.png" alt="" /> <p>ADVANCE TAX CALCULATOR FOR FINANCIAL YEAR 2023-24</p>
                </div>
            </div>
            <div>
                <form action="#">
                    <div id='topPart'>
                        <h4>Tax Payer</h4>
                        <select name="" id="" onChange={(e) => handlePayer(e.target.value)}>
                            <option value="Select">Select</option>
                            <option value="Individual">Individual</option>
                            <option value="HUF">HUF</option>
                            <option value="AOPs/BOI">AOPs/BOI</option>
                            <option value="Domestic Company">Domestic Company</option>
                            <option value="Foreign Company">Foreign Company</option>
                            <option value="Firms">Firms</option>
                            <option value="LLP">LLP</option>
                            <option value="Co-operative Society">Co-operative Society</option>
                        </select>
                    </div>

                    {
                        payer == "" || payer == "Select" ? <Select /> : <div></div>
                    }

                    {
                        payer == "Individual" ? <Individual /> : <div></div>
                    }

                    {
                        payer == "HUF" ? <HUF /> : <div></div>
                    }

                    {
                        payer == "AOPs/BOI" ? <AOPs /> : <div></div>
                    }

                    {
                        payer == "Domestic Company" ? <Domestic /> : <div></div>
                    }

                    {
                        payer == "Foreign Company" ? <Foreign /> : <div></div>
                    }

                    {
                        payer == "Firms" ? <Firms /> : <div></div>
                    }


                    {
                        payer == "LLP" ? <LLP /> : <div></div>
                    }

                    {
                        payer == "Co-operative Society" ? <CoOperative /> : <div></div>
                    }

                </form>
            </div>
        </>
    )
}

export default AdvanceTax