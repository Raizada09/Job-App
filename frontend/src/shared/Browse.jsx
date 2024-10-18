import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import store from '@/redux/store';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import { setsearchquery } from '@/redux/jobslice';
import { motion } from 'framer-motion';

function Browse() {
  useGetAllJobs();
  const {alljobs}=useSelector(store=>store.job);
  const dispatch=useDispatch();

  useEffect(()=>{
    return ()=>{
      dispatch(setsearchquery(""));
    }
  })
  return (
    <div>
      <Navbar/>
      <div className='max-w-7xl mx-auto'>
      <h1 className='my-5 text-lg font-bold ml-1'>Search Results ({alljobs.length})</h1>
      <div className='grid grid-cols-3 gap-4'>
      {
        alljobs.map((job)=>{
            return(
              <motion.div
              initial={{opacity:0,x:100}}
              animate={{opacity:1,x:0}}
              exit={{opacity:0,x:-100}}
              transition={{duration:0.3}}
              key={job._id}>
                <Job job={job}/>
              </motion.div>
            )
        })
      }

      </div>
      </div>


      <Footer/>
    </div>
  )
}

export default Browse