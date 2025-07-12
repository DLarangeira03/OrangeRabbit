import "./Choose.css"
import React, { useEffect, useState } from 'react';

//função usada para retirar apenas um elemento da base de dados bottom
const ChooseBottom = ({  }) => {
  //definição do useState
  const [data, setData] = useState([]);

  //função que permite ir buscar o 1º elemento da base de dados
  const readApi = () => {
    //requisição do 1 elemento à base de dados
    fetch('https://sheetdb.io/api/v1/f2ewkhwrqu3lw?limit=1')
      .then((response) => response.json())
      .then((data) => {
        //atualiza o array data para conter o 1º elemento apenas 
        setData(data);
      });
  };

 //render inicial 
  useEffect(() => {
      readApi();
  }, []);

  //função executada quando a imagem do 3º elemento é clickada, que redireciona para o backoffice da categoria bottom
  const handleClickBottom = (event) => {
    event.preventDefault();
    window.location.href = '/BottomBackOffice';
  }

  return (
    <div className='shop'>
     <div className='gridderChoose'>
      {data.map((bottom) => (
      <div>
        <div className='itChoose' key={bottom.id}>
          <p className='pi'><img className='imgChoose' src={bottom.image} alt={'imagem de ${bottom.nome}'} style={{ maxWidth: '100%' }} onClick={handleClickBottom} /> </p>
          <p className='piChoose'>Bottom BackOffice</p>
        </div>
      </div>    
    ))}
    </div>
    
  </div>
  );
};

export default ChooseBottom;