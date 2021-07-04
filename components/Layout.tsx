import React, { ReactNode, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from './Header'
import SideBar from './Sidebar'

type Props = {
  children?: ReactNode
  title?: string,
  session?:any
}

const Layout = ({ children,session={}, title = 'This is the default title' }: Props) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return(
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header></Header>
    {
      session && 
      <SideBar />
    }
      {children}
  </div>
)
}
export default Layout
