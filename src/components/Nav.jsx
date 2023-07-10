import {vitelogo} from "../assets"

const navlinks=[
    navlink("Guide"),
    navlink("Config"),
    navlink("Resources"),
    navlink("Version")]
function navlink(text="",url="#"){
    return {text,url}
}
export default function Nav(){
    return(
        <nav className="px-1.5">
            <a className="flex gap-">
                <img src={vitelogo}/>
            </a>
            <button className="rounded-sm border-e-red-400">
               <span>Search</span> 
               <span>Ctrl + K</span>
            </button>

            <div className="nav-list flex gap-10">{
                navlinks.map((link,i)=>(
                    <a href={link.url}>{link.text}</a>
                ))    }  
            </div>
        </nav>
    )
}