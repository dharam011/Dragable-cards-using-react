import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from 'framer-motion';



const Card = ({data ,reference}) => {
  return (
    <motion.div  drag dragConstraints ={reference} whileDrag={{scale:1.2}} dragElastic={1.2} className=' relative flex-shrink-0  text-white px-6 h-60 py-8 w-52  rounded-[45px] bg-zinc-900 overflow-hidden'> 

      <FaRegFileAlt />
      <p className='my-3 text-xs leading-4 tracking-tight font-light'>{data.desc}</p>
      <div className=' footer bottom-0 left-0 w-full'>
        <div className='flex item-center justify-between px-2 py-10 mb-2'> 
        <h5>{data.fileSize}</h5>
        {
          data.close ? <IoClose className='bg-zinc-800 p-1 rounded-full 'size="1.5em" color='White'/> :<MdOutlineFileDownload className='bg-zinc-800 p-1 rounded-full 'size="1.5em" color='White'/> 
        }
         
        
  
</div >
{
  data.tag.isopen &&(
    <div className='tag bg-green-700 flex items-center py-4 justify-center w-full absolute bottom-0 left-0'>
  <h3 className='text-center text-white'>
  
    </h3>
    </div>
  )
}


</div>
</motion.div>

  )
}

export default Card