import Image from "next/image"

export const Menu = () => {
  return (
    <Image src={'/menu-btn.svg'} alt={'menu-button'} width={60} height={60} className="block lg:hidden text-white" /> 
  )
}
