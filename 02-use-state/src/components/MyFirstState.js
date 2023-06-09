import React, { useState } from 'react';

const MyFirstState = () => {

    // let name = 'Helena Rodríguez ';
    //Problemática
    // const changeName = e => {
    //     name = ' Marta Pérez';
    // }
    //useState devuelve un array
    const [name, setName] = useState("Helena Rodríguez");

    const changeName = (e, fixed_name) => {
        setName(fixed_name);
        console.log(e.target);
    };
    return (
        <div>
            <h3>Componente: Mi primer estado</h3>
            <strong className='label'>
                {name}
            </strong>

            &nbsp;
            <button onClick={e => changeName(e, "Marta")}>Cambiar nombre por Marta</button>
            
            &nbsp;
            <input type='text' onChange={ e => changeName(e, e.target.value )} placeholder='Cambia el nombre'></input>

        </div>
    )
}

export default MyFirstState
