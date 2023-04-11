import '../styles/header.css';
import DropDown from './DropDown';

export default function Header() {
  return (
    <header className="header">
      <div className="dropDown">
        <DropDown
          name="Web &#x25BE;"
          item1="Todas"  
          item2="MercadoLivre"  
          item3="Buscapé"  
        />
        <DropDown
          name="Category &#x25BE;"
          item1="Geladeira"  
          item2="TV"  
          item3="Celular"  
        />
      </div>

      <div className="inputField">
        <input type="search" placeholder=" Search Products"></input>
        <button type="button" className="searchButton">Search</button>
      </div>
    </header>
  );
}
