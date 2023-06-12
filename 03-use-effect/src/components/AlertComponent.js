import React, { useEffect } from 'react'

const AlertComponent = () => {

useEffect(() => {

    //Cuando el componente se monta
    alert('El componente alertComponent está montado');

    //Cuando el componente se desmonta
    return () => {
        alert('Componente desmontado');
    }

}, []);//Se ejecuta una vez porque se le pasa el array vacío

  return (
    <div>
        <hr/>
      <h3>Saludos Helena, que tal estas?</h3>
      <button onClick={e=>{
        alert('Bienvenido!!')
      }}>Mostrar alerta</button>
    </div>
  )
}

export default AlertComponent
