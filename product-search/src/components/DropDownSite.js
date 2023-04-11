import { useContext } from 'react';
import ProductsContext from '../context/ProductsContext';
import '../styles/dropdown.css';

export default function DropDownSite(props) {
  const { setCurrentSite } = useContext(ProductsContext);
  return (
    <section>
      <h4 className="dropDownItem">{props.name}</h4>
      <ul className="dropdown">
        <li
          onClick={() => setCurrentSite(props.item1)}
        >{props.item1}</li>
        <li
          onClick={() => setCurrentSite(props.item2)}
        >{props.item2}</li>
        <li
          onClick={() => setCurrentSite(props.item3)}
        >{props.item3}</li>
      </ul>
    </section>
  );
}
