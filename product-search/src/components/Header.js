import '../styles/header.css';
import DropDownCategory from './DropDownCategory';
import DropDownSite from './DropDownSite';
import { useContext, useEffect, useState } from 'react';
import ProductsContext from '../context/ProductsContext';
import { getProductByQueryML } from '../services/mercadoLivreAPI';

export default function Header() {
  const { setCurrentSite, setCurrentCategory,
  setProductsData } = useContext(ProductsContext);

  const [isDisabled, setIsDisabled] = useState(true);
  const [inputSearch, setinputSearch] = useState('');

  const getProductsData = async () => {
    setCurrentCategory(inputSearch);
    const data = await getProductByQueryML(inputSearch);
    setProductsData(data);
    setCurrentSite('');
  }

  useEffect(() => {
    inputSearch.length > 0 ? setIsDisabled(false) : setIsDisabled(true);
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
          onClick={ getProductsData }
          disabled={ isDisabled }
        >
          Search
        </button>
      </div>
    </header>
  );
}
