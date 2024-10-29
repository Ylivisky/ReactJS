import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

export default function navBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark d-flex justify-content-around align-items-center">
                <div>
                    <h1 className='text-light navbar-brand'><Link className='nav-link' to={'/'}>CompraPC</Link></h1>
                </div>
                <ul className='navbar-nav mb-2 mb-lg-0'>
                    <li className='nav-item nav-link'><Link className='nav-item nav-link text-light' to={'/category/processor'}>Procesadores</Link></li>
                    <li className='nav-item nav-link' ><Link className='nav-item nav-link text-light' to={'/category/videoCard'}>Tarjetas graficas</Link></li>
                    <li className='nav-item nav-link'><Link className='nav-item nav-link text-light' to={'/category/motherboard'}>Placas Madres</Link></li>
                </ul>
                <div>
                    <CartWidget/>
                </div>                
            </nav>
        </>
    )
}

