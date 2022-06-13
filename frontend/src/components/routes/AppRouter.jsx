import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../Homepage/HomePage";
import { Main } from "../Main";
import Playlist from "../PlaylistPage/Playlist";
import PublicPlaylist from "../PlaylistPage/PublicPlaylist";
import { LoginBox } from "../Signup/LoginBox";
import { Signupbox } from "../Signup/Signupbox";
import { Navbar } from "../Navbar/Navbar";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginBox />} />
      <Route path="/signup" element={<Signupbox />} />
      <Route path="/" element={<Main />} />
      <Route path="/PrivateList" element={<Playlist />} />
      <Route path="/PublicList" element={<PublicPlaylist />} />
      <Route path="/Home" element={<Navbar />} />
      <Route path="/search" element={<HomePage />} />
    </Routes>
  );
};
