import { Image } from "./image"
import {Text} from './Text'
import {ImageTex} from  './ImageTex'

import eggImageMobile from '../assets/Mobile/image-transform.jpg'
import eggImageDesktop from '../assets/Desktop/image-transform.jpg'
import glassImageMobile from '../assets/Mobile/image-stand-out.jpg'
import glassImageDesktop from '../assets/Desktop/image-stand-out.jpg'
import graphicDesignMobile from '../assets/mobile/image-graphic-design.jpg'
import graphicDesignDesktop from '../assets/desktop/image-graphic-design.jpg'
import photographyMobile from '../assets/mobile/image-photography.jpg'
import photographyDesktop from '../assets/desktop/image-photography.jpg'

export const Services = () => {
  return (
    <section className="tablet:grid tablet:grid-cols-2">
<Image
order='order-2'
 ImgMobile={eggImageMobile}
 ImageDesktop={eggImageDesktop} 
 />
 <Text 
order='order-1'
  title='Transform your brand'
  text='We are a full-service creative agency specializing in helping brands grow fast. 
  Engage your clients through compelling visuals that do most of the marketing for you.'
  color='bg-Yellow'
  />
   <Image 
   order='order-3'
   ImgMobile={glassImageMobile}
   ImageDesktop={glassImageDesktop}
   />
   <Text 
   order='order-4'
  title=' Stand out to the right audience'
  text='Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. '
  color='bg-red-400'
  />
  <ImageTex 
  order='order-5'
  ImageMobile={graphicDesignMobile}
  ImageDesktop={graphicDesignDesktop}
  title='Graphic design'
  text='Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.'
  />
  <ImageTex 
  order='order-6'
  ImageMobile={photographyMobile}
  ImageDesktop={photographyDesktop}
  title='Photography'
  text=' Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
'
  />
  
    </section>
  )
}
