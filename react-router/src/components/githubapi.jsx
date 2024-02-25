import { useEffect, useState } from "react"

function GithubApi(){
    const [data,setData] = useState({})
    useEffect(()=>{
         fetch("https://api.github.com/Ashishlakhimale23",{Headers:{
            Authorization : "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"

        }}).then((res)=>res.json())
        .then((res)=>console.log(res))
        .then((res)=>setData(res))
        .then(()=>console.log(data))

    },[])
    return data
  
}

export default GithubApi