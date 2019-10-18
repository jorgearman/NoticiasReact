import React from 'react';

const Noticia = ({noticia}) => {

    //extraer datos
    const {urlToImage, url, title, description, source} = noticia;

    //condicionalmente cargar imagen si esta disponible
    const imagen = (urlToImage) ? 
                <div className="card-image">
                    <img src={urlToImage} alt={title} />
                    <span className ="card-title">{source.name}</span>
                </div>
    :null;

    return(
        
        <div className = "col s12 m6 14">
            <div className = "card">
                {imagen}
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className = "card-action">
                    <a href={url} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className = "waves-light btn">
                           Ver Noticia Completa
                       </a>
                </div>
            </div>
        </div>
    );
}


export default Noticia;