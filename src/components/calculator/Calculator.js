import React, { useState } from 'react';
import './calculator.css';
import Calculate from '../../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState(0);
  const handleClick = (event) => {
    setState(Calculate(state, event.target.innerText));
  };

  return (
    <div className="calculator flex flex--column">
      <div className="calculator-header">
        <p className="result">{state.next || state.total || 0}</p>
      </div>
      <div className="calculator-buttons grid">
        <button type="button" onClick={handleClick} className="btn btn--gray">
          AC
        </button>
        <button type="button" onClick={handleClick} className="btn btn--gray">
          +/-
        </button>
        <button type="button" onClick={handleClick} className="btn btn--gray">
          %
        </button>
        <button type="button" onClick={handleClick} className="btn btn--orang">
          &#247;
        </button>

        <button type="button" onClick={handleClick} className="btn btn--gray">
          7
        </button>
        <button type="button" onClick={handleClick} className="btn btn--gray">
          8
        </button>
        <button type="button" onClick={handleClick} className="btn btn--gray">
          9
        </button>
        <button type="button" onClick={handleClick} className="btn btn--orang">
          x
        </button>

        <button type="button" onClick={handleClick} className="btn btn--gray">
          4
        </button>
        <button type="button" onClick={handleClick} className="btn btn--gray">
          5
        </button>
        <button type="button" onClick={handleClick} className="btn btn--gray">
          6
        </button>
        <button type="button" onClick={handleClick} className="btn btn--orang">
          -
        </button>

        <button type="button" onClick={handleClick} className="btn btn--gray">
          1
        </button>
        <button type="button" onClick={handleClick} className="btn btn--gray">
          2
        </button>
        <button type="button" onClick={handleClick} className="btn btn--gray">
          3
        </button>
        <button type="button" onClick={handleClick} className="btn btn--orang">
          +
        </button>

        <button
          type="button"
          onClick={handleClick}
          className="btn btn--gray span"
        >
          0
        </button>
        <button type="button" onClick={handleClick} className="btn btn--gray">
          .
        </button>
        <button type="button" onClick={handleClick} className="btn btn--orang">
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
