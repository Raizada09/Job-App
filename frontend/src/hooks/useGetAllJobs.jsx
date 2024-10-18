import { jobsApi } from '@/const'
import { setjobs } from '@/redux/jobslice';
import store from '@/redux/store';
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner';

function useGetAllJobs() {
      const dispatch=useDispatch();
      const {searchedquery}=useSelector(store=>store.job)
    
     
    useEffect(()=>{
        const fetchalljobs=async ()=>{
          try {
             const res=await axios.post(`${jobsApi}/getalljobs?keyword=${searchedquery}`,"",{ withCredentials:true})
            
             if(res.data.success){
              dispatch(setjobs(res.data.jobs))
             }
          } catch (error) {
            toast.error(error.response.data.message)
           
          }
        }

        fetchalljobs();
    },[])
 
}

export default useGetAllJobs