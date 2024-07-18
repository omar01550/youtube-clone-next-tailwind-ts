import React, { ReactNode } from 'react'

interface MaxWidthProps {
     children:ReactNode,
     className:string
}

const MaxWidth = ({children,className}) => {
  return (
      <main className={"w-full "+className}>
           {children}
      </main>
  )
}

export default MaxWidth