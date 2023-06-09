import React from 'react';
import PropTypes from "prop-types";

export const ThirdComponent = ({
    name,
    surname,
    file
}) => {

    return (
        <div>
            <h1>Comunicación entre componentes</h1>
            <ul>
                <li>{name}</li>
                <li>{surname}</li>
                <li>{file.blood_group}</li>
                <li>{file.state}</li>
            </ul>
        </div>
    )
}

export default ThirdComponent;

//Validación de props
ThirdComponent.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    file: PropTypes.object
}
ThirdComponent.defaultProps = {
    name: 'John',
    surname: 'Doe'
}

