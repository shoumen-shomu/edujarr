import React from 'react'

const Button = ({className,btnTxt }) => {
  return (
    
    <div className={`inline-block cursor-pointer ${className}`}>{btnTxt}</div>
    
  )
}

export default Button