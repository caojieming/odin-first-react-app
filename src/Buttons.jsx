// inside {} are properties, the first 3 with default values
function Button({ text = "Click Me!", color = "blue", fontSize = 12, handleClick = "" }) {
  
	// basically the css style of the button
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px"
  };

	// basically what the html would look like, along with plugging in the arguements
  return (
    <button onClick={handleClick} style={buttonStyle}>
      {text}
    </button>
  );
}

export function Buttons() {
	// onClick action, going to another website
  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  return (
    <div>
			{/* completely default button */}
			<Button />

			{/* custom button visuals, default action */}
      <Button text="Don't Click Me!" color="red" fontSize={12} />

			{/* custom color and size, default text and action */}
      <Button color="green" fontSize={20} />

			{/* default button visuals, custom action */}
      <Button handleClick={() => handleButtonClick('https://www.theodinproject.com')} />
    </div>
  );
}