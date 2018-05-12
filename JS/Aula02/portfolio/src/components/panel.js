import React from 'react';
import { Portfolio } from './portfolio';

const diego = {
    name: "Dieguin",
    age: "18",
    job: "none"
}

const lala = {
    name: "Lala",
    age: "18",
    job: "none"
}

export const Panel = (props) => {
    diego.pic = props.nome;
    lala.pic = props.nome;
    return (
      <div>
        <Portfolio data={diego} />
        <Portfolio data={lala} />
      </div>
    )
  }