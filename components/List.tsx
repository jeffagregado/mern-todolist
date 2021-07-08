import { ReactNode } from 'react'
import setClassName from 'classnames'
import Link from 'next/link'

interface Props {
  children?: ReactNode
  className?: string
  linkName?: string
  cursor?: boolean
  to?: string | any
  dropdown?: boolean
  sublist?: boolean
}

const List = ({ children, className }: Props) => {
  return (
    <ul className={setClassName('relative', className && className)}>
      {children}
    </ul>
  )
}

const Item = ({ children, className }: Props) => {
  return <li className={setClassName(className && className)}>{children}</li>
}

const ItemLink = ({ children, to, sublist, className }: Props) => (
  <li
    className={setClassName(
      'cursor-pointer',
      sublist ? 'relative dropdown' : 'group',
      className && className
    )}
  >
    <Link href={to ? to : '#'}>
      <a>{children}</a>
    </Link>
  </li>
)

const Dropdown = ({ children, sublist, className }: Props) => {
  return (
    <ul
      className={setClassName(
        'absolute space-y-2',
        sublist
          ? 'top-0 right-0 dropdown-menu transform translate-x-full'
          : 'hidden group-hover:block',
        className && className
      )}
    >
      {children}
    </ul>
  )
}

List.Item = Item
List.ItemLink = ItemLink
List.Dropdown = Dropdown

export default List
