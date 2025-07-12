import "./DeleteHoodie.css"
import React, { useEffect, useState } from 'react';

//gera um botão que permite eliminar um produto
const DeleteHoodie = () => {
  //definição do useState
  const [data2, setData2] = useState([]);

  //função que elimina um produto escolhido pelo id
  const Delrow = () => {
    var rid = prompt("Hoodie ID: ");
    //identifica o produto pelo id
    fetch(`https://sheetdb.io/api/v1/31t0t1yl5okf9/id/${rid}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data2) => console.log(data2));

  }

  return (
    <div>
      <button className='button-Del' id='bdel' onClick={() => { Delrow(); }}>Delete Hoodie</button>

    </div>
  );
};

export default DeleteHoodie;