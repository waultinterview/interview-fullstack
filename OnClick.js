const buttonClick = ({ message }) => {
  const handleClick = (message) => {
    alert(message);
  };

  return (
    <div>
      <button onClick={handleClick("Hello")}>Click me</button>
    </div>
  );
};

export default buttonClick;
