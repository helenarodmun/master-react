//Importar modulos de React
import React from "react";

//Función del componente
const MyComponent = () => {

    // let name = 'Helena';
    // let web = 'https://github.com/helenarodmun';

    let user = {
        name: 'Helena',
        surname: 'Rodríguez',
        web: 'helena.com'
    };

    console.log(user);

    return (
        <div className="my-component">
            <h2>Componente creado</h2>
            <h3>Datos del usuario:</h3>
            <ul>
                <li>Nombre: <strong>{user.name}</strong></li>
                <li>Apellidos: <strong>{user.surname}</strong></li>
                <li>Web: <strong>{user.web}</strong></li>
            </ul>
            <ul>
                <li>React</li>
                <li>Angular</li>
                <li>Vue</li>
            </ul>
            <p>Este es el primer componente</p>
        </div>

    )
}
//Export
export default MyComponent;