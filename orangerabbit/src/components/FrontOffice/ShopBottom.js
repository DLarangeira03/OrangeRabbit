//criação da página referente à compra de bottoms
import "./Shop.css"
import NavbarDark from "../../navbar";
import ShopBottomPage from "./ShopBottomPage";

//função que cria a página
const ShopBottom = () => {


  return (
    <div className="background">
      <NavbarDark></NavbarDark>
      <h1 className="titulo">Bottoms</h1>
      <ShopBottomPage></ShopBottomPage>
      <div className="footer">
          <span>Copyright Orange Rabbit && XIX Sidemen</span>
      </div>
    </div>
  );
};

export default ShopBottom;