import './FrontShop.css';
import React, { useEffect, useState } from 'react';

//função que permite ir buscar dados à base de dados bottoms com os requisitos pretendidos
const BottomFrontShop = ({ }) => {

  //definição do useState
  const [data, setData] = useState([]);

  //função que permite a requisição de data da base de dados bottoms com limit 4
  const readApi = () => {
    //ir à data base buscar 4 elementos 
    fetch('https://sheetdb.io/api/v1/f2ewkhwrqu3lw?limit=4')
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
        {data.map((bottom) => (
          <div>
            <div className='it' key={bottom.id}>
              <p className='pi'><img className='imgfront' src={bottom.image} alt={'imagem de ${bottom.nome}'} style={{ maxWidth: '100%' }} /> <p> {bottom.nome} </p> </p>


            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default BottomFrontShop;