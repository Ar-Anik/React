import PropTypes from "prop-types";
import classes from "../styles/Person.module.css";

function Person({ person }) {
  return (
    <div className={classes.Person}>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.email}</h3>
      <h3>{`${person.isMarried}`}</h3>

      <h3>Children : </h3>

      <ul>
        {person.children.map((child, index) => {
          return <li key={index}>{child}</li>;
        })}
      </ul>
    </div>
  );
}

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number.isRequired,
    email: PropTypes.string,
    isMarried: PropTypes.bool.isRequired,
    children: PropTypes.arrayOf(PropTypes.string.isRequired),
  }),
};

export default Person;
