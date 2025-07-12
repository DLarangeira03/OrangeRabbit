import './ReadHoodie.css';
import React, { useEffect, useState } from 'react';

//função usada para dar render aos elementos da base de dados hoodie
const ReadHoodie = ({  }) => {
  //definição do useState
  const [data, setData] = useState([]);

  //função usada para retirar os elementos da base de dados hoodie
  const readApi = () => {
    //requisição dos elementos à base de dados
    fetch('https://sheetdb.io/api/v1/31t0t1yl5okf9')
      .then((response) => response.json())
      .then((data) => {
        //atualiza o array data 
        setData(data);
      });
  };

  //render inicial
  useEffect(() => {
    readApi();
  }, []);


return (
  <div>
     <button className='button-Read' id='datbut' onClick={()=>{readApi();} }>Reload Hoodie</button> 
     <div className='background'>
      {data.map((hoodie) => (
      <div className='grid'>
        <div className='itens' key={hoodie.id}>
          <p>ID: {hoodie.id}  </p>
          <p>Nome: {hoodie.nome} </p>
          <p>Preço: {hoodie.preco} </p>
          <img src={hoodie.image} alt={'imagem de ${hoodie.nome}'} style={{ maxWidth: '100%' }} />
        </div>
      </div>    
    ))}
    </div>
    
  </div>
)
    }

export default ReadHoodie;