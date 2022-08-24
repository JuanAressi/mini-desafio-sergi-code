import React from 'react';
import { Link } from 'react-router-dom';

function Navbar( { active } ) {
    let inicioActive = '';
    let formActive = '';

    if (active === 'index') {
        inicioActive = 'active';
        formActive = '';
    } else if (active === 'form') {
        inicioActive = '';
        formActive = 'active';
    }

	return (
		<div id='navbar' className='bg-light p-4'>
			<div className="container d-flex justify-content-center">
				<Link to='/'
					className={'text-uppercase text-primary text-decoration-none fs-4 me-5 ' + inicioActive}
				>
					Inicio
				</Link>

				<Link to='/formulario'
					className={'text-uppercase text-primary text-decoration-none fs-4 ' + formActive}
				>
					Alta de usuarios
				</Link>
			</div>
		</div>
	)
}

export default Navbar