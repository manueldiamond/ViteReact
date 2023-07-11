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
        <nav className="h-[5rem]  flex w-[100%] justify-between px-[1.5rem] py-[1rem] fixed  border-b-2 border-b-black">
            <div className="flex gap-10">
                <a className="flex gap-[.5rem] items-center">
                    <img className="" src={vitelogo}/>
                    <h3 className>Vite</h3>
                </a>
                <button className="px-5 flex items-center gap-4 rounded-lg border-e-red-400 bg-zinc-950">
                    <span>Search</span> 
                    <span className="kbd border-zinc-700 border-2 rounded-s px-1">Ctrl K</span>
                </button>
            </div>
            <div className="nav-list flex gap-10 items-center">{
                navlinks.map((link,i)=>(
                    <a key={i} href={link.url}>{link.text}</a>
                ))    }  
            </div>
        </nav>
    )
}