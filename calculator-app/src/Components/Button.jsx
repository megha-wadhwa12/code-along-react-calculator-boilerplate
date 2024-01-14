const Button = ({ value, onClick }) => {
  const buttonClass = value === "=" ? "equals-button" : "";

  return (
    <button className={`buttonStyling ${buttonClass}`} onClick={onClick}>
      {value}
    </button>
  );
};
export default Button;
