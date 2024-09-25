import { Image } from "./image"
import {Text} from './Text'
import eggImageMobile from '../assets/Mobile/image-transform.jpg'
import eggImageDesktop from '../assets/Desktop/image-transform.jpg'
import glassImageMobile from '../assets/Mobile/image-stand-out.jpg'
import glassImageDesktop from '../assets/Desktop/image-stand-out.jpg'
export const Services = () => {
  return (
    <section>
<Image
 ImgMobile={eggImageMobile}
 ImageDesktop={eggImageDesktop} 
 />
 <Text 
  title='Transform your brand'
  text='We are a full-service creative agency specializing in helping brands grow fast. 
  Engage your clients through compelling visuals that do most of the marketing for you.'
  color='bg-Yellow'
  />
   <Image 
   ImgMobile={glassImageMobile}
   ImageDesktop={glassImageDesktop}
   />
   <Text 
  title=' Stand out to the right audience'
  text='Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. '
  color='bg-Soft-red'
  />
  
    </section>
  )
}
