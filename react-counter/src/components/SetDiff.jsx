import React from "react";

const SetDiff = ({ diff, onChangeDiff }) => {
  const handleChangeDiff = ({ target }) => {
    onChangeDiff(+target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="set-diff">
      <form className="sef-diff__form" onSubmit={handleSubmit}>
        <input
          type="number"
          className="sef-diff__input"
          value={diff}
          onChange={handleChangeDiff}
        />
        <button className="counter__button" type="submit">
          diff 설정
        </button>
      </form>
    </div>
  );
};

export default SetDiff;
