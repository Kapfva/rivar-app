import React, { Fragment, useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

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
			<nav className=" navbar-expand-lg navbar-light bg-light navbar">
				<div className="container-fluid">
					<div className="d-flex justify-content-end align-items-stretch">
						<li className="nav-item flex-fill">
							{
								<Link
									className="nav-link "
									activeclassname="active active-Link"
									to={'/friends-' + name}
								>
									Home
								</Link>
							}
						</li>
						<li className="nav-item flex-fill">
							{
								<Link className="nav-link " activeclassname="active active-Link" to="/">
									{(name = '')}
									Logout
								</Link>
							}
						</li>
					</div>
				</div>
			</nav>
			<div className="container">
				{/* Fin Navbar  */}

				<div className='p-5'>
					<Table headers="" list="" />
				</div>
			</div>
		</Fragment>
	);
};

export default Friends;
