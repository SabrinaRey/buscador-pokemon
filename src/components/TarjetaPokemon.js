import React from 'react';

const TarjetaPokemon = ({nombre, img, largo, peso}) => {
   
    return (
        <div>
            <h2>{nombre}</h2>
            <img src={img}></img>
            <p>El pokemon se llama {nombre}, mide {largo} cms. y pesa {peso} kg.</p>
        </div>
    )

}

export default TarjetaPokemon;