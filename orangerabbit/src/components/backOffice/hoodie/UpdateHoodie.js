import './UpdateHoodie.css';
import React, { useEffect, useState } from 'react';

//gera um botão que permite atualizar um produto
const UpdateHoodie = ({  }) => {
  //definição do useState
    const [data3, setData3] = useState([]);
   
   
//função que permite atualizar dados através do id do produto
const Updaterow = ()=>{
    var rid = prompt("Id da coluna a dar update: ");
    var name = prompt("Nome do calçado? ");
    var preco = prompt("Preco do calçado: ");
    var link = prompt("Link pls: ");
    
    //identifica o produto pelo id
    fetch(`https://sheetdb.io/api/v1/31t0t1yl5okf9/id/${rid}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            //atualiza os dados na base de dados do produto
            data: {
                'id': rid,
                'nome': name,
                'preco': preco,
                'link': link
            }
        })
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    
}

  return (
    <div>
      <button className='button-Update' id='upbut' onClick={()=>{Updaterow();} }>Update Hoodie</button>
    </div>
  );
};

export default UpdateHoodie;