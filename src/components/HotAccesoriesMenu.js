import React from 'react'
import {Link} from "react-router-dom"
import "../styles/HotAccessoriesMenu.css"

const HotAccesoriesMenu = () => {
  return (
    <div className="HotAccessoriesMenu">
    <Link className="HotAccessoriesLink" to="/music">Music Store</Link>
    <Link className="HotAccessoriesLink" to="/smartDevice">Smart Devices</Link>
    <Link className="HotAccessoriesLink" to="/homes">Home</Link>
    <Link className="HotAccessoriesLink" to="/lifeStyle">LifeStyle</Link>
    <Link className="HotAccessoriesLink" to="/mobileAccessories">Mobile Accessories</Link> 
    </div>
  )
}
export default HotAccesoriesMenu
