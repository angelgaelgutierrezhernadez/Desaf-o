import { TestimonioCard } from "./TestimonioCard"
import emilyPhoto from '../assets/image-emily.jpg'
import thomasPhoto from '../assets/image-thomas.jpg'
import jenniePhoto from '../assets/image-jennie.jpg'

export const TestimonioContainer = () => {
  return (
    <section className=" bg-white pt-16 px-6 " > 
        <h2 className="text-center uppercase font-Fraunces mb-16">Client Testimonio</h2>
        <div className="lg:flex lg:w-[900px] lg:mx-auto xl:w-[1110px]">
            <TestimonioCard
            img={emilyPhoto}
            testimonio='We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.'
            nombre=' Emily R.'
            posicion='Marketing Director'
            />
            <TestimonioCard
            img={thomasPhoto }
            testimonio='Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.'
            nombre='Thomas S.'
            posicion='Chief Operating Officer'
            />
            <TestimonioCard
            img={jenniePhoto}
            testimonio=' Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!'
            nombre='Jennie F.'
            posicion='Business Owner'
            />
        </div>
    </section>
  )
}
