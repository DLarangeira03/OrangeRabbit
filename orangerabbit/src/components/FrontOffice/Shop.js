//criação da página inicial da loja
import "./Shop.css"
import NavbarDark from "../../navbar";
import HoodieFrontShop from "./HoodieFrontShop.js";
import BottomFrontShop from "./BottomFrontShop";
import SearchBar from "../SearchBar/SearchBar";


//função que gera a página inicial da loja
const ShopTest = () => {


  return (
    <div className="back">
        <NavbarDark></NavbarDark>
        <div className="head">
          <h1 className="sub">Welcome to Orange Rabbit</h1>
          <h1 className="sub">Welcome to Orange Rabbit</h1>
          <h1 className="titulo">Welcome to Orange Rabbit</h1>
          <h1 className="sub">Welcome to Orange Rabbit</h1>
          <h1 className="sub">Welcome to Orange Rabbit</h1>
        </div>
        <SearchBar></SearchBar>
        <HoodieFrontShop></HoodieFrontShop>
        <BottomFrontShop></BottomFrontShop>
        
        <div className="footer">
          <span>Copyright Orange Rabbit && XIX Sidemen</span>
        </div>
      </div>
  );
};

export default ShopTest;
