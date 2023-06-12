import React, { useState } from 'react'

const FormularioComponent = () => {

    const [user, setUser] = useState('');

    const getDataForm = e => {
        e.preventDefault();

        let data = e.target;

        let user = {
            name: data.name.value,
            last_name: data.last_name.value,
            genre: data.genre.value,
            bio: data.bio.value
        };

        console.log(user);
        setUser(user);
    };

    const changeData = e => {
        let input_name = e.target.name;
        let user_update = user;

        // user_update[input_name] = e.target.value;
        // console.log(user_update)

    };

    return (
        <div>
            <h1>Formularios con React</h1>

            {user.bio && user.name.length >= 1 && 
                <div className='info label label-grey'>
                    {user.name} {user.last_name} es un  {user.genre} y su biografía es esta: <p>
                        {user.bio}</p>
                </div>
            
            }

            <form onSubmit={getDataForm}>
                <input type='text'
                    name='name'
                    placeholder='Nombre'
                    onChange={ changeData }
                    >

                </input>
                <input type='text'
                    name='last_name'
                    placeholder='Apellido'
                    onChange={ changeData }
                    >

                </input>
                <select name='genre'
                 onChange={ changeData }
                 >
                    <option value='man'>Hombre</option>
                    <option value='woman'>Mujer</option>
                </select>
                <textarea placeholder='Biografía' 
                name='bio'
                onChange={ changeData }
                >

                </textarea>

                <input type='submit' value='Enviar'></input>
            </form>
        </div>
    )
}

export default FormularioComponent
