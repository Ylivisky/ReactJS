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
            <main className='container mt-4' style={{ display: 'flex', flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
                <section className='row'>
                    {products.length > 0 ? (
                        products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    ) : (
                        <p>No hay productos en esta categoría.</p>
                    )}
                </section>
            </main>
        </>
    );
}
