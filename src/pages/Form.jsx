import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendarDays, faBriefcase, faBasketball} from '@fortawesome/free-solid-svg-icons';

function Form() {
    const [usuarios, setUsuarios] = useState([]);
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [carrera, setCarrera] = useState('');
    const [hobbie, setHobbie] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const [mensaje, setMensaje] = useState('');
    const [mostrarMensaje, setMostrarMensaje] = useState(false);


    // Obtener los usuarios desde LocalStorage.
    useEffect(() => {
        const usersLS = localStorage.getItem('users');

        // Si hay usuarios, los parseamos a JSON y los asignamos a usuarios.
        if (usersLS) {
            setUsuarios(JSON.parse(usersLS));
        }
    }, []);

    // Setear los usuarios en LocalStorage.
    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(usuarios));
    } , [usuarios]);


    const handleSubmit = (e) => {
        e.preventDefault();

        // Deshabilitar el botón de submit.
        setIsDisabled(true);

        let usuario = [
            {
                'nombre': nombre,
                'edad': edad,
                'carrera': carrera,
                'hobbie': hobbie
            }
        ];

        // Agregar el nuevo usuario al arreglo de usuarios.
        setUsuarios([...usuarios, ...usuario]);

        // Setear mensaje de exito.
        setMensaje('Usuario agregado correctamente.');
        setMostrarMensaje(true);

        // Limpiar formulario, habilitar el botón y eliminar el mensaje después de 3 segundos.
        setTimeout(() => {
            setNombre('');
            setEdad('');
            setCarrera('');
            setHobbie('');

            setIsDisabled(false);
            setMostrarMensaje(false);
        } , 3000);
    }


	return (
		<div id='form'>
			<Navbar active='form'/>

            <div className='container mt-5'>
                <form id='formAlta' className='mx-auto'>
                    {mostrarMensaje ? <div className="alert alert-success mt-3">{mensaje}</div> : null}

                    <label htmlFor='nombre' className='mb-2'>Nombre</label>

                    <div className='input-group mb-4'>
                        <span className='input-group-text'>
                            <FontAwesomeIcon icon={faUser} />
                        </span>

                        <input
                            id='nombre'
                            className='form-control'
                            type='text'
                            name='nombre'
                            placeholder='Nombre'
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>


                    <label htmlFor='nombre' className='mb-2'>Edad</label>
                    
                    <div className='input-group mb-4'>
                        <span className='input-group-text'>
                            <FontAwesomeIcon icon={faCalendarDays} />
                        </span>

                        <input
                            id='edad'
                            className='form-control'
                            type='number'
                            name='edad'
                            placeholder='Edad'
                            value={edad}
                            onChange={(e) => setEdad(e.target.value)}
                        />
                    </div>


                    <label htmlFor='nombre' className='mb-2'>Profesión</label>
                    
                    <div className='input-group mb-4'>
                        <span className='input-group-text'>
                            <FontAwesomeIcon icon={faBriefcase} />
                        </span>

                        <input
                            id='carrera'
                            className='form-control'
                            type='text'
                            name='carrera'
                            placeholder='Profesión'
                            value={carrera}
                            onChange={(e) => setCarrera(e.target.value)}
                        />
                    </div>


                    <label htmlFor='nombre' className='mb-2'>Hobbie</label>
                    
                    <div className='input-group mb-4'>
                        <span className='input-group-text'>
                            <FontAwesomeIcon icon={faBasketball} />
                        </span>

                        <input
                            id='hobbie'
                            className='form-control'
                            type='text'
                            name='hobbie'
                            placeholder='Hobbie'
                            value={hobbie}
                            onChange={(e) => setHobbie(e.target.value)}
                        />
                    </div>

                    <div className="text-center">
                        <button
                            className='btn btn-primary btn-block'
                            onClick={handleSubmit}
                            disabled={isDisabled}
                        >
                            Agregar nuevo usuario
                        </button>
                    </div>
                </form>
            </div>
        </div>
	)
}

export default Form