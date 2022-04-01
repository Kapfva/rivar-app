import React from 'react';
import Register from '../components/Register';
import Login from '../components/Login';
import '../css/Main.css';

const Main = () => {
	return (
		<div className="green-back p-5 ">
			<h1 className="title-white">Welcome!</h1>
			<div className="p-5 d-flex align-self-baseline">
				<Register />
				<Login />
			</div>
		</div>
	);
};

export default Main;
