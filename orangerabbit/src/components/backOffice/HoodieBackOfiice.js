//cria a página de backoffice da categoria hoodie
import "./BackOffice.css"
import NavbarDark from "../../navbar.js";
import CreateHoodie from "./hoodie/CreateHoodie.js";
import ReadHoodie from "./hoodie/ReadHoodie.js";
import UpdateHoodie from "./hoodie/UpdateHoodie.js";
import DeleteHoodie from "./hoodie/DeleteHoodie.js";

//cria a página
const HoodieBackOffice = () => {

    return (
      <div className="main">
        <NavbarDark></NavbarDark>
        <h1 className="titulo">Hoodie BackOffice</h1>
        <DeleteHoodie></DeleteHoodie>
        <UpdateHoodie></UpdateHoodie>
        <CreateHoodie></CreateHoodie>
        <ReadHoodie></ReadHoodie>
        <div className="footer">
          <span>Copyright Orange Rabbit && XIX Sidemen</span>
        </div>
      </div>
    );
  };
  
  export default HoodieBackOffice;