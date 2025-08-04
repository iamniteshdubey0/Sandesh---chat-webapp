import React from "react";
import ChatPage from "../sections/ChatPage";
import Navbar from "../components/global/Navbar";

const DashBoard = () => {
  return (
    <main>
      <Navbar></Navbar>
      <ChatPage />
    </main>
  );
};

export default DashBoard;
