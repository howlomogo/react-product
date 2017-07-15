import React from 'react';

import Footer from './Footer';
import Header from './Header';

class Test extends React.Component {

	constructor() {
		super();
		this.state = {
			title: 'Welcome'
		};
	}


	changeTitle(title) {
		this.setState({title});
	}


	render() {
		return (
			<div>
				<Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
				<Footer />
			</div>
		);
	}
}

export default Test;