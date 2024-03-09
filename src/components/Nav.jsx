
import { useEffect } from "react"
import {vitelogo} from "../assets"
import { navlinks,logoUrl ,name } from "../constants"
import Dropdown from "./Dropdown"
import Link from "./Link"
import { useState } from "react"

export default function Nav(){
    const [top,setTop] = useState(false)
    
    useEffect(()=>{
        const handleScroll = () => {
            setTop(window.scrollY !== 0);
          };
        // Add the scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return( 
        <nav className={`h-[4rem]  flex w-[100%] justify-between px-[2rem] py-[.7rem] fixed  z-50 transition-colors ${top?" border-b-2  border-b-black bg-dark":"border-[rgba(0,0,0,0)]"}`}>
            <div className="flex gap-7 ">
                <a className="flex gap-[.5rem] items-center">
                    <img className="h-[1.5rem]" src={logoUrl}/>
                    <h3>{name}</h3>
                </a>
                <button className=" max-md:hidden px-3 flex items-center gap-4 rounded-lg border-e-red-400 text-gray-text bg-darker border-0 hover:border-2 border-brand transition-[border-width] duration-1000">
                    <span className="flex gap-2  items-center">
                        <svg  width="15" height="20" viewBox="0 0 20 20" aria-label="search icon">
                        <path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                        </path>
                            </svg> 
                        <span>Search</span> 
                    </span>
                    
                    <span className="kbd border-less-dark border-2 rounded-s px-1 flex items-center h-fit leading-5">Ctrl K</span>
                </button>
            </div>
            
            <div className="nav-list max-md:hidden flex gap-10 items-center">
                { navlinks.map((link)=>( link.links?<Dropdown key={link.url} {...link}/>:<Link key={link.url} {...link}/>  ))}  
            </div>
        </nav>
    )
}