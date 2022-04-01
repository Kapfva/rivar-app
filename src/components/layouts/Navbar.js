import React from 'react';
import { Link } from 'react-router-dom';

import '../../css/Navbar.css';

const Navbar = ({ name }) => {
	return (
		<div>
			<nav className="navbar-expand-lg navbar-green navbar">
				<div className="container-fluid">
					<div className="d-flex justify-content-end align-items-stretch">
						<li className="nav-item flex-fill">
							{
								<Link
									className="nav-link navbar-items-white "
									activeclassname="active active-Link"
									to={'/friends-' + name}
								>
									Home
								</Link>
							}
						</li>
						<li className="nav-item flex-fill">
							{
								<Link
									className="nav-link navbar-items-white"
									activeclassname="active-Link"
									to="/"
								>
									{(name = '')}
									Logout
								</Link>
							}
						</li>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
