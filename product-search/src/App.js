import { useMemo, useState } from "react";
import Header from "./components/Header";
import ProductsContext from "./context/ProductsContext";

import './styles/app.css';

function App() {
  const [currentSite, setCurrentSite] = useState('');
  const [currentCategory, setCurrentCategory] = useState('');
  const [inputSearch, setinputSearch] = useState('');
  const [productsData, setProductsData] = useState([]);

  const values = useMemo(() => ({
    currentSite,
    currentCategory,
    productsData,
    inputSearch,
    setCurrentSite,
    setCurrentCategory,
    setProductsData,
    setinputSearch,
  }),[currentSite, currentCategory, productsData, inputSearch,
    setCurrentSite, setCurrentCategory, setProductsData, setinputSearch]);

  return (
    <ProductsContext.Provider value={ values }>
      <div className="App">
        <Header />
        <div className="information">
          { currentSite.length > 0
            ? <p>{currentSite}</p>
            : <p>Escolha um site</p>
          }
          <p>/</p>
          { currentCategory.length > 0
            ? <p>{currentCategory}</p>
            : <p>Escolha uma categoria</p>
          }
        </div>
        <hr/>
        { 
          productsData.map((product, index) => {
            if (index >= 0) {
              return (
                <div key={ product.id }>
                  <li>
                    <p>{ product.title }</p>
                    <img src={ product.thumbnail } alt={ product.title } />
                    <p>{ product.price }</p>
                  </li>
                </div>
              );
            }
          })
        }
      </div>
    </ProductsContext.Provider>
  );
}

export default App;
