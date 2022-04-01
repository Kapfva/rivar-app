import React from 'react';
import Navbar from './layouts/Navbar';

import Table from './layouts/Table';


const User = ({name}) => {
	return (
		<div>
			<Navbar />
			<div className="container pt-5">
				{/* Fin Navbar  */}

				<h1></h1>
				<h2>Hare is your list of friends</h2>

				<div className="p-5">
					<Table headers="" list="" />
				</div>

				<h2>Other Users not on your friend´s list:</h2>
				<div className="p-5">
					<Table headers="" list="" />
				</div>
			</div>
		</div>
	);
};

export default User;
