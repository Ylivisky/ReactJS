import { useEffect, useState } from 'react';
import { getProducts } from '../firebase/firebase'; // Asegúrate de importar desde Firebase
import ProductCard from './ProductCard';

export default function ItemListContainer() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getProducts(); // Llama a la función correctamente
            setProducts(data);
        };
        fetchProducts();
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
