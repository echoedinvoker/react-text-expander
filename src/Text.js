export function Text({ buttonColor, onShow }) {

  const showStyle = {
    color: buttonColor,
    cursor: "crosshair"
  };

  return (
    <span role='button' style={showStyle} onClick={onShow}>{isOpen ? collapseButtonText : expandButtonText}</span>
  );
}
