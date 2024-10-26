import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Ajusta la ruta si es necesario

export default function CartWidget() {
    const { totalItems } = useCart(); // Obtén la cantidad total de ítems en el carrito

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

// import React from 'react';
// import { useCart } from '../context/CartContext'; // Ajusta la ruta si es necesario

// export default function CartWidget() {
//     const { totalItems } = useCart(); // Obtén la cantidad total de ítems en el carrito

//     return (
//         <>
//             <button className="bg-dark">
//                 <i className="bi bi-cart-check">({totalItems})</i>
//             </button>
//         </>
//     );
// }
