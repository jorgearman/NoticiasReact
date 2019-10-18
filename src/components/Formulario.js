import React, { Component } from 'react';

class Formulario extends Component {
    state = { 
        categoria :'sports',
        pais : 'co'
    }

    cambiarCategoria= e => {

        this.setState({     
            categoria : e.target.value  
        },()=> {
            //Pasarlo a la pagina principal
            this.props.consultarNoticias(this.state.categoria, this.state.pais);
        });        

    }


    cambiarPais= e => {
        this.setState({           
            pais : e.target.value
        },()=> {
            //Pasarlo a la pagina principal
            this.props.consultarNoticias(this.state.categoria, this.state.pais);
        });        

    }

    

    render() { 
        return ( 
            <div className="buscador row">
                <div className ="col s12 m8 offset-m2">
                    <form>
                        <h2>Encuentra noticias por categoría</h2>
                        
                        <div className="input-field col s12 m8 offset-m2">
                        <b>Categoria</b>
                            <select
                                onChange= {this.cambiarCategoria}>
                                <option value="general">General</option>
                                <option value="business">Negocios</option>
                                <option value="entertainment">Entretenimiento</option>
                                <option value="health">Salud</option>
                                <option value="science">Ciencia</option>
                                <option value="sports">Deportes</option>
                                <option value="technology">Tecnologia</option>
                            </select>
                        </div>

                        <div className="input-field col s12 m8 offset-m2">
                            <b>País</b>
                            <select
                                onChange= {this.cambiarPais}>
                                <option value="co">Colombia</option>
                                <option value="ar">Argentina</option>
                                <option value="br">Brazil</option>                               
                            </select>
                        </div>
                    </form>
                </div>
            </div>
         );
    }
}
 
export default Formulario;


