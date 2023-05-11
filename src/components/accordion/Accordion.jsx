import React, { useState } from 'react'
import './Accordion.css'

const Accordion = ({ headText, bodyText}) => {

    const [dis,setDis] = useState('none')
    const [sign, setSign] = useState('+')
    const accordionText = ()=>({
        display: dis
    })

    const handleClick=()=>{
        if(dis === 'none'){
            setDis('block')
            setSign('-')
        } else{
            setDis('none')
            setSign('+')
        }
    }
  return (
    
    <div className='accordion-cont'>
        <button className='accordion-btn' onClick={handleClick}><div className='accordion-text'><span className='accordion-text-span1'>{headText}</span> <span className='accordion-text-span2'>{sign}</span></div></button>
        <div style={accordionText()}>
            <p>
            {bodyText}
            </p>
        </div>
    </div>
  )
}

export default Accordion