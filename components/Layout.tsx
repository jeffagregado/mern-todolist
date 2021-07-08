import { ReactNode } from 'react'
import Meta from './Meta'
import Nav from './Nav/Nav'

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <Nav />
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
