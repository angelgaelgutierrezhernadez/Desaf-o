import Menu  from '../assets/icon-hamburger.svg'

export const Navbar = () => {

  return (
    <nav className=''>
        <ul className='flex'>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Services</li>
            <li className='cursor-pointer'>Projects</li>
            <li className='cursor-pointter'>Contact</li>
        </ul>
        <div>
            <img src= { Menu } alt="" />
        </div>
    </nav>
  )
}
