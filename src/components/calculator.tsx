import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { addValue, calResult, onClear } from "../Redux/slices/displaySlice";
import "./calculator.css";
function Calculator() {
  const input = useAppSelector((state) => state.display.input);
  const output = useAppSelector((state) => state.display.output);
  const dispatch = useAppDispatch();
  const onClickHanddler = (value: string) => {
    dispatch(addValue(value));
  };
  return (
    <div className="cal-root">
      <div className="cal-display-body">
        <h1>casio</h1>
        <div id="display" className="cal-display">
          <p>{input}</p>
          <p>{output}</p>
        </div>
      </div>

      <div className="cal-body">
        <button id="clear" onClick={() => dispatch(onClear())}>
          AC
        </button>
        <button id="divide" onClick={() => onClickHanddler("/")}>
          /
        </button>
        <button id="multiply" onClick={() => onClickHanddler("*")}>
          x
        </button>
        <button id="seven" onClick={() => onClickHanddler("7")}>
          7
        </button>
        <button id="eight" onClick={() => onClickHanddler("8")}>
          8
        </button>
        <button id="nine" onClick={() => onClickHanddler("9")}>
          9
        </button>
        <button id="subtract" onClick={() => onClickHanddler("-")}>
          -
        </button>
        <button id="four" onClick={() => onClickHanddler("4")}>
          4
        </button>
        <button id="five" onClick={() => onClickHanddler("5")}>
          5
        </button>
        <button id="six" onClick={() => onClickHanddler("6")}>
          6
        </button>
        <button id="add" onClick={() => onClickHanddler("+")}>
          +
        </button>
        <button id="one" onClick={() => onClickHanddler("1")}>
          1
        </button>
        <button id="two" onClick={() => onClickHanddler("2")}>
          2
        </button>
        <button id="three" onClick={() => onClickHanddler("3")}>
          3
        </button>
        <button id="equals" onClick={() => dispatch(calResult())}>
          =
        </button>
        <button id="zero" onClick={() => onClickHanddler("0")}>
          0
        </button>
        <button id="decimal" onClick={() => onClickHanddler(".")}>
          .
        </button>
      </div>
    </div>
  );
}

export default Calculator;
