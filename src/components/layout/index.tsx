import { ReactNode } from 'react'
import Header from './header'

interface OptionalMiddleName {
  children: ReactNode
}
const Layout = ({ children }: OptionalMiddleName) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
