import React from 'react'

const SecondComponent = () => {

    const books = ["Harry Potter", "Juego de Tronos", "Clean Code"];
    // const books = [];

    return (
        <div className='second-component'>

            <h1>Listado de libros</h1>
            {books.length >= 1 ? 
                (<ul>
                    {
                        books.map((book, index) => {
                            return <li key={index}>{book}</li>
                        })
                    }
                </ul>)
                : (<p>No hay libros</p>)
            }
        </div>
    )
}

export default SecondComponent
