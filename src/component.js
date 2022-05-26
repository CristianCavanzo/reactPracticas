import React from 'react';
import { Contexto } from './App';

function Component() {
    let { pepe } = React.useContext(Contexto);
    return (
        <div>
            <p>hola{pepe}</p>
        </div>
    );
}

export { Component };
