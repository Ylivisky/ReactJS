import { useEffect, useState } from 'react';
import { getProducts } from '../asyncMock.js';
import ProductCard from './ProductCard';

export default function ItemListContainer() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts.then((data) => setProducts(data));
    }, []);

    return (
        <>
            <section style={{ display: 'flex', gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </section>
        </>
    );
}

