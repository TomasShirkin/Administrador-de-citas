import React, {Fragment, useState} from 'react';



const Formulario = () => {
  const [cita, actualizarCita] = useState({
    mascota: '',
    propietario:'',
    fecha: '',
    hora: '',
    sintomas:''
});



//Funcion que se ejecuta cada vez que escribe en un input

const actualizarState = e =>{
  actualizarCita({
    ...cita,
    [e.target.name]: e.target.value
  })
  

}

//Estraer valores

const {mascota, propietario, fecha, hora, sintomas} = cita;

//Cuando el usuario presiona agregar valores
const submitCita = e =>{
  e.preventDefault();

  //validar

  //Asignar un ID

  //Crear la cita

  //Reiniciar el Form
}


  return ( <Fragment>
    <h2>Crear cita</h2>

    <form
       onSubmit={submitCita}
    >
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={actualizarState}
          value={mascota}
        />
         <label>Nombre Dueño</label>
         <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre Dueño de la mascota"
          onChange={actualizarState}
          value={propietario}

        />
         <label>Fecha</label>
         <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}

        />
         <label>hora</label>
         <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}


        />
         <label>Síntomas</label>
         <textarea
          className="u-full-width"
          name="sintomas"
          onChange={actualizarState}
          value={sintomas}


         ></textarea>
         <button
           type="Submit"
           className="u-full-witdh button-primary">
           Agregar Cita
         </button>
    </form>
</Fragment> );
}
 
export default Formulario;


