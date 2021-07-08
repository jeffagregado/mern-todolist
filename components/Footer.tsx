import { ReactNode } from 'react'
import setClassNames from 'classnames'

interface Props {
  children: ReactNode
  className?: string
}

const Footer = ({ children, className }: Props) => {
  return (
    <footer className={setClassNames(className && className)}>
      {children}
    </footer>
  )
}

export default Footer
