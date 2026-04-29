import React from 'react'

const Container = ({className,children }) => {
  return (
    <div className={`lg:max-w-402.5 w-full mx-auto ${className}`}>{children}</div>
  )
}

export default Container