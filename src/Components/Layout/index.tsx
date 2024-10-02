import { ReactNode } from 'react'
import Header from './Header'

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
