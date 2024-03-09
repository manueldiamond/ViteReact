import { viteLarge} from "../assets";
import {name,heroText,heroParagraph,heroActions} from "../constants"
import Button from "./Button";

export default function  Hero(){
  return(
    <main className="hero" >
      <div className=" container flex justify-between items-center pt-[7.5rem] pb-[64px]">
        <div className="main ">
          <h1 className=" max-md:text-center z-50 mb-5">
            <div className=" bg-clip-text md:w-min hero-text-gradient text-transparent">{name}</div>
            {heroText}
          </h1>
    
          <p className="text-[1.5rem] font-[500] leading-8">
            {heroParagraph}
          </p>

          <br/> 
          <div className="flex max-md:justify-center">
            <div className="actions flex gap-3">
              {heroActions.map((action,i)=>(
                <Button {...action} key={i}/>
              ))}
            </div>
          </div>
        </div>
        
        <div className="max-md:hidden w-[50%] flex justify-center items-center">
          <div className="relative z-1 flex w-[320px]">
            <div className="hero-gradient w-full h-full absolute -z-1 rounded-full blur-3xl"></div>
            <img className="" src={viteLarge} alt="Vite"></img>

          </div>
        </div>     
      </div>

    </main>
  )
}

