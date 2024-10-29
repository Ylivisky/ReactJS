import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { sendOrder } from '../firebase/firebase';

export default function Checkout() {
    const { cartItems, total, clearCart } = useCart();
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        phone: '',
        email: '',
        confirmEmail: ''
    });
    const [orderId, setOrderId] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const order = {
            buyer: {
                name: formData.name,
                surname: formData.surname,
                phone: formData.phone,
                email: formData.email
            },
            items: cartItems,
            total: total,
            date: new Date()
        };

        try {
            const id = await sendOrder(order); 
            setOrderId(id); 
            clearCart(); 
        } catch (error) {
            console.error("Error al enviar la orden: ", error);
        }
    };

    return (
        <div>
            <h2>Checkout</h2>
            {orderId ? (
                <div>
                    <h3 className='alert alert-success'>Gracias por tu compra!</h3>
                    <p className='alert alert-light'>Tu número de orden es: <strong>{orderId}</strong></p>
                </div>
            ) : (
                <>
                    <h3>Total: ${total}</h3>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Nombre"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="surname"
                            placeholder="Apellido"
                            value={formData.surname}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Teléfono"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="confirmEmail"
                            placeholder="Repite tu Email"
                            value={formData.confirmEmail}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit">Finalizar compra</button>
                    </form>
                </>
            )}
        </div>
    );
}
