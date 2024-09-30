import Menu  from '../assets/icon-hamburger.svg'
import { useState } from 'react'

export const Navbar = () => {

const [ MenuClicked, setMenuClicked] = useState (false)

const handleClick = () => {
  setMenuClicked (prevState=>!prevState)
}
console.log(MenuClicked)


  return (
    <nav className=''>
        <ul className= {`bg-white w-[329px] h-[305px] absolute left-0 right-0 
         mx-auto top-[106px]  flex-col items-center place-contec-around after:content-[""] after:absolute after-top-[-24]
         after:right-0 after:boder-[12px] after:border-t-transparent after:border-l-transparent after:border-b-white after:border-r-white
         flex flex-col place-content-around text-Dark-grayish-blue text-xl ${MenuClicked ? 'flex' : 'hidden'}
         
         sm:flex sm:after:hidden sm:bg-transparent sm:flex-row`}>

            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Services</li>
            <li className='cursor-pointer'>Projects</li>
            <li className='cursor-pointer bg-Yellow w-[140px] h-[56px]
            grid place-content-center font-Fraunces rounded-full text-Very-dark-desaturated-blue'>Contact</li>
            
        </ul>
        <div className='cursor-pointer sm:hidden' onClick={handleClick}>
            <img src= { Menu } alt="Menu" />
        </div>
    </nav>
  )
}
