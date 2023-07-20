import React from 'react'

const Link = ( {url,text,target,className,children}) => {
  return (
    <a className={` flex gap-1 transition-colors hover:text-brand-light ${className}`} href={url}>
        {text}
        {target==="_blank"&&
        <svg className='w-4' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
         </svg>}

    </a>
  )
}

export default Link