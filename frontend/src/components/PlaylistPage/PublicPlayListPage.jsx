import React, { useEffect, useState,useReducer } from "react";
import { PublicListContext } from "../../contexts/Authcontext";
import { PublicPlaylist } from "./PublicPlaylist";
const PublicPlaylistPage = () => {
  const deletePublicReducer = (state, action) => {
    switch (action.type) {
      case "SET_DELETE":
        return !state;

      default:
        return state;
    }
  };

  const [deletePublicItem, dispatchPublicDelete] = useReducer(deletePublicReducer, true);
  const value = {
    deletePublicItem,
    dispatchPublicDelete,
  };

  return (
    <PublicListContext.Provider value={value}>
       <PublicPlaylist/>
    </PublicListContext.Provider>
  );
};

export default PublicPlaylistPage;
