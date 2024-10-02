import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
    return (
        <>
            <article style={{ border: '1px solid white', padding: 10 }}>
                <h2>{product.name}</h2>
                <img style={{width: "450px", height:"450px"}} src={product.image} alt={product.name} />
                <p>$ {product.price}</p>
                <button>
                    <Link className='nav-link' to={`/item/${product.id}`}>More Details</Link>
                </button>
            </article>
        </>
    );
}