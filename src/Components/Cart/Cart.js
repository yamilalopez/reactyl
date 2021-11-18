import { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext';
import carrito from '../../img/carrito.png'
import './Cart.css';
	

	function Cart() {
	const cartContext = useContext(CartContext);
	const {cart} = cartContext;
	const pxq = (a, b) => {
		return a * b;
	};

	let total = 0;
	const totalPxQ = (a, b) => {
		let sum = a * b;
		total = total + sum;
		return total;
	};

	// total = cart.map((item) => totalPxQ(item.cantidad, item.item.precio));

	let cartMessage = true;
	if (cart.length > 0) {
		cartMessage = false;
	}

	const finishBuy = () => {
		alert(`Gracias por adquirir nuestros productos`);
	};

	return (
		<section>
			<div>
				{cartMessage ? (
					<div className="cartTitle">
						<img src={carrito} className="imgCarrito" />
						<h2>Tu carrito está vacío</h2>
						<Link to="/products">
							<button className="botonAgregar m-1 ">
								Elegir producto
							</button>
						</Link>
					</div>
				) : (
					<div>
						<ul>
							{cart.map((item) => (
								<li key={item.nombre} className="produc__add">
									Producto: {item.nombre} <br></br>
									Cantidad: {item.cantidad} <br></br>
									Precio: $ {item.precio} <br></br>
									{/* Total: ${pxq(item.cantidad, item.item.precio)} <br></br> */}
									<button
										// onClick={() => clearItem(item.item.id)}
										className="btn m-1"
									>
										{" "}
										X{" "}
									</button>
								</li>
							))}
						</ul>
						<h3 className="total">
							Total Carrito: $ {total[total.length - 1]}{" "}
						</h3>

						<div className="btnCart">
							<button
								// onClick={() => clearCart()}
								className="botonAgregar m-1"
							>
								Vaciar Carrito
							</button>
							<button
								onClick={() => finishBuy()}
								className="botonAgregar m-1"
							>
								Finalizar Compra
							</button>
						</div>
					</div>
				)}
			</div>
		</section>
	);
}

	export default Cart;