import { Route, Routes } from "react-router-dom";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import UserInfo from "./components/UserInfos";
import FormBlog from "./components/formblog";
import TodoList from "./components/TodoList";

function App() {
  const [input_name, setInputName] = useState('michel');
  return (
    <Routes>
      <Route path="/" element={<FormBlog input_name={input_name} setInputName={setInputName} />} />
      <Route path="/userInfos" element={<UserInfo />} />
      <Route path="/TodoList" element={<TodoList />} />
    </Routes>
  );
}

export default App;