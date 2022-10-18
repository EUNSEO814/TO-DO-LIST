import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import All from "./Pages/All";
import Completed from "./Pages/Completed";
import Important from "./Pages/Important";
import Trash from "./Pages/Trash";
import Title from "./Components/Title";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Sidebar />
          <section className="features">
            <Title />
            <Routes>
              <Route path="/All" element={<All />}></Route>
              <Route path="/Completed" element={<Completed />}></Route>
              <Route path="/Important" element={<Important />}></Route>
              <Route path="/Trash" element={<Trash />}></Route>
            </Routes>
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
