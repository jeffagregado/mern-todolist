import { ReactNode } from 'react'
import setClassNames from 'classnames'

interface Props {
  children: ReactNode
  className?: string
  bold?: boolean
  semiBold?: boolean
}

const Text = ({ children }: Props) => {
  return <p>{children}</p>
}

const Title = ({ children, className, bold, semiBold }: Props) => {
  return (
    <h1
      className={setClassNames(
        'font-normal',
        bold && 'font-bold',
        semiBold && 'font-semibold',
        className ? className : 'text-2xl'
      )}
    >
      {children}
    </h1>
  )
}

Text.Title = Title

export default Text
