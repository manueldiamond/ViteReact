import { useState } from 'react'
import Link from './Link'

const Dropdown = ({text,links}) => {
    const [open,setOpen]=useState(false)
  return (
    <div className="flex gap-1 transition-colors relative hover:text-gray-text " onMouseEnter={()=>(setOpen(true))} onMouseLeave={()=>setOpen(false)}>
        {text}
        <svg width="12.5" xmlns="http://www.w3.org/2000/svg" aria-hidden="false" focusable="" viewBox="0 0 24 24" className="text-icon" >
            <path fill="currentColor"  stroke="currentColor"  
            d="M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"></path>
        </svg>
        <div className={`transition-opacity top-full right-0 whitespace-nowrap flex flex-col absolute p-4 rounded-2xl bg-less-dark border-gray-dark border-2 ${open?"block opacity-100":" hidden opacity-0"}`}>
                {links.map(dropLink=>(
                    <Link className="text-text rounded-xl px-2 py-1 w-full hover:bg-gray-dark hover:text-brand-light" {...dropLink}/>
                ))}
        </div>
    </div>
  )
}

export default Dropdown