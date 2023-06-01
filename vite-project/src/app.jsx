import { Route, Routes } from "react-router-dom";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import UserInfo from "./components/UserInfos";
import FormBlog from "./components/formblog";
import TodoList from "./components/TodoList";
import Meteo from "./components/Meteo";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  const [input_name, setInputName] = useState('michel');
  return (
    <Routes>
      <Route path="/" element={<FormBlog input_name={input_name} setInputName={setInputName} />} />
      <Route path="/userInfos" element={<UserInfo />} />
      <Route path="/TodoList" element={<TodoList />} />
      <Route path="/Meteo" element={<Meteo />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;