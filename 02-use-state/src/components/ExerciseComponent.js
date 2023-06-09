
import React, {useState} from 'react';
import PropTypes from 'prop-types';

const ExerciseComponent = ({year}) => {

const [ yearNow, setYearNow ] = useState(year);

const next = e => {
  setYearNow(yearNow + 1);
}

const previous = e => {
  setYearNow(yearNow - 1);
}

const changeYear = e => {
  let data = parseInt(e.target.value);

  if (Number.isInteger(data)) {
    setYearNow(data);
  }else{
    setYearNow(year);
  }


}
  return (
    <div>
      <h2>Ejercicio de eventos y useState</h2>
      <strong className='label label-green'>{yearNow}</strong>
          
      <p>
        <button onClick={ next }>SIGUIENTE</button>
        &nbsp;
        <button onClick={ previous }>ANTERIOR</button>
      </p>

      <p>Cambiar año:
      <input 
      type='text' 
      placeholder='Cambia el año'
      onChange = { changeYear }
      ></input>
      </p>
    </div>
  )
}

ExerciseComponent.propTypes = {
  year: PropTypes.number.isRequired
}
export default ExerciseComponent

