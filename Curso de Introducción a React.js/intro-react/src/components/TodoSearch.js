import React from 'react';
import "../styles/TodoSearch.css";

function TodoSearch(){
    const estado = React.useState();

    const onSearchValueChanged = (event) => {
        console.log(event.target.value)
    };

    return(
        <input placeholder="Buscar..." className='TodoSearch' onChange={onSearchValueChanged}/>
    );
}

export  { TodoSearch };