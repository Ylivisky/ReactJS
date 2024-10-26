import { useEffect, useState } from 'react';
import { getProducts } from '../firebase/firebase'; // Importar desde Firebase
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

export default function Category() {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const fetchProductsByCategory = async () => {
            const allProducts = await getProducts();
            const filteredProducts = allProducts.filter(product => product.category === category); // Filtra por categoría
            setProducts(filteredProducts);
        };
        fetchProductsByCategory();
    }, [category]);

    return (
        <>
            <section style={{ display: 'flex', gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
                {products.length > 0 ? (
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <p>No hay productos en esta categoría.</p>
                )}
            </section>
        </>
    );
}
