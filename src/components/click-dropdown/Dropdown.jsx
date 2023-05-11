
import { useState } from 'react'
import './Dropdown.css'

// take props as 
// 1. array to display as drop down list component
// 2. main heding

const Dropdown = ({arr,heading}) => {
  const [dropState,setDropState] = useState('none')


  const handleButtonClick =()=>{
    if(dropState === 'none'){
      setDropState('block')
    } else{
      setDropState('none')
    }
  }

  const handleElementCLick =(ar)=>{
    console.log(ar)
    setDropState('none')
  }

  const dropDownStyle = ()=>({
    display: dropState
  })

  return (
    <div className='clickdropdown'>
      <button onClick={handleButtonClick} className='clickdropdown-btn'>{heading}</button>
      <div className='clickdropdown-content' style={dropDownStyle()}>{arr.map(ar=>(<p className='clickdropdown-p' key={ar} onClick={()=>handleElementCLick(ar)}>{ar}</p>))}</div>
    </div>
  )
}

export default Dropdown