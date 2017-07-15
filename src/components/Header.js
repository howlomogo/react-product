import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import Home from './../pages/Home/Home';
import About from './../pages/About/About';

class Header extends React.Component {
	handleChange(e) {
		const title = e.target.value;
		this.props.changeTitle(title);
	}

	render() {
		return (
			<div>
				<nav className="navbar navbar-toggleable-md navbar-light bg-faded">
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
				</nav>

		        <Router>
		          <div>
		            <ul>
		              <li><Link to="/">Home</Link></li>
		              <li><Link to="/about">About</Link></li>
		            </ul>

		            <hr/>

		            <Route exact path="/" component={Home}/>
		            <Route path="/about" component={About}/>
		          </div>
		        </Router>
		    </div>

		);
	}
}

export default Header;