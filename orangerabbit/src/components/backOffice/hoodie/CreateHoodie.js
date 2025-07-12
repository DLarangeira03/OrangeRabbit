import './CreateHoodie.css';
import React, { useEffect, useState } from 'react';

//gera um botão que permite a criação de um produto
const CreateHoodie = ({  }) => {
    //definição do useState
    const [data1, setData1] = useState([]);
    var id = 4;
   
const addApi = ()=>{
    //prompt que pedem os dados necessários para criar um produto
    var name = prompt("Nome do produto? ");
    var preco = prompt("Preco: ");
    var image = prompt("Link imagem: ");
    ++id;
    //cria na base de dados referenciada
    fetch('https://sheetdb.io/api/v1/31t0t1yl5okf9', {
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
                'image': image 
            }
        ]
    })
})
  .then((response) => response.json())
  .then((data1) => console.log(data1));


}


  return (
    <div>
      <button className='buttonCreateHoodie' id='AddBut' onClick={()=>{addApi();} }>Add Hoodie</button>
      
    </div>
  );
};

export default CreateHoodie;