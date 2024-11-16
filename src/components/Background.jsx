import React from 'react'

const Background = () => {
  return (
    <>
    <div className='fixed w-full h-screen z-[2]'>
        <div className='w-full absolute py-10  flex justify-center text-zinc-600 text-xl font-semibold'> 
        <h1>Documents.</h1>
      </div>
        <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tight font-semibold text-zinc-900'>Docs.</h1>
        </div> </>
  )
}

export default Background