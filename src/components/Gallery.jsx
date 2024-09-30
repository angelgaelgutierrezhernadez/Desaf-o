import { Image } from "./image"
import milkbottlesImageMobile from '../assets/mobile/image-gallery-milkbottles.jpg'  
import milkbottlesImageDesktop from '../assets/desktop/image-gallery-milkbottles.jpg'  
import orangeImageMobile from '../assets/mobile/image-gallery-orange.jpg'
import orangeImageDesktop from '../assets/desktop/image-gallery-orange.jpg'
import coneImageMobile from '../assets/mobile/image-gallery-orange.jpg'
import coneImageDesktop from '../assets/desktop/image-gallery-orange.jpg'

export const Gallery = () => {
  return (
    <div>
        <Image 
        ImageMobile={milkbottlesImageMobile}
        ImageDesktop={milkbottlesImageDesktop}
        />
        <Image 
        ImageMobile={orangeImageMobile }
        ImageDesktop={orangeImageDesktop}
        />
        <Image 
        ImageMobile={coneImageMobile}
        ImageDesktop={coneImageDesktop}
        />
    </div>
  )
}
