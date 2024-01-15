import PropTypes from "prop-types";
import Items from "./Items";

const FoodList = ({ items }) => {
  return (
    <ul className="  list-group">
      {items.map((item) => (
        <Items key={item} foodItem={item} />
      ))}
    </ul>
  );
};

FoodList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default FoodList;
