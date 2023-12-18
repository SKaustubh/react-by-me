import PropTypes from "prop-types";
const Items = (props) => {
  return <li className="list-group-item">{props.foodItem}</li>;
};

Items.propTypes = {
  foodItem: PropTypes.string.isRequired,
};

export default Items;
