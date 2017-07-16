import React, { Component } from 'react';
import './Products.css';

import Product from './../../components/Product';

class Products extends Component {


	constructor(props) {
		super(props);
		this.state = {
			items:
			[
				{
					id: 1,
					name: "Skateboard",
					price: 60
				},
				{
					id: 2,
					name: "Scooter",
					price: 120
				},
				{
					id: 3,
					name: "BMX",
					price: 400
				},
				{
					id: 4,
					name: "Surfboard",
					price: 300
				}
			]
		}
	}

	render() {

		var listItems = this.state.items.map(function(item) {
			return (
				<Product id={item.id} name={item.name} price={item.price}></Product>
			);
		});

		console.log(listItems);



		return (
			<div>
				<h1>This is the Products Page</h1>
				{listItems}
			</div>
		)
	}
}

export default Products;