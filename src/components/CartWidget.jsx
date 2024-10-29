import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function CartWidget() {
    const { totalItems } = useCart();

    return (
        <>
            <Link to="/cart">
                <button className="bg-dark">
                    <i className="bi bi-cart-check">({totalItems})</i>
                </button>
            </Link>
        </>
    );
}
