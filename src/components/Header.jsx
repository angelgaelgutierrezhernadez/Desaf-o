import logo from '../assets/logo.svg'
import { Navbar } from './Navbar'
export const Header = () => {
  return (
    <header className=' font-Barlow absolute w-full  px-6 pt-8
     flex place-content-between '>
        <img src={logo}  alt=""/>
        <Navbar />
    </header>
  )
}
