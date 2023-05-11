import { useState } from 'react'
import './Tabs.css'


const Tabs = () => {
    const [disp1,setDisp1] = useState('none')
    const [disp2,setDisp2] = useState('none')
    const [disp3,setDisp3] = useState('none')

    const handleClick1 =()=>{
        if(disp1 === 'none'){
            setDisp1('block')
            setDisp2('none')
            setDisp3('none')
        } else{
            setDisp1('none')
        }
    }
    const handleClick2 =()=>{
        if(disp2 === 'none'){
            setDisp2('block')
            setDisp1('none')
            setDisp3('none')
        } else{
            setDisp2('none')
        }
    }
    const handleClick3 =()=>{
        if(disp3 === 'none'){
            setDisp3('block')
            setDisp2('none')
            setDisp1('none')
        } else{
            setDisp3('none')
        }
    }

    const dispStyle1 = ()=>({
        display: disp1
    })
    const dispStyle2 = ()=>({
        display: disp2
    })
    const dispStyle3 = ()=>({
        display: disp3
    })

  return (
    <>
        <div className='tabs'>
            <button onClick={handleClick1}>Tab1</button>
            <button onClick={handleClick2}>Tab2</button>
            <button onClick={handleClick3}>Tab3</button>
        </div>
        <div className='tab-content' style={dispStyle1()}>
            <h3>Heading 1</h3>
            <p>Lorem ipsum dolor sit amet. Quo facilis assumenda et corrupti sunt eum doloribus ullam id sapiente voluptas rem unde maxime vel aliquid omnis non blanditiis dolorum. Sit expedita suscipit in autem doloremque eum omnis consequatur est sapiente nisi quo eveniet sint!</p>
        </div>
        <div className='tab-content' style={dispStyle2()}>
            <h3>Heading 2</h3>
            <p>Lorem ipsum dolor sit amet. Quo facilis assumenda et corrupti sunt eum doloribus ullam id sapiente voluptas rem unde maxime vel aliquid omnis non blanditiis dolorum. Sit expedita suscipit in autem doloremque eum omnis consequatur est sapiente nisi quo eveniet sint!</p>
        </div>
        <div className='tab-content' style={dispStyle3()}>
            <h3>Heading 3</h3>
            <p>Lorem ipsum dolor sit amet. Quo facilis assumenda et corrupti sunt eum doloribus ullam id sapiente voluptas rem unde maxime vel aliquid omnis non blanditiis dolorum. Sit expedita suscipit in autem doloremque eum omnis consequatur est sapiente nisi quo eveniet sint!</p>
        </div>
    </>
  )
}

export default Tabs