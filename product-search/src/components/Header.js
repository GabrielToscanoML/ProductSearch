import '../styles/header.css';
import DropDownCategory from './DropDownCategory';
import DropDownSite from './DropDownSite';
import { useContext, useEffect } from 'react';
import ProductsContext from '../context/ProductsContext';
import { getProductByQueryML, getProductsFromCategoryAndQueryML } from '../services/mercadoLivreAPI';

export default function Header() {
  const { currentSite, currentCategory, inputSearch,
  setCurrentSite, setCurrentCategory, setinputSearch,
  setProductsData } = useContext(ProductsContext);

  const teste = async () => {
    if (currentSite === 'MercadoLivre') {
      const data = await getProductByQueryML(currentCategory);
      setProductsData(data);
    }
    setCurrentSite('');
    setCurrentCategory('');
    setinputSearch('');
  }

  useEffect(() => {
    console.log(inputSearch);
  }, [inputSearch]);

  return (
    <header className="header">
      <div className="dropDown">
        <DropDownSite
          name="Web &#x25BE;"
          item1="Todas"  
          item2="MercadoLivre"  
          item3="Buscapé"  
        />
        <DropDownCategory
          name="Category &#x25BE;"
          item1="Geladeira"  
          item2="TV"  
          item3="Celular"  
        />
      </div>

      <div className="inputField">
        <input
          type="search"
          placeholder="Search Products"
          value={ inputSearch }
          onChange={({ target }) => setinputSearch(target.value)}
        ></input>
        <button
          type="button"
          className="searchButton"
          onClick={ teste }
        >
          Search
        </button>
      </div>
    </header>
  );
}
