import React from 'react'

const EventsComponent = () => {

    const handlerClick = (e, name) => {
        alert("Has dado click al botón !!" + name);
    };

    const handlerDoubleClick = (e) => {
        alert("Has dado doble click al botón !!");
    };

    const handlerEnter = (e, action) => {
        console.log(`Has ${action} en la caja con el mouse!!`);
    };

    const handlerFocus = e => {
        console.log('Estas dentro del input, mete tu nombre');
    };
     const handlerBlur = e => {
        console.log('Estas fuera del input, chao');
     };

    return (
        <div>
            <h1>Eventos en React</h1>
            <p>
                {/* Evento click */}
                <button onClick={e => handlerClick(e, ' Helena')}>Click</button>
            </p>
            <p>
                {/* Evento doble click */}
                <button onDoubleClick={handlerDoubleClick}>Doble Click</button>
            </p>

                {/* Evento onMouseEnter onMouseLeave */}
            <div id='box'
                onMouseEnter={ e => handlerEnter(e, " entrado") }
                onMouseLeave={ e => handlerEnter(e, " salido") } >
                Pasa por encima!!
            </div>

            <p>
                {/* Evento Focus y Blur */}
                <input type='text' 
                    onFocus={ handlerFocus }
                    onBlur={ handlerBlur }                    
                    placeholder='Introduce tu nombre'>
                </input>
            </p>

        </div>
    )
}

export default EventsComponent
