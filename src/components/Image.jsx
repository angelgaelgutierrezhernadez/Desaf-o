
export const Image = ({ImageMobile,ImageDesktop}) => {
  return (
    <picture>
        <source media='(max-whith:639px)' srcSet={ImageMobile} />
        <source media='(min-whith:640px)' srcSet={ImageDesktop} />
        <img src={ImageDesktop} alt=""/>
    </picture>
  )
}
