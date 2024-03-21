import logoImage from '@/../public/pugialli-logo.svg'
import Image from 'next/image'

export function Logo() {
  return (
    <strong className="mx-1 flex items-center gap-2 text-xl font-semibold text-zinc-900">
      <div className=" flex h-8 w-5 items-center justify-center rounded-md bg-zinc-100">
        <Image src={logoImage} width={12} height={12} alt="" />
      </div>
      <span>Pugialli UI</span>
    </strong>
  )
}
