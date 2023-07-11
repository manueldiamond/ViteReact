import {vitelogo} from "../assets"

const navlinks=[
    navlink("Guide"),
    navlink("Config"), 
    navlink("Resources"),
    navlink("Version")
]

function navlink(text="",url="#"){
    return {text,url}
}
export default function Nav(){
    return( 
        <nav className="h-[5rem] flex w-[100%] justify-between px-[1.5rem] py-[1rem] fixed  ">
            <div className="flex gap-10">
                <a className="flex gap-[.5rem] items-center">
                    <img className="" src={vitelogo}/>
                    <h3 className>Vite</h3>
                </a>
                <button className=" flex items-center gao rounded-sm border-e-red-400 bg-zinc-900">
                    <span>Search</span> 
                    <span className="kbd border-gray-800">Ctrl + K</span>
                </button>
            </div>
            <div className="nav-list flex gap-10">{
                navlinks.map((link,i)=>(
                    <a href={link.url}>{link.text}</a>
                ))    }  
            </div>
        </nav>
    )
}