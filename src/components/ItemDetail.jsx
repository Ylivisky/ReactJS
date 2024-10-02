import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProduct } from '../asyncMock';

export default function ItemDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const productDetail = getProduct(id);
        setProduct(productDetail);
    }, []);

    return (
        <>
            <div className="container my-5">
                <div className="card mb-3" style={{ maxWidth: "800px", margin: "0 auto" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={product.image} className="img-fluid rounded-start" alt={product.name} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <p className="card-text"><strong>Precio: </strong>${product.price}</p>
                                <button className="btn btn-primary">Añadir al carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
