import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import ProductsContext from "./context/ProductsContext";

import './styles/app.css';
import ProductCard from "./components/ProductCard";
import FilterSearch from "./components/FilterSearch";

function App() {
  const [currentSite, setCurrentSite] = useState('');
  const [currentCategory, setCurrentCategory] = useState('');
  const [productsData, setProductsData] = useState([]);
  const [filteredProductsData, setfilteredProductsData] = useState([]);

  const values = useMemo(() => ({
    currentSite,
    currentCategory,
    productsData,
    filteredProductsData,
    setCurrentSite,
    setCurrentCategory,
    setProductsData,
    setfilteredProductsData,
  }),[currentSite, currentCategory, productsData,
    filteredProductsData, setCurrentSite, setCurrentCategory,
    setProductsData, setfilteredProductsData]);

    useEffect(() => {
      setfilteredProductsData(productsData);
    }, [productsData]);

  return (
    <ProductsContext.Provider value={ values }>
      <div className="App">
        <Header />
        <div className="information">
          <p>API do Buscapé não está funcionando. Enquanto isso, todas as requisições serão feitas pelo ML</p>
          {/* <p>/</p> */}
          { productsData.length > 0
            ? <p>Categoria buscada: {currentCategory}</p>
            : <p>Escolha uma categoria ou busque por um produto</p>
          }
        </div>
        <hr/>
        <FilterSearch />
        <main className="products">
          { 
            filteredProductsData.map((product, index) => {
              if (index >= 0) {
                return (
                  <div key={ product.id }>
                    <ProductCard product={product}/>
                  </div>
                );
              }
              return null;
            })
          }
        </main>
      </div>
    </ProductsContext.Provider>
  );
}

export default App;
