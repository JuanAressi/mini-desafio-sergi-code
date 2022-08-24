import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import usuarios from '../data.json'

function Index() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Obtener los usuarios desde LocalStorage.
        const usersLS = localStorage.getItem('users');

        // Chequear que exista la key
        if (usersLS === null) {
            const usersJSON = usuarios;
            setUsers(usersJSON);

            // Actualizar el LocalStorage.
            localStorage.setItem('users', JSON.stringify(usersJSON));
        } else {
            setUsers(JSON.parse(usersLS));
        }
    } , []);

	return (
		<div id='index'>
			<Navbar active='index'/>

            <div className="container mt-5">
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Edad</th>
                            <th>Carrera</th>
                            <th>Hobbie</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((usuario, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.edad}</td>
                                <td>{usuario.carrera}</td>
                                <td>{usuario.hobbie}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
		</div>
	)
}

export default Index