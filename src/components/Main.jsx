import imgMobile from '../assets/mobile/image-header.jpg'
import imgDesktop from '../assets/desktop/image-header.jpg'


export const Main = () => {
  return (
    <main>
    <picture>
        <source media='(max-whidt:640px)' srcSet={imgMobile}/>
        <source media='(min-whidt:641px)' srcSet={imgDesktop}/>
        <img src={imgDesktop} alt="background header"/>
    </picture>
    <p className='absolute W-[327px] text-[40px] uppercase tracking-[6.25px] text-center top-[144px] left-0 right-0 mx-auto'>WERE ARE CREATIVES</p>
    
    </main>
  )
}
