import React, { Component } from 'react';
import axios from 'axios';


import './Products.css';

import Product from './../../components/Product';

class Products extends Component {


	constructor(props) {
		super(props);

		this.state = {
			items: []
		};

    	this.searchFilter = this.searchFilter.bind(this);
	}

	componentDidMount() {
		axios.get('./mockdata.json')
		.then(res => {
			const newarray = res.data.map((obj) => obj);

			this.setState({items: newarray});
			console.log(newarray);
		});
	}


	searchFilter() {
		console.log("Clicked Button");
	}

	render() {

		var listItems = this.state.items.map(function(item) {
			return (
				<Product id={item.id} name={item.product} price={item.money}></Product>
			);
		});

		var newitems = this.state.newitems;

		console.log(this.state.newitems);



		return (
			<div>
				<input type="text"></input>
				<button onClick={this.searchFilter}>gyugyj</button>
				<h1>This is the Products Page</h1>
				{listItems}
			</div>
		)
	}
}

export default Products;