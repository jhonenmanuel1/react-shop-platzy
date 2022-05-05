import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import AppContext from '../context/AppContext';

const ProductItem = (product) => {
	const {addToCart}= useContext(AppContext);

	const handleClick = item => {
		addToCart(item);
	}

	return (
		<div className="ProductItem">
			<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
			<div className="product-info">
				<div>
					<p>$120,00</p>
					<p>Bike</p>
				</div>
				<figure onClick={()=> handleClick(product)} >
					<img src={addToCartImage} alt="" />
				</figure>
				
			</div>
		</div>
	);
}

export default ProductItem;
