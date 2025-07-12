import React, { useEffect, useState } from 'react';
import "./Choose.css"

//função usada para retirar apenas um elemento da base de dados hoodie
const ChooseHoodie = ({  }) => {
  //definição do useState
  const [data, setData] = useState([]);

  //função que permite ir buscar o 3º elemento da base de dados
  const readApi = () => {
    //requisição do 3 elemento à base de dados
    fetch('https://sheetdb.io/api/v1/31t0t1yl5okf9?offset=2&limit=1')
      .then((response) => response.json())
      .then((data) => {
        //atualiza o array data para conter o 3º elemento apenas 
        setData(data);
      });
  };

 //render inicial 
  useEffect(() => {
      readApi();
  }, []);

  //função executada quando a imagem do 3º elemento é clickada, que redireciona para o backoffice da categoria hoodie
  const handleClickHoodie = (event) => {
    event.preventDefault();
    window.location.href = '/HoodieBackOffice';
  }


  return (
    <div>
     <div className='gridder'>
      {data.map((hoodie) => (
      <div>
        <div className='itChoose' key={hoodie.id}>
          <p className='pi'><img className='imgChoose' src={hoodie.image} alt={'imagem de ${hoodie.nome}'} style={{ maxWidth: '100%' }} onClick={handleClickHoodie} />  </p>
          <p className='piChoose'>Hoodie BackOffice</p>
        </div>
      </div>    
    ))}
    </div>
    
  </div>
  );
};

export default ChooseHoodie;