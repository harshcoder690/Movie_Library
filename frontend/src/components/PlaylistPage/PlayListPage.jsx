import React, { useEffect, useState,useReducer } from "react";
import { PrivateListContext } from "../../contexts/Authcontext"; 
import Playlist from "./Playlist";
const PlaylistPage = () => {
  const deleteReducer = (state, action) => {
    switch (action.type) {
      case "SET_DELETE":
        return !state;

      default:
        return state;
    }
  };

  const [deleteItem, dispatchDelete] = useReducer(deleteReducer, true);
  console.log(deleteItem);
  const value = {
    deleteItem,
    dispatchDelete,
  };

  return (
    <PrivateListContext.Provider value={value}>
          <Playlist/>
    </PrivateListContext.Provider>
  );
};

export default PlaylistPage;
