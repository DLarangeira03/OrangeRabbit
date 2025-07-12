import './FrontShop.css';
import React, { useEffect, useState } from 'react';


const ShopHoodiePage = ({  }) => {

  //definição do useState
  const [data, setData] = useState([]);

  //função que permite a requisição de data da base de dados hoodie 
  const readApi = () => {
    //requisição dos dados à base de dados
    fetch('https://sheetdb.io/api/v1/31t0t1yl5okf9')
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
    <div>
     <button className='refresh' id='datbut' onClick={()=>{readApi();} }>Refresh</button> 
     <div className='gridder'>
      {data.map((hoodie) => (
      <div>
        <div className='it' key={hoodie.id}>
          <p className='pi'><img className='imgfront' src={hoodie.image} alt={'imagem de ${hoodie.nome}'} style={{ maxWidth: '100%' }} /> <p> {hoodie.nome} </p> <p>{hoodie.preco}</p> </p>
        </div>
      </div>    
    ))}
    </div>
    
  </div>
  );
};

export default ShopHoodiePage;