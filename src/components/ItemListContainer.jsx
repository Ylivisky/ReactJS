import { useEffect, useState } from 'react';
import { getProducts } from '../firebase/firebase';
import ProductCard from './ProductCard';

export default function ItemListContainer() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getProducts();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    return (
        <>
            <main className='container mt-4' style={{ display: 'flex', flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
                <section className='row'>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </section>
            </main>
        </>
    );
}
