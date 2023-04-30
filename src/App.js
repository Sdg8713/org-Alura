import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true)
  const [colaboradores, actualizarColaboradores] = useState([{
    id:uuidv4(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: true
  },
  {
    id:uuidv4(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondon",
    puesto: "Desarrolladora de Software e Instructora",
    fav: true
  },
  {
    id:uuidv4(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "JeanMarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id:uuidv4(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velazco",
    puesto: "Head de Alura Latam e Instructor",
    fav: false
  },
  {
    id:uuidv4(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose González",
    puesto: "Dev FullStack",
    fav: false
  }])
  const [equipos, actualizarEquipos] = useState([
    {
      id:uuidv4(),
      titulo:"Programación",
      colorPrimario:"#57C278",
      colorSecundario:"#D9F7E9"
    },
    {
      id:uuidv4(),
      titulo:"Front End",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF" 
    },
    {
      id:uuidv4(),
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2"
    },
    {
      id:uuidv4(),
      titulo:"Dev Ops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8"
    },
    {
      id:uuidv4(),
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5"
    },
    {
      id:uuidv4(),
      titulo:"Movil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9"
    },
    {
      id:uuidv4(),
      titulo:"Innovación y Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF"
    },
])
  //Con React, habrá ocaciones que se tendran que usar arreglos vacios, para mayor facilidad,
  //cuando se utilicen listas de productos, colaboradores, ya que si se usa map, se rompe el programa


  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario);
  }

  //Registrar Colaborador
  
  const registrarColaborador = (colaborador) => {
    console.log("Registrar Colaborador: ", colaborador)
    //Spread Operator (...)
    actualizarColaboradores([...colaboradores,colaborador]);
  }

  //Eliminar Colaborador
  const eliminarColaborador = (id) =>{
    console.log("Eliminar Colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar Color de Equipos

  const actualizarColor = (color, id) => {
    console.log("Actualizar Color: ", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id){
        equipo.colorPrimario = color  
      }
      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  //Crear Equipo
   
  const crearEquipo = (nuevoEquipo) =>{
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuidv4() }])
  }

  //Like 
  const like = (id) =>{
     console.log("like" , id)
     const colaboradorActualizado = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
     })
     actualizarColaboradores(colaboradorActualizado)
  }


  /*  
  Ternario --> condición ? seMuestra : noSeMuestra
  Corto Circuito --> condición && seMuestra -- Ya no es necesario la negación  
  */

  return (
    <div className="App">
      <Header />
      {mostrarFormulario && <Formulario
          equipos ={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      }

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        equipos.map((equipo) => <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
          />
        )
      }
      
      <Footer />

    </div>
  );
}


export default App;
