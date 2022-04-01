import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './components/Main';
import Friends from './components/Friends';
import User from './components/User';
import NotFound from './components/NotFound';

var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	database: 'rivar-app',
	user: 'root',
	password: '',
});

connection.connect(function(error){
  if(error){
    throw error;
  }
  else{
    console.log('connection succeed')
  }
});

connection.end();

export default class App extends Component {

	componentDidMount() {}
	render() {
		return (
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/friends" element={<Friends />} />
				<Route path="/user" element={<User />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		);
	}
}
