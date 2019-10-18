import React, {Component,Fragment} from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import Formulario from './components/Formulario';


class App extends Component {
 state = {
   noticias:[]
 }
  
  async componentDidMount(){
    this.consultarNoticias();

  }

  consultarNoticias = async (categoria = 'general', pais = 'co') => {
 
    const url = "https://newsapi.org/v2/top-headlines?country="+pais+"&category="+categoria+"&apiKey=d4578c7203eb4acc919537638ce084ad";

    console.log(url);  
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    this.setState({
      noticias :noticias.articles
    })
  }
  

  render() {
    return (
      <Fragment>
        <Header 
          titulo = 'Noticicas React Api'
        />
        
        <div className = "container white contenedor-noticias">
          <Formulario
            consultarNoticias = {this.consultarNoticias}

          />
          <ListaNoticias
            noticias = {this.state.noticias}
          />


        </div>
      </Fragment>
    );
  }
}



export default App;
