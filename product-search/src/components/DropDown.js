import '../styles/dropdown.css';

export default function DropDown(props) {
  return (
    <section>
      <h4 className="dropDownItem">{props.name}</h4>
      <ul className="dropdown">
        <li>{props.item1}</li>
        <li>{props.item2}</li>
        <li>{props.item3}</li>
      </ul>
    </section>
  );
}
