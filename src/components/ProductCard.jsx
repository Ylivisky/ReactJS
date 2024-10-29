import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
    return (
        <>
            <div class="col-md-4 ">
                <div class="card mb-5 p-0">
                    <img style={{width: "400px", height:"400px", margin:"0 auto"}} src={product.image} class="card-img-top" alt={product.name} />
                    <div class="card-body">
                        <h5 class="card-title">{product.name}</h5>
                        <button>
                            <Link className='nav-link' to={`/item/${product.id}`}>More Details</Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}