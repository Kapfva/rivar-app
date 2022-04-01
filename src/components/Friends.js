import React, { Fragment, useState, useEffect } from 'react';


import Navbar from './layouts/Navbar';

import Table from './layouts/Table';


const Friends = ({ id, name, listFriends }) => {
	const [friends, setfriends] = useState([]);
	useEffect(() => {
		const getBooks = () => {
			fetch('');
		};
	}, []);

	return (
		<Fragment>
			<Navbar/>
			<div className="container pt-5">
				{/* Fin Navbar  */}

                <h1>Hello, Steve!</h1>
                <h2>Here is your list of friends</h2>

				<div className='p-5'>
					<Table headers="" list="" />
				</div>

                <h2>Other Users not on your friend´s list:</h2>
                <div className='p-5'>
					<Table headers="" list="" />
				</div>
			</div>
		</Fragment>
	);
};

export default Friends;
