import React from "react";

const Counter = ({ diff, number, onChangeNumber }) => {
  const handleIncrease = () => {
    onChangeNumber(number + diff);
  };
  const hanldeDecrease = () => {
    onChangeNumber(number - diff);
  };

  return (
    <div className="counter">
      <button className="counter__button" onClick={handleIncrease}>
        +{diff}
      </button>
      <span className="counter__number">{number}</span>
      <button className="counter__button" onClick={hanldeDecrease}>
        -{diff}
      </button>
    </div>
  );
};

export default Counter;
