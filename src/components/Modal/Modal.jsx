import React from 'react'
import './Modal.css'

const Modal = ({fn, dataa}) => {
    const closePopup = ()=>{
        fn()
    }
  return (
    <div className='cardItem'>
        <div className='cardItem__closeIcon' onClick={closePopup}>
          <h2>X</h2>
        </div>
        <img src={dataa[2]} alt={dataa[0]} />
        <h2 style={{margin:"0px", marginTop:"1rem", padding:"0px 10px"}}>{dataa[0]}</h2>
        <p>{dataa[1]}</p>
        <button className='cardItemBtn'>Shop Now</button>
    </div>
  )
}

export default Modal