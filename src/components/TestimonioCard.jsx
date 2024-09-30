
export const TestimonioCard = ({img, testimonio, nombre, posicion }) => {
  return (
    <div className="flex flex-col items-center text-center mb-16">
        <img className="w-[72px] rounded-full" src={img} all="" />
        <p className="my-8 font-Barlow text-Very-Dark-grayish-blue px-4 max-w-[400px]  ">{testimonio}</p>
        <h3 className="font-Fraunces text-[18px] text-Very-dark-desaturated-blue">{nombre}</h3>
        <p className="text-Grayish-blue font-Barlow text-[14px]">{posicion}</p>
    </div>
  )
}
