import './CreateBottom.css';
import React, { useEffect, useState } from 'react';

//gera um botão que permite a criação de um produto
const CreateHoodie = ({ }) => {
  //definição do useState
  const [data1, setData1] = useState([]);
  var id = 16;


  const addApi = () => {
    //prompt que pedem os dados necessários para criar um produto
    var name = prompt("Nome do produto? ");
    var preco = prompt("Preco: ");
    var link = prompt("Link imagem: ");
    ++id;
    //cria na base de dados referenciada
    fetch('https://sheetdb.io/api/v1/f2ewkhwrqu3lw', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        //atualiza os dados para os pedidos por prompts
        data: [
          {
            'id': id,
            'nome': name,
            'preco': preco,
            'link': link
          }
        ]
      })
    })
      .then((response) => response.json())
      .then((data1) => console.log(data1));


  }


  return (
    <div>
      <button className='buttonCreateBottom' id='AddBut' onClick={() => { addApi(); }}>Add Bottom</button>

    </div>
  );
};

export default CreateHoodie;