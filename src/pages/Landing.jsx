import React from 'react'
import Button from '../components/Button/Button'
import Accordion from '../components/accordion/Accordion'
import Dropdown from '../components/click-dropdown/Dropdown'
import Tabs from '../components/Tabs/Tabs'
import TopNavigation from '../components/top-navigation/TopNavigation'



const Landing = () => {
  let bodyText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

    const handleClick =(text)=>{
        console.log(text)
    }

  return (
    <>
    <TopNavigation />
    <Button name='sample' size='small' color='black' bg='#1e90ff' onClick={()=>handleClick('button 1')} />
    <Button name='sample' size='xlarge' color='black' bg='orange' onClick={()=>handleClick('button 2')} />
    <Accordion headText='Open for more information' bodyText={bodyText} />
    <Accordion headText='Aditional information' bodyText={bodyText} />
    <Dropdown arr={[1,2,3,4]} heading='quantity' />
    <Dropdown arr={['a','b','c','d','e','f']} heading='grade' />
    <Tabs />
    </>
  )
}

export default Landing