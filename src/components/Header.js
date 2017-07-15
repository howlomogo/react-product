import React from 'react';

import logo from './../assets/logo.svg'

class Header extends React.Component {
	handleChange(e) {
		const title = e.target.value;
		this.props.changeTitle(title);
	}

	render() {
		return (
			<nav className="navbar navbar-toggleable-md navbar-light bg-faded">
				<div className="container">
					<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon">
						</span>
				  	</button>
				  	<a className="navbar-brand" href="#">Navbar</a>
				  	<div className="collapse navbar-collapse" id="navbarNav">
				  		<ul className="navbar-nav">
					  		<li className="nav-item active">
					  			<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
					  		</li>

					  		<li className="nav-item">
					  			<a className="nav-link" href="#">Features</a>
					  		</li>
					  		<li className="nav-item">
					  			<a className="nav-link" href="#">Pricing</a>
					  		</li>
					  	</ul>
					 </div>
				</div>
			</nav>
		);
	}
}

export default Header;