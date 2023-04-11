import { useContext } from 'react';
import ProductsContext from '../context/ProductsContext';
import '../styles/dropdown.css';
import { getProductByQueryML } from '../services/mercadoLivreAPI';

export default function DropDownCategory(props) {
  const { setCurrentCategory, setProductsData,
   setCurrentSite } = useContext(ProductsContext);

  const getProductsData = async (item) => {
    setCurrentCategory(item);
    const data = await getProductByQueryML(item);
    setProductsData(data);
    setCurrentSite('');
  }

  return (
    <section>
      <h4 className="dropDownItem">{props.name}</h4>
      <ul className="dropdown">
        <li
          onClick={() => getProductsData(props.item1)}
        >{props.item1}</li>
        <li
          onClick={() => getProductsData(props.item2)}
        >{props.item2}</li>
        <li
          onClick={() => getProductsData(props.item3)}
        >{props.item3}</li>
      </ul>
    </section>
  );
}
