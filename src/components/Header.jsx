import logo from '../assets/logo.svg'
import { Navbar } from './Navbar'
export const Header = () => {
  return (
    <header className='absolute w-full flex px-6 pt-8 place-conten-between font-Barlow' >
        <img src={logo}  alt=""/>
        <Navbar />
    </header>
  )
}
