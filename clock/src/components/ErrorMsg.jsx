
import PropTypes from "prop-types";
const ErrorMsg = ({ items }) => {
  return <>{items.length === 0 && <p>no food available</p>}</>;
};

ErrorMsg.propTypes = { items: PropTypes.array.isRequired };
//props validation

export default ErrorMsg;
