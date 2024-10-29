// import { useCart } from '../context/CartContext';
// import { Link } from 'react-router-dom';

// export default function Cart() {
//     const { cartItems, clearCart, total, removeItem } = useCart();

//     return (
//         <div className="container my-5">
//             <h2>Tu Carrito</h2>
//             {cartItems.length === 0 ? (
//                 <p>El carrito está vacío.</p>
//             ) : (
//                 <div className="list-group">
//                     {cartItems.map((item, index) => (
//                         <div className="list-group-item d-flex justify-content-between align-items-center" key={`${item.id}-${index}`}>
//                             <div>
//                                 <h5>{item.name}</h5>
//                                 <p>Cantidad: {item.quantity}</p>
//                                 <p>Precio Total: ${item.price * item.quantity}</p>
//                             </div>
//                             <button className="btn btn-danger" onClick={() => removeItem(item.id)}>Eliminar</button>
//                         </div>
//                     ))}
//                 </div>
//             )}
//             <h3>Total: ${total}</h3>
//             <Link to="/checkout" className="btn btn-primary">Proceder al Checkout</Link>
//             <button className="btn btn-secondary" onClick={clearCart}>Limpiar Carrito</button>
//         </div>
//     );
// }
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function Cart() {
    const { cartItems, clearCart, total, removeItem, decreaseItemQuantity } = useCart();
    const [quantityToRemove, setQuantityToRemove] = useState({});

    const handleQuantityChange = (id, value) => {
        setQuantityToRemove((prev) => ({ ...prev, [id]: Number(value) }));
    };

    return (
        <div className="container my-5">
            <h2>Tu Carrito</h2>
            {cartItems.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                <div className="list-group">
                    {cartItems.map((item) => (
                    <div className="row no-gutters" key={item.id}>
                        <div className="col-md-4">
                            <img src={item.image} style={{height: "150px", width: "auto"}} className="card-img" alt={item.name}/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 style={{marginBottom: "15px"}} className="card-title">{item.name} - ${item.price} x {item.quantity}</h5>
                                <input
                                        type="number"
                                        min="1"
                                        max={item.quantity}
                                        value={quantityToRemove[item.id] || ''}
                                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                        placeholder="1"
                                        style={{ width: '70px', marginRight: '8px' }}
                                    />
                                    <button
                                        className="btn btn-warning me-2"
                                        onClick={() => decreaseItemQuantity(item.id, quantityToRemove[item.id] || 1)}
                                    >
                                        Quitar
                                    </button>
                                    <button className="btn btn-danger" onClick={() => removeItem(item.id)}>Eliminar</button>
                            </div>
                        </div>
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
