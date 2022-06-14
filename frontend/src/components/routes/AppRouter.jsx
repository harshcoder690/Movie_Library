import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../Homepage/HomePage";
import { Main } from "../Main";
import { LoginBox } from "../Signup/LoginBox";
import { Signupbox } from "../Signup/Signupbox";
import { Navbar2 } from "../Navbar/Navbar2";
import PlaylistPage from "../PlaylistPage/PlayListPage";
import PublicPlaylistPage from "../PlaylistPage/PublicPlayListPage";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginBox />} />
      <Route path="/signup" element={<Signupbox />} />
      <Route path="/" element={<Main />} />
      <Route path="/PrivateList" element={<PlaylistPage />} />
      <Route path="/PublicList" element={<PublicPlaylistPage />} />
      <Route path="/Home" element={<Navbar2 />} />
    </Routes>
  );
};
