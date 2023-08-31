import Card from "../UI/Card";

import "./Concepts.css";

function Concepts(props) {
  return (
    <ul id="concepts">
      <Card>
        <img src={props.items[0].image} alt={props.items[0].title} />
        <h2>{props.items[0].title}</h2>
        <p>{props.items[0].description}</p>
      </Card>
      <Card >
        <img src={props.items[1].image} alt={props.items[1].title} />
        <h2>{props.items[1].title}</h2>
        <p>{props.items[1].description}</p>
      </Card>
      <Card>
        <img src={props.items[2].image} alt={props.items[2].title} />
        <h2>{props.items[2].title}</h2>
        <p>{props.items[2].description}</p>
      </Card>
    </ul>
  );
}

export default Concepts;
