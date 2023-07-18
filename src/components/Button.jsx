import React from 'react'

const Button = ({text,url,className,primary}) => {
    const primaryStyle="border-brand-light bg-brand hover:bg-brand-light active:bg-brand";
    const defaultStyle="bg-less-dark  border-gray-text border hover:bg-dark active:bg-darker "
  return (
    <a className={`px-5  py-[3px] align- font-[600] rounded-full  transition-colors duration-300 
      ${primary? primaryStyle:defaultStyle} ${className}`
      } href={url}>
        {text}
    </a>
  )
}

export default Button