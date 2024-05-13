
import './App.css'
import { Card } from './componentes/Card'
import { Lenguajes } from './datos/Lenguaje';

function App() {

  const lenguajesList = Lenguajes.map((l)=> {
    return <Card titulo ={l.nombre} descripcion={l.comentario} />
  });


  return (
    
    <div className='App'>
    <h1>Montando Componentes react vite</h1>

    <div className='container'>

{lenguajesList}

 


    </div> 
    </div>

  )
}

export default App
