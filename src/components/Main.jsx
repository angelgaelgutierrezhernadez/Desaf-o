import imgMobile from '../assets/mobile/image-header.jpg'
import imgDesktop from '../assets/desktop/image-header.jpg'

export const Main = () => {
  return (
    <section>
    <picture>
        <source media='(max-whidt:639px)' srcSet={imgMobile}/>
        <source media='(min-whidt:640px)' srcSet={imgDesktop}/>
        <img src={imgDesktop} alt="background header"/>
    </picture>
    <p className='absolute W-[327px] text-[40px] uppercase tracking-[6.25px] text-center top-[144px] left-0 right-0 mx-auto font-Fraunces '>WERE ARE CREATIVES</p>
    
    </section>
  )
}
