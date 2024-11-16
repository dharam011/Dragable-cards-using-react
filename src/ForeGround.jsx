
import React, { useRef } from 'react'
import Cards from './components/Cards'


const ForeGround = () => {
  const data = [
  {
    desc:"lorem sdhd vijior sdjwoid fjoifew djewj ciejie sakji ewkdjiejw",
    fileSize :".9mb",
    close:true,
    tag:{
      isopen: true,
      tagTitle: "Download Now", TagColor:"green"
    }
  },
  {
    desc:"lorem sdhd vijior sdjwoid fjoifew djewj ciejie sakji ewkdjiejw",
    fileSize :".9mb",
    close:true,
    tag:{
      isopen: false,
      tagTitle: "Download Now", TagColor:"green"
    }
  },
  {
    desc:"lorem sdhd vijior sdjwoid fjoifew djewj ciejie sakji ewkdjiejw",
    fileSize :".9mb",
    close:false,
    tag:{
      isopen: true,
      tagTitle: "Download Now", TagColor:"green"
    }
  }];
 const ref = useRef(null);
  
  return (

    
    <div ref={ref}  className=' p-5 fixed top-0 left-0 z-[3] w-full h-screen flex gap-10 '>
      {data.map((item, index)=>(
       <Cards data={item} key={index} reference={ref}/>
      ))}
    
     </div>
     
  )
}

export default ForeGround