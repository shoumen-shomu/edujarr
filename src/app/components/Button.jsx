import React from 'react'

const Button = ({className,btnTxt }) => {
  return (
    
    <div className={`inline-block w-34.5 lg-w-0 cursor-pointer ${className}`}>{btnTxt}</div>
    
  )
}

export default Button