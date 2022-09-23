//This is a custom hook . Here we will put all the code of fetching a file 
//and all the error handling and stuff and then this file can be simply imported
//and used in any other file where we need to fetch an API

//we will create a function which will itself be the hook
//A custom hook in react must start with 'use'

//Now we will get an error when we immediately shift between new blog and home 
//Error is beacause when we click home , fetching starts but if we suddenly click on new blog , the fetch is till going on
//and it tries to display results on the screen but now the HOME component is unmounted hence error occurs.
//to resolve this -> we will use CleanUp function , we just have to return it . WHEN THE COMPONENT WHICH IS USING THE USEEFFECT HOOK UNMOUNTS , THIS CLEANUP FUNCTION FIRES 
//we will also create 


import { useState , useEffect } from "react";

const useFetch = (url) => {
    // const [blogs , setBlogs] = useState(null)
    const [data , setData] = useState(null)
    const[isPending , setIsPending]= useState(true)
    const[error , setError] = useState(null)

    useEffect(()=>{ 

        //we will create an ABORT CONTROLLER , to stop the fetch when the state changes
        const abortCont = new AbortController();// we can associate abort controller with a particular fecth request
        //to associate we have to give in fetch argument -> signal : abortCont.signal

        setTimeout(()=>{
            fetch(url , {signal : abortCont.signal}) 
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
                if(err.name === 'AbortError'){
                    console.log('fetch aborted')
                }else{
                    setError(err.message)
                    setIsPending(false)
                }
            })

        }, 1000)

        //CLEANUP , this runs when the component using this useEffect is unmounted 
        return ()=> abortCont.abort();
        //aborts whatever fetch it is associated with
        //but when we abort the fetch , an error is given by react and when we are catching the error above , we are changing some states and hence again we are trying to change the state in the unmounted component 
        //which is again the same problem .Hence we have to prevent the states from changing when we catch a particular error which is AbortError

    },[url]); //whenever the url changes , the code is re-rendered to get the data wrt the newly passed api

    return {data , isPending , error};

}

export default useFetch;
 