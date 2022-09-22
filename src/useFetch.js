//This is a custom hook . Here we will put all the code of fetching a file 
//and all the error handling and stuff and then this file can be simply imported
//and used in any other file where we need to fetch an API

//we will create a function which will itself be the hook
//A custom hook in react must start with 'use'

import { useState , useEffect } from "react";

const useFetch = (url) => {
    // const [blogs , setBlogs] = useState(null)
    const [data , setData] = useState(null)
    const[isPending , setIsPending]= useState(true)
    const[error , setError] = useState(null)

    useEffect(()=>{ 
        setTimeout(()=>{
            fetch(url) 
            .then((res)=>{
                if(!res.ok){
                    throw Error('could not fetch the data for that resource')
                }
                return res.json() 
            })
            .then((data)=>{ //this parameter is local and it can be called data , it doesnt matter that a state named data already exists
                setData(data)
                setIsPending(false); 
                setError(null)
            })
            .catch((err)=>{ 
                setError(err.message)
                setIsPending(false)
            })

        }, 2000)
    },[url]); //whenever the url changes , the code is re-rendered to get the data wrt the newly passed api

    return {data , isPending , error};

}

export default useFetch;
 