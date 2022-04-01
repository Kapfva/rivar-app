import React from 'react';
import Navbar from './layouts/Navbar';

import Table from './layouts/Table';


const User = ({name}) => {
	return (
		<div>
			<Navbar />
			<div className="container pt-5">
				{/* Fin Navbar  */}

				<h1>José's profile</h1>
				<h2>Name:</h2>
                <h2>Email:</h2>
			</div>
		</div>
	);
};

export default User;
