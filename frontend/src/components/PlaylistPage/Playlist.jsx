import React,{useEffect,useState}from 'react';
import { useAuth } from "../../contexts/Authcontext";
import { MovieItem } from '../Homepage/MovieItem';
const Playlist = () => {

    const {currentUser} = useAuth();
    const [list,setList] = useState([]); 

    useEffect(() =>{
           getPrivate();
    },[])
    
    const getPrivate = async() =>{
        const res = await fetch(`http://localhost:5000/getPrivateList/${currentUser.uid}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + currentUser.accessToken,
            },
            mode: "cors",
        });

        const data = await res.json();
        console.log(data)
        setList(data);
    }

    return (<div>
        {list.length===0 ? "No list available" : list.map((item) => <MovieItem item = {item}/>)}
    </div>);
}

export default Playlist;