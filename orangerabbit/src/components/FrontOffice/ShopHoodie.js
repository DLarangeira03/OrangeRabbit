//criação da página referente à compra de hoodies
import "./Shop.css"
import NavbarDark from "../../navbar";
import ShopHoodiePage from "./ShopHoodiePage";

//função que cria a página
const Shophoodie = () => {


  return (
    <div className="background">
      <NavbarDark></NavbarDark>
      <h1 className="titulo">Hoodies</h1>
      <ShopHoodiePage></ShopHoodiePage>
      <div className="footer">
        <span>Copyright Orange Rabbit && XIX Sidemen</span>
      </div>
    </div>
  );
};

export default Shophoodie;