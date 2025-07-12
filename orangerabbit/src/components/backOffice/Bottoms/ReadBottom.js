import './ReadBottom.css'
import React, { useEffect, useState } from 'react';

//função usada para dar render aos elementos da base de dados bottom
const ReadBottom = ({  }) => {
  //definição do useState
  const [data, setData] = useState([]);

  //função usada para retirar os elementos da base de dados bottom  
  const readApi = () => {
    //requisição dos elementos à base de dados
    fetch('https://sheetdb.io/api/v1/f2ewkhwrqu3lw')
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
     <button className='button-Read' id='datbut' onClick={()=>{readApi();} }>Reload Bottom</button> 
     <div className='background'>
      {data.map((bottom) => (
      <div className='grid'>
        <div className='itens' key={bottom.id}>
          <p>ID: {bottom.id}  </p>
          <p>Nome: {bottom.nome} </p>
          <p>Preço: {bottom.preco} </p>
          <img src={bottom.image} alt={'imagem de ${bottom.nome}'} style={{ maxWidth: '100%' }} />
        </div>
      </div>    
    ))}
    </div>
    
  </div>
  );
};

export default ReadBottom;