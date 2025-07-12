import './FrontShop.css';
import React, { useEffect, useState } from 'react';

const ShopBottomPage = ({  }) => {
  //definição do useState
  const [data, setData] = useState([]);
  
  //função que permite a requisição de data da base de dados bottoms 
  const readApi = () => {
    //requisição dos dados à base de dados
    fetch('https://sheetdb.io/api/v1/f2ewkhwrqu3lw')
      .then((response) => response.json())
      .then((data) => {
        //atualização do array data para os elementos requisitados à base de dados
        setData(data);
      });
  };

 //render inicial 
  useEffect(() => {
      readApi();
  }, []);


  return (
    <div className='shop'>
     <button className='refresh' id='datbut' onClick={()=>{readApi();} }>Refresh</button> 
     <div className='gridder'>
      {data.map((bottom) => (
      <div>
        <div className='it' key={bottom.id}>
          <p className='pi'><img className='imgfront' src={bottom.image} alt={'imagem de ${bottom.nome}'} style={{ maxWidth: '100%' }} /> <p> {bottom.nome} </p> <p>{bottom.preco}</p> </p>
        </div>
      </div>    
    ))}
    </div>
    
  </div>
  );
};

export default ShopBottomPage;