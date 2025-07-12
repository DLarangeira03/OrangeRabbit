//criação de uma barra de pesquisa
import "./SearchBar.css";
import React, { useEffect, useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';


const SearchBar = () => {
  
  //definição do useState
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState('');
  const [dataHoodie, setDataHoodie] = useState([]);
  const [dataBottom, setDataBottom] = useState([]);

  //definição da função que permite carregar as hoodies da base de dados
  const readHoodie = () => {
    fetch('https://sheetdb.io/api/v1/31t0t1yl5okf9')
      .then((response) => response.json())
      .then((dataHoodie) => {
        setDataHoodie(dataHoodie);
      });
  };

  //definição da função que permite carregar as calças e os calções da base de dados
  const readBottom = () => {
    fetch('https://sheetdb.io/api/v1/f2ewkhwrqu3lw')
      .then((response) => response.json())
      .then((dataBottom) => {
        setDataBottom(dataBottom);
      });
  };

  //função que executa aquando da pesquisa
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    console.log('Termo de pesquisa:', e.target.value);
    setSearchResults((e.target.value));
  };

  //permite a renderização dos dados todos quando a página é aberta
  useEffect(() => {
    readHoodie();
    readBottom();
  }, []);

  //array que filtra os nomes nas base de dados que correspondem/incluem o que está a ser procurado 
  const filteredHoodie = dataHoodie.filter(hoodie => hoodie.nome.toLowerCase().includes(searchResults));
  const filteredBottom = dataBottom.filter(bottom => bottom.nome.toLowerCase().includes(searchResults));

  return (
    <Form className="d-flex">
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-2"
        value={searchTerm}
        onChange={handleSearch}
      />
      {(filteredHoodie.length > 0 || filteredBottom.length > 0) && searchResults.length > 0 && (
        <div className="search-results">
          {filteredHoodie.map((hoodie, index) => (
            <div className="gridderSearch" key={index}>
              <img className="imgSearch" src={hoodie.image} alt={'imagem de ${hoodie.nome}'} style={{ maxWidth: '100%' }} />
              <p className="nomeSearch">{hoodie.nome}</p>
              {console.log(filteredHoodie)}
            </div>
          ))}
          {filteredBottom.map((bottom, index) => (
            <div className="gridderSearch" key={index}>
              <img className="imgSearch" src={bottom.image} alt={'imagem de ${bottom.nome}'} style={{ maxWidth: '100%' }} />
              <p className="nomeSearch">{bottom.nome}</p>
              {console.log(filteredBottom)}
            </div>
          ))}
        </div>
      )}

    </Form>
  );
};

export default SearchBar;

