
export const ImageTex = ({order, ImageMobile, ImageDesktop, text, title}) => {
  return (
    <div className={`${order} relative pt-[398px] sm:pt-[350px] tablet:pt-[150px] lg:pt-[250px] desktop:pt-[398px] `}>
      <picture className="absolute top-0 z-[-1] ">
        <source media='(max-whith:639px)' srcSet={ImageMobile} />
        <source media='(min-whith:640px)' srcSet={ImageDesktop} />
        <img src={ImageDesktop} alt=""/>
    </picture>
       <h2 className="text-center font-Fraunces text-[28px] text-Dark-desaturated-cyan mb-7">{title}</h2>
       <p className="text-center font-Barlow text-Dark-desaturated-cyan mx-3 mb-[60px]
       tablet:text-sm lg:w-[300px] lg:mx-auto">{text}</p>
    </div>
  )
}
