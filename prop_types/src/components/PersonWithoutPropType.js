import classes from "../styles/Person.module.css";

const PersonWithoutPropType = (props) => {
  return (
    <div className={classes.Person}>
      <h3>{props.name}</h3>
      <h3>{props.age}</h3>
      <h3>{props.email}</h3>
      <h3>{props.isMarried}</h3>
      <h3>Children:</h3>

      <ul>
        {props.children.map((child, index) => {
          return <li key={index}>{child}</li>;
        })}
      </ul>
    </div>
  );
};

export default PersonWithoutPropType;
