import React, { useEffect, useState } from 'react';
import { useAuth } from "../../contexts/Authcontext";
import { MovieItem } from '../Homepage/MovieItem';
import { Navbar } from "../Navbar/Navbar";
import { ReactComponent as Loading } from "../../assets/loading.svg";
import { ListItem } from '../ListItem/ListItem';
const PublicPlaylist = () => {

    const { currentUser } = useAuth();
    const [list, setList] = useState([]);

    const [isloading, setloading] = useState(true);

    useEffect(() => {
        getPublic();
    }, [])

    const getPublic = async () => {
        const res = await fetch(`https://movielb.herokuapp.com/getPublicList`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + currentUser.accessToken,
            },
            mode: "cors",
        });

        const data = await res.json();
        setList(data);

        setloading(false);
    }
    let v = 2;
    return (<div>
        <Navbar val = {v}/>
        <div>
            {isloading ? <Loading /> : list.length === 0 ? "No list available" : list.map((item) => <ListItem item={item} />)}
        </div>
    </div>);
}

export default PublicPlaylist;