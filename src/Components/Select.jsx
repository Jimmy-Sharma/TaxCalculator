import React from 'react'
import '../Styling/Select.css'

const Select = () => {

    const handleSelectSubmit=()=>{
        console.log("me")
    }

    return (
        <div>
            <form action="#" >
                <div className='theWhiteOne'>
                    <h4 >Net Taxable Income</h4>
                    <input type="text" />
                </div>
                <div className='theblueone'>
                    <h4>Income Tax</h4>
                    <input type="text" />
                </div>
                <div  className='theWhiteOne'>
                    <h4>Surcharge</h4>
                    <input type="text" />
                </div>
                <div className='theblueone'>
                    <h4>Education Cess</h4>
                    <input type="text" />
                </div>
                <div className='theWhiteOne'>
                    <h4>Secondary and higher education cess</h4>
                    <input type="text" />
                </div>
                <div className='theblueone'>
                    <h4>Total Tax Liability</h4>
                    <input type="text" />
                </div>
                <div className='theWhiteOne'>
                    <h4>Relief</h4>
                    <input type="text" />
                </div>
                <div className='theblueone'>
                    <h4>TDS/TCS/MAT (AMT) Credit Utilized</h4>
                    <input type="text" />
                </div>
                <div className='theWhiteOne'>
                    <h4>Assessed Tax</h4>
                    <input type="text" />
                </div>
            </form>
        </div>
    )
}

export default Select