//cria a página de backoffice geral
import "./BackOffice.css"
import NavbarDark from "../../navbar.js";
import ChooseHoodie from "./ChooseHoodie";
import ChooseBottom from "./ChooseBottom";

//função que cria a página backoffice geral
const BackOffice = () => {
  return (
    <div >
      <div className="main">
      <NavbarDark></NavbarDark>
      <h1 className="titulo">BackOffice</h1>
      <div className="choose">
        <ChooseHoodie></ChooseHoodie>
        <ChooseBottom></ChooseBottom>
      </div>
        <div className="footer">
        <span>Copyright Orange Rabbit && XIX Sidemen</span>
      </div>
      </div> 
      
    
    </div >
  );
};

export default BackOffice;