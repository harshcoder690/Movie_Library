import React, { useEffect, useState,useContext } from "react";
import { useAuth } from "../../contexts/Authcontext";
import { Navbar } from "../Navbar/Navbar";
import { ReactComponent as Loading } from "../../assets/loading.svg";
import { ListItem } from "../ListItem/ListItem";
import { PrivateListContext } from "../../contexts/Authcontext";
const Playlist = () => {
  const { deleteItem, dispatchDelete } = useContext(PrivateListContext);
  const { currentUser } = useAuth();
  const [list, setList] = useState([]);

  const [isloading, setloading] = useState(true);

  useEffect(() => {
    getPrivate();
  }, [deleteItem]);

  const getPrivate = async () => {
    const res = await fetch(
      `https://movielb.herokuapp.com/getPrivateList/${currentUser.uid}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          Authorization: "Bearer " + currentUser.accessToken,
        },
        mode: "cors",
      }
    );

    const data = await res.json();
    setList(data);

    setloading(false);
  };
  return (
      <div>
        <Navbar />
        <div>
          {isloading ? (
            <Loading />
          ) : list.length === 0 ? (
            "No list available"
          ) : (
            list.map((item) => <ListItem item={item} />)
          )}
        </div>
      </div>
  );
};

export default Playlist;
