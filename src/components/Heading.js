import React, { useState } from "react";
import { NavLink, Redirect } from "react-router-dom";

export default function Heading() {
	const [ status, setStatus ] = useState(false);
	const redirectToSignup = () => {
		setStatus(true);
	};
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="/#">
					Navbar
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						{/* <li className="nav-item">
							<Link className="nav-link" to="/home">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/music">
								Music
							</Link>
						</li> */}
						<li className="nav-item">
							<NavLink to="/music" activeClassName="bg-primary nav-link">
								Music
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to={{ pathname: "/home" }} activeClassName="bg-primary nav-link">
								Homepage
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/v2" activeClassName="bg-primary nav-link">
								Version 2
							</NavLink>
						</li>
						{!status && (
							<li className="nav-item">
								<div onClick={() => redirectToSignup()}>Logout</div>
							</li>
						)}
						{status && <Redirect to="/signup" />}
					</ul>
					<form className="form-inline my-2 my-lg-0">
						<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
						<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
							Search
						</button>
					</form>
				</div>
			</nav>
		</div>
	);
}
