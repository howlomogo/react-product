import React, { Component } from 'react';
import axios from 'axios';
import './Home.css';

class Home extends Component {

	render() {
		return (
			<div>
				<h1>This is the Home Page</h1>
				<h4>To view the product page please click below</h4>
				<button>Link to Product Page</button>
			</div>
		)
	}
}

export default Home;