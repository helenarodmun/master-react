import React, { useEffect, useState } from 'react';

const AjaxComponent = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState('');

    //Génerico / básico
    const getStaticUsers = () => {
        setUsers([
            {
                "id": 1,
                "email": "michael.lawson@reqres.in",
                "first_name": "Michael",
                "last_name": "Lawson",
                "avatar": "https://reqres.in/img/faces/7-image.jpg"
            },
            {
                "id": 2,
                "email": "lindsay.ferguson@reqres.in",
                "first_name": "Lindsay",
                "last_name": "Ferguson",
                "avatar": "https://reqres.in/img/faces/8-image.jpg"
            },
            {
                "id": 3,
                "email": "tobias.funke@reqres.in",
                "first_name": "Tobias",
                "last_name": "Funke",
                "avatar": "https://reqres.in/img/faces/9-image.jpg"
            },
        ])
    };

    const getUsersAjaxPMS = () => {
        fetch('https://reqres.in/api/users?page=1')
            .then(response => response.json())
            .then(results => {
                setUsers(results.data);
                console.log(users);
            },
                error => {
                    console.log(error.message);
                    setErrors(error.message);
                }
            )
    };

    const getUsersAjaxAW = () => {
        setTimeout(async () => {

            try {
                const request = await fetch('https://reqres.in/api/users?page=1');
                const { data } = await request.json();

                console.log(data);

                setUsers(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setErrors(error.message);
            }

        }, 2000)

    };

    useEffect(() => {
        // getStaticUsers();
        //getUsersAjaxPMS();
        getUsersAjaxAW();
    }, []);
    if (errors !== '') {
        //Cuando salga algún error
        return (
            <div className = 'errors' >
                { errors }
    </div >
)
    } else if (loading === true) {
    //Cuando está todo cargando

    return (
        <div className='loading'>
            Cargando datos...
        </div>
    )
} else if (loading === false && errors === '') {
    //Cuando todo ha ido bien
    return (
        <div>
            <h2>Listado de usuarios vía Ajax</h2>
            <ol className='users'>
                {users.map(user => {
                    console.log(user);
                    return <li key={user.id}>
                        <img src={user.avatar} width='20' alt='imagen avatar'></img>
                        &nbsp;
                        {user.first_name}  {user.last_name}
                    </li>
                })}
            </ol>

        </div>
    )
}
}



export default AjaxComponent;


