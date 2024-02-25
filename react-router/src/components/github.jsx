import { useState,useEffect } from "react"
function Github(){
    const [data,setData] = useState({})
    useEffect(() => {
    const fetchUser = () => {
        fetch("https://api.github.com/users/Ashishlakhimale23", {
            headers: {
                Authorization: "token"
            }
        })
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            setData(res);
        })
        .catch((error) => console.error(error));
    };

    fetchUser();
}, []);


    return(

    <div cla>
        {data.login}
        <img src={data.avatar_url} alt="" />
    </div>
    )

}
export default Github
