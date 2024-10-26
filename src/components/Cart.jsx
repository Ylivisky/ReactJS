import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function Cart() {
    const { cartItems, clearCart, total, removeItem } = useCart();

    return (
        <div className="container my-5">
            <h2>Tu Carrito</h2>
            {cartItems.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                <div className="list-group">
                    {cartItems.map((item, index) => (
                        <div className="list-group-item d-flex justify-content-between align-items-center" key={`${item.id}-${index}`}>
                            <div>
                                <h5>{item.name}</h5>
                                <p>Cantidad: {item.quantity}</p>
                                <p>Precio Total: ${item.price * item.quantity}</p> {/* Precio total por el número de unidades */}
                            </div>
                            <button className="btn btn-danger" onClick={() => removeItem(item.id)}>Eliminar</button>
                        </div>
                    ))}
                </div>
            )}
            <h3>Total: ${total}</h3>
            <Link to="/checkout" className="btn btn-primary">Proceder al Checkout</Link>
            <button className="btn btn-secondary" onClick={clearCart}>Limpiar Carrito</button>
        </div>
    );
}
