import PropTypes from "prop-types";
import classes from "../styles/Person.module.css";

const PersonWithPropType = (props) => {
  return (
    <div className={classes.Person}>
      <h3>{props.name}</h3>
      <h3>{props.age}</h3>
      <h3>{props.email}</h3>
      <h3>{`${props.isMarried}`}</h3>
      <h3>Children:</h3>

      <ul>
        {props.children.map((child, index) => {
          return <li key={index}>{child}</li>;
        })}
      </ul>
    </div>
  );
};

PersonWithPropType.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  email: PropTypes.string,
  isMarried: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.string),
};

export default PersonWithPropType;
