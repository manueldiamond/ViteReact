import React from 'react'
import { sponsors,sponsorMessage,sponsorActions} from '../constants'
import Button from "./Button"

const Sponsors = () => {
   
  return (
    <section className=' mt-[112px] px-[24px] py-[88px]  border-black border-y-2'>
        <div className='container flex flex-col gap-10 ' >
            <div className='flex flex-col gap-2 justify-center items-center'>
                <div className="heart w-[28px]">
                    <svg className='fill-gray-text' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12,22.2c-0.3,0-0.5-0.1-0.7-0.3l-8.8-8.8c-2.5-2.5-2.5-6.7,0-9.2c2.5-2.5,6.7-2.5,9.2,0L12,4.3l0.4-0.4c0,0,0,0,0,0C13.6,2.7,15.2,2,16.9,2c0,0,0,0,0,0c1.7,0,3.4,0.7,4.6,1.9l0,0c1.2,1.2,1.9,2.9,1.9,4.6c0,1.7-0.7,3.4-1.9,4.6l-8.8,8.8C12.5,22.1,12.3,22.2,12,22.2zM7,4C5.9,4,4.7,4.4,3.9,5.3c-1.8,1.8-1.8,4.6,0,6.4l8.1,8.1l8.1-8.1c0.9-0.9,1.3-2,1.3-3.2c0-1.2-0.5-2.3-1.3-3.2l0,0C19.3,4.5,18.2,4,17,4c0,0,0,0,0,0c-1.2,0-2.3,0.5-3.2,1.3c0,0,0,0,0,0l-1.1,1.1c-0.4,0.4-1,0.4-1.4,0l-1.1-1.1C9.4,4.4,8.2,4,7,4z"></path>
                    </svg>
                </div>
                <p className='text-[16px] font-[500] w-[320px] text-center'>{sponsorMessage}</p>
            </div>
            <div className='rounded-3xl flex flex-col gap-1 overflow-clip '>
                {Object.keys(sponsors).map((level)=>(
                    <>
                        <p className='text-[16px] font-[600] bg-less-dark text-center py-2'>{`${level} Sponsors`}</p>
                        <div className='flex flex-wrap gap-1 '>
                            {
                            sponsors[level].map((sponsor)=>(
                                <article key={sponsor.name}  className={`flex-1 bg-less-dark 
                                ${(level==="Gold")?"h-[112px] min-w-[200px]":"h-[200px] min-w-[320px]"}
                                transition-colors  duration-300 hover:bg-white `} >
                                    <a className="invert w-[100%]       h-[100%] flex grayscale items-center transition-[filter] justify-center hover:filter-none" href={sponsor.url}>
                                        <img className="max-w-[192px] max-h-[56px]" src={`/sponsors/${sponsor.img}`}/>
                                    </a>
                                </article>
                            ) )
                            
                            }
                        </div>
                    </>
                ))}
            </div>
            <div className='flex justify-center gap-10 flex-wrap'> 
                {
                    sponsorActions.map((action,key)=>(
                        <Button className="hover:text-sponsor hover:border-sponsor" {...action} key={key} />    
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Sponsors