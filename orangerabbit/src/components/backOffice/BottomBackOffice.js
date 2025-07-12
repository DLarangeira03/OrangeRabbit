//cria a página de backoffice da categoria hoodie
import "./BackOffice.css"
import NavbarDark from "../../navbar.js";
import Createbottom from "./Bottoms/CreateBottom";
import ReadBottom from "./Bottoms/ReadBottom";
import UpdateBottom from "./Bottoms/UpdateBottom";
import DeleteBottom from "./Bottoms/DeleteBottom";

//cria a página
const BottomBackOffice = () => {

    return (
      <div className="main">
        <NavbarDark></NavbarDark>
        <h1 className="titulo">Bottom BackOffice</h1>
        <DeleteBottom></DeleteBottom>
        <UpdateBottom></UpdateBottom>
        <Createbottom></Createbottom>
        <ReadBottom></ReadBottom>
        <div className="footer">
          <span>Copyright Orange Rabbit && XIX Sidemen</span>
        </div>
      </div>
    );
  };
  
  export default BottomBackOffice;