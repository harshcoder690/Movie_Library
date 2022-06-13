import React, { useEffect, useState,useContext } from "react";
import { useAuth } from "../../contexts/Authcontext";
import { Navbar } from "../Navbar/Navbar";
import { ReactComponent as Loading } from "../../assets/loading.svg";
import { ListPublicItem } from "../ListItem/ListtPublicItem";
import { PublicListContext } from "../../contexts/Authcontext";
export const PublicPlaylist = () => {
  const { deletePublicItem, dispatchPublicDelete } = useContext(PublicListContext);
  const { currentUser } = useAuth();
  const [list, setList] = useState([]);

  const [isloading, setloading] = useState(true);

  useEffect(() => {
    getPublic();
  }, [deletePublicItem]);

  const getPublic = async () => {
    const res = await fetch(`https://movielb.herokuapp.com/getPublicList`, {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        Authorization: "Bearer " + currentUser.accessToken,
      },
      mode: "cors",
    });

    const data = await res.json();
    setList(data);

    setloading(false);
  };
  return (
      <div>
        <Navbar/>
        <div>
          {isloading ? (
            <Loading />
          ) : list.length === 0 ? (
            "No list available"
          ) : (
            list.map((item) => <ListPublicItem item={item} />)
          )}
        </div>
      </div>
  );
};

