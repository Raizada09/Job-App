import { jobsApi } from '@/const'
import { setjobs, setloading } from '@/redux/jobslice';
import store from '@/redux/store';
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner';

function useGetAllJobs() {
      const dispatch=useDispatch();
      const {searchedquery,loading}=useSelector(store=>store.job)
      
    
     
    useEffect(()=>{
        const fetchalljobs=async ()=>{
          dispatch(setloading(true))
          try {
             const res=await axios.post(`${jobsApi}/getalljobs?keyword=${searchedquery}`,"",{ withCredentials:true})
             console.log(res);
            
             if(res.data.success){
              dispatch(setjobs(res.data.jobs))
             }
          } catch (error) {
            toast.error(error.response.data.message)
            console.log(error)
            
          }
          finally{
            dispatch(setloading(false))
          }
        }
    
        fetchalljobs();
    },[])
 
}

export default useGetAllJobs
