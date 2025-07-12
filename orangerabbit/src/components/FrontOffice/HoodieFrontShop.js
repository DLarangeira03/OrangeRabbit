import './FrontShop.css';
import React, { useEffect, useState } from 'react';

//função que permite ir buscar dados à base de dados dos hoodies com os requisitos pretendidos
const HoodieFrontShop = ({ }) => {

  //definição do useState
  const [data, setData] = useState([]);

  //função que permite a requisição de data da base de dados hoodie com um offset de 2  e limit 4
  const readApi = () => {
    //ir à data base buscar 4 elementos a partir do 3
    fetch('https://sheetdb.io/api/v1/31t0t1yl5okf9?offset=2&limit=4')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };

//render no inicio
  useEffect(() => {
    readApi();
  }, []);
 

  return (
    <div>
     <div className='gridder'>
      {data.map((hoodie) => (
      <div>
        <div className='it' key={hoodie.id}>
          <p className='pi'><img className='imgfront' src={hoodie.image} alt={'imagem de ${hoodie.nome}'} style={{ maxWidth: '100%' }} /> <p> {hoodie.nome} </p> </p>
          
          
        </div>
      </div>    
    ))}
    </div>
    
  </div>
)
    }

export default HoodieFrontShop;