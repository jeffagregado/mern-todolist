import setClassNames from 'classnames';

interface Props {
  children: string
  className?: string
}

const Button = ({ children, className }: Props) => {

  return <button className={setClassNames(className && className)}>{children}</button>
}

export default Button
