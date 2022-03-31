import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'

import Main from "./components/Main";
import Friends from "./components/Friends";
import User from "./components/User";
import NotFound from "./components/NotFound";


export default class App extends React.Component {
  render(){
    return(
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/friends" element={<Friends/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    );
  }
}
