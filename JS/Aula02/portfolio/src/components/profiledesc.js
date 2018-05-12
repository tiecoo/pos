import { RedesSociais } from "./social";
import React from 'react';

export const ProfileDesc = (props) => {
    return (
        <div>
            <p><b>Nome: </b>{props.name}</p>
            <p><b>Idade: </b>{props.age}</p>
            <p><b>Profissão: </b>{props.job}</p>
            <p><b>Redes sociais: </b><RedesSociais /></p>
        </div>
    )
}