import React, { Component } from 'react';

const NavBar = (props) => {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<a className="navbar-brand mb-0 h1" href="#">
				Navbar
				<span className="badge badge-pill badge-success">{props.totalCounter}</span>
			</a>
		</nav>
	);
};

export default NavBar;
