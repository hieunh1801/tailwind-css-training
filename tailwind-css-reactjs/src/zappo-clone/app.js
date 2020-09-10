// Clone https://www.zappos.com/
import React from "react";
import Header from "./components/layout/header";
import Dropdown from "./components/commons/dropdown";

const App = () => {
  return <div className="w-screen h-screen bg-gray-100 p-10">
    <Header />
    <Dropdown />

  </div>
}

export default App;