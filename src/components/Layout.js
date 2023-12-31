import React from 'react'

const Layout = ({children, className=""}) => {
  return (
    <div className={`w-full h-full z-0 inline-block p-32 bg-light ${className}`}>
        {children}
    </div>
  )
}

export default Layout