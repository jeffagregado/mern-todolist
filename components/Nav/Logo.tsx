import setClassNames from 'classnames'
import Image from 'next/image'

interface Props {
  className?: string
  src?: string
  alt?: string
}


// Please source the image from public folder
// i.e: /image.png => /public/image.png
const Logo = ({ className, src, alt }: Props) => {
  return (
    <div className={setClassNames('relative', className && className)}>
      {src ? <Image src={src} alt={alt} layout='fill' /> : <h1 className="text-xl font-bold">Logo</h1>}
    </div>
  )
}

export default Logo
