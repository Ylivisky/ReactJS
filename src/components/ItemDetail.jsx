import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../firebase/firebase';
import { useCart } from '../context/CartContext';

export default function ItemDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const { addItem } = useCart();

    useEffect(() => {
        const fetchProduct = async () => {
            const productDetail = await getSingleProduct(id);
            setProduct(productDetail);
        };
        fetchProduct();
    }, [id]);

    const handleAddToCart = () => {
        if (quantity > 0) {
            addItem(product, quantity);
        }
    };

    return (
        <div className="container my-5">
            <div className="card mb-3" style={{ maxWidth: "800px", margin: "0 auto" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img 
                            src={product.image} 
                            className="img-fluid rounded-start" 
                            alt={product.name || 'Producto'} 
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{product.name || 'Cargando...'}</h5>
                            <p className="card-text">{product.description || 'Descripción no disponible'}</p>
                            <p className="card-text"><strong>Precio: </strong>${product.price || 0}</p>
                            <input 
                                type="number" 
                                value={quantity} 
                                min="1" 
                                onChange={(e) => setQuantity(Number(e.target.value))}
                            />
                            <button className="btn btn-primary" onClick={handleAddToCart}>
                                Añadir al carrito
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
