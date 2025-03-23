import React from "react";
import Leaderboard from "./components/Leaderboard";
import Footer from "./Footer/Footer";
import Header from "./header/header";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center flex flex-col ">
      <Header/>
      <Leaderboard />
      <Footer/>
      
    </div>
  );
};

export default App;
