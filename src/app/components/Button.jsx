import React from 'react'

const Button = ({className,btnTxt }) => {
  return (
    
    <div className={`px-5.5 py-8.75 inline-block cursor-pointer ${className}`}>{btnTxt}</div>
    
  )
}

export default Button