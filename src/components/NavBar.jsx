import CartWidget from './CartWidget';

export default function navBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark w-100 d-flex justify-content-between">
                <div>
                    <h1 className='text-light'>CompraPC</h1>
                </div>
                <div>
                    <button className="btn btn-light p-2 mx-2">Procesador</button>
                    <button className="btn btn-light p-2 mx-2">Tarjetas Graficas</button>
                    <button className="btn btn-light p-2 mx-2">Placas Madres</button>
                </div>
                <div>
                    <CartWidget/>
                </div>                
            </nav>
        </>
    )
}

