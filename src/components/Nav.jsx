import {vitelogo} from "../assets"
import { navlinks,logoUrl ,name } from "../constants"

export default function Nav(){
    let top=true
    return( 
        <nav className={"h-[4rem]  flex w-[100%] justify-between px-[2rem] py-[.7rem] fixed  z-50" + (top?" border-b-2  border-b-black bg-dark":"")}>
            <div className="flex gap-7 ">
                <a className="flex gap-[.5rem] items-center">
                    <img className="h-[1.5rem]" src={logoUrl}/>
                    <h3>{name}</h3>
                </a>
                <button className="px-3 flex items-center gap-4 rounded-lg border-e-red-400 text-gray-text bg-darker border-0 hover:border-2 border-brand transition-[border-width] duration-1000">
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
            
            <div className="nav-list flex gap-10 items-center">{
                navlinks.map((link,i)=>(
                    <a className={`flex gap-1 ${link.links?"hover:text-less-dark":"hover:text-brand-light"} `} key={i} href={link.url}>{link.text}
                     
                    {link.links&&(
                    <svg width="12.5" xmlns="http://www.w3.org/2000/svg" aria-hidden="false" focusable="" viewBox="0 0 24 24" className="text-icon" >
                        <path fill="currentColor"  stroke="currentColor"  
                        d="M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"></path>
                        </svg>
                        )}
                    </a>
                ))}  
            </div>
        </nav>
    )
}