import { useState } from 'react'

import './App.css'

function App() {


//funcion para el login de ingresar.
function Boton_ingresar() {
  

const Ingresar = document.getElementById('form_ingresar');
const Registrarse = document.getElementById('form_registrarse');


    if (Ingresar.style.display  === "none") {
        Ingresar.style.display = "block";
        Registrarse.style.display = "none";
    } else {
        Ingresar.style.display = "none";
    }

}

//funcion para el login de registrarse.
function Boton_registrarse() {
  

const Ingresar = document.getElementById('form_ingresar');
const Registrarse = document.getElementById('form_registrarse');


    if (Registrarse.style.display  === "none") {
        Registrarse.style.display = "block";
        Ingresar.style.display = "none";
    } else {
        Registrarse.style.display = "none";
    }

}





  return (
    <>
    <div className='encabezado'>
    <nav>
    <ul>
    <li><h1>Cafeteria digital <img src="../imagenes/logo_cafeteria.jpg"  alt="Logo de la cafeteria"/> </h1> </li>
<li>
  <div className="contenedor_ingresar">
<button id="btn_ingresar"  onClick={ Boton_ingresar} >Ingresar</button>

<section id="form_ingresar" className='form_inicar'>
<h3>Iniciar sesion</h3>
<form action="" method="POST">
<label for="">Correo electronico</label>
<input type="email" name="email" required/>
<label for="">Contraseña:</label>
<input type="password" name="contrasena" required/>

<button className="btn_frm_ingresar"  type="submit" >Ingresar</button> 
</form>

</section>
</div>
</li>


<li><div  className="contenedor_registrarse"  >
<button id="btn_registrarse" onClick={Boton_registrarse} >Registrarse</button>

<section id="form_registrarse"  className='form_registrarse'>
    <h3>Registrarse</h3>
<form action="" method="POST">
<label for="">Nombre:</label>
<input type="text" name="nombre" required/>
<label for="">Telefono:</label>
<input type="number" name="cel" required/>
<label for="">Correo electronico</label>
<input type="email" name="email" required/>

<input type="text" name="roles" value="cliente" required/>
<label for="">Contraseña:</label>
<input type="password" name="contrasena" required/>

<button className="btn_frm_registrarse" type="submit" value="insertar">Registrarse</button>   
    </form>
    </section>
    </div></li>

    </ul>
    </nav>
</div>

    </>
  )
}

export default App
