import React from 'react';

export const Pessoa = (props) => {
    return (
        // <p><b>Oi </b>{props.nome}, tudo bem?</p>
        <img src={props.nome} alt="" />
    )
}