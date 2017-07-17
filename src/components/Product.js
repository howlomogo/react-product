import React from "react";
import './Product.css';

class Product extends React.Component {

	render() {
		return (
			<div className="product--container">
				<h3>{this.props.id}</h3>
				<h3>{this.props.name}</h3>
				<h3>{this.props.price}</h3>

			</div>
		);
	}
}

export default Product;