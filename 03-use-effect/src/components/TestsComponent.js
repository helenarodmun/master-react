import React, { useEffect, useState } from 'react'
import AlertComponent from './AlertComponent';

const TestsComponent = () => {

    const [user, setUser] = useState('Helena Rodríguez');
    const [ date, setDate ] = useState('01-01-2023');
    const [ counter, setCounter ] = useState(0);

    const changeUser = e => {
        setUser(e.target.value);
    };

    const changeDate = e => {
        setDate(Date.now());
    };
    //solo se ejecuta una vez al cargar al componente
    useEffect( () => {
        console.log('Has cargado el componete TestComponent o has realizado un cambio en un estado!!');
    }, []);

      //solo se ejecuta si se cambia el nombre
      useEffect( () => {

        setCounter(counter + 1);        
        console.log('Has modificado el usuario: ' + counter);


    }, [date, user]);

    return (
        <div>
            <h1> El efecto - useEffect</h1>
            <strong className='label'>{user}</strong>
            <strong className={counter >= 10 ? 'label label-green' : 'label'}>{date}</strong>
            <p>
            <input
                type='text'
                onChange = { changeUser }
                placeholder='Cambia el nombre'
            ></input>
            <button onClick={changeDate}>Cambiar Fecha</button>
            </p>
            { user === 'HELENA' && <AlertComponent/> }
        </div>
    )
}

export default TestsComponent
