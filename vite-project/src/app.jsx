import { Route, Routes } from "react-router-dom";
import React, { useState } from 'react';

import UserInfo from "./components/UserInfos";
import FormBlog from "./components/formblog";

function App() {
  const [input_name, setInputName] = useState('michel');
  return (
    <Routes>
      <Route path="/" element={<FormBlog input_name={input_name} setInputName={setInputName} />} />
      <Route path="/userInfos" element={<UserInfo />} />
    </Routes>
  );
}

export default App;