const ErrorMsg = ({ items }) => {
  return <>{items.length === 0 && <p>no food available</p>}</>;
};

export default ErrorMsg;
