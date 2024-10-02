import { useEffect, useState } from 'react';
import { getCategory } from '../../asyncMock';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';

export default function Category(){
    const { category } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(getCategory(category));
    }, [category]);

    return (
        <>
            <section style={{ display: 'flex', gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </section>
        </>
    )
};
