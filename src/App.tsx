import React from "react";
import "./App.css";

import HomeScreen from "./screens/HomeScreen";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <HomeScreen />
    </div>
  );
}

export default App;
