import React from 'react'
import "../Styling/Navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <div id='makeaBlue'></div>
      <div>
        <div id='makeSpaceBetween'>
          <div id='brandLogo'>
            <img src="incometaxlogo.png" alt="" />
          </div>
          <div id='buttonToRoute'>
            <Link to="/" ><button>HOUSE RENT ALLOWANCE CALCULATOR</button></Link>
            <Link to="/advance-tax" ><button>ADVANCE TAX CALCULATOR FOR FINANCIAL YEAR 2023-24</button></Link>
          </div>
        </div>
        <div></div>
      </div>
      <div></div>
    </div>
  )
}

export default Navbar