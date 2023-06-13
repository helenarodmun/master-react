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
            bio: data.bio.value,
            submit: data.submit.value
        };

        console.log(user);
        setUser(user);
    };

    const changeData = e => {
        var input_name = e.target;
        var user_update = user;
        //Modificar el estado para que se establezca el estado, capturar el estado previo
        setUser(previous_state => ({
                ...previous_state,
                [input_name]: e.target.value//sobreescribe la propiedad que se está modificando         
        })    
        );
        console.log(user);
    };



    return (
        <div>
            <h1>Formularios con React</h1>

            {user.submit && 
                <div className='info label label-grey'>
                    {user.name} {user.last_name} es un  {user.genre} y su biografía es esta: <p>
                        {user.bio}</p>
                </div>

            }

            <form onSubmit={getDataForm}>
                <input type='text'
                    name='name'
                    placeholder='Nombre'
                    onChange={changeData}
                >

                </input>
                <input type='text'
                    name='last_name'
                    placeholder='Apellido'
                    onChange={changeData}
                >

                </input>
                <select name='genre'
                    onChange={changeData}
                >
                    <option value='hombre'>Hombre</option>
                    <option value='mujer'>Mujer</option>
                </select>
                <textarea placeholder='Biografía'
                    name='bio'
                    onChange={changeData}
                >

                </textarea>

                <input type='submit' value='Enviar' name='submit'></input>
            </form>
        </div>
    )
}

export default FormularioComponent
