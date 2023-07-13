import React from 'react'
import { features } from '../constants'
export default function Features(){
  return (
    <section className='features'>
        <div className=' container flex flex-wrap gap-4 justify-ceter'>
            {
                features.map((feature,i)=>(
                    <article key={i} className='feature bg-less-dark p-[24px] rounded-xl flex-1 min-w-[32%]'>
                        <div className="text-2xl w-[48px] h-[48px] bg-dark flex items-center justify-center rounded-lg mb-[20px]">{feature.icon}</div>
                        <p className='font-[600] text-[16px] text-text'> {feature.title} </p>
                        <p className='leading-6'> {feature.details} </p>
                    </article>
                ))
            }
        </div>
    </section>
  )
}
