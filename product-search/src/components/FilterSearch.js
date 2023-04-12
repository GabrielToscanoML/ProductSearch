import '../styles/filterSearch.css';
import { useContext, useEffect, useState } from 'react';
import ProductsContext from '../context/ProductsContext';

export default function FilterSearch() {
  const { filteredProductsData, productsData,
    setfilteredProductsData } = useContext(ProductsContext);

  const [isDisabled, setIsDisabled] = useState(true);
  const [filterSearch, setFilterSearch] = useState('');

  const filterResults = () => {
    setfilteredProductsData(productsData.filter(
      (product) => product.title.toUpperCase().includes(filterSearch.toUpperCase()),
    ));
    if (filterSearch.length === 0) {
      setfilteredProductsData(productsData);
    }
  }

  useEffect(() => {
    if (filterSearch.length <= 0) {
      setfilteredProductsData(productsData); 
    }
  }, [productsData, setfilteredProductsData, filterSearch]);

  useEffect(() => {
    filteredProductsData.length > 0 ? setIsDisabled(false) : setIsDisabled(true);
  }, [filteredProductsData]);

  return (
    <div className="filter">
      <input
        type="search"
        placeholder="Filtrar Produtos"
        value={ filterSearch }
        onChange={({ target }) => setFilterSearch(target.value)}
      ></input>
      <button
        type="button"
        onClick={ filterResults }
        disabled={ isDisabled }
      >
        Filtrar
      </button>
    </div>
  );
}
