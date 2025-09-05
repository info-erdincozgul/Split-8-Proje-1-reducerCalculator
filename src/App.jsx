import React, { useReducer } from 'react';
import TotalDisplay from './components/TotalDisplay.jsx';
import CalcButton from './components/CalcButton.jsx';
import reducer, { initialState } from './store/reducers.jsx';
import {
  typeToScreen,
  changeOperation,
  clearDisplay,
  equals,
  memoryAdd,
  memoryClear,
  memoryRecall,
} from './store/actions.jsx';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const numberHandler = (event) => {
    dispatch(typeToScreen(event.target.value));
  };
  const operationHandler = (event) => {
    dispatch(changeOperation(event.target.value));
  };
  const clearHandler = () => {
    dispatch(clearDisplay());
  };
  const equalsHandler = () => {
    dispatch(equals());
  };
  const memoryHandler = (event) => {
    const { value } = event.target;
    if (value === 'M+') {
      dispatch(memoryAdd());
    } else if (value === 'MR') {
      dispatch(memoryRecall());
    } else if (value === 'MC') {
      dispatch(memoryClear());
    }
  };
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>
            <div className="row">
              <CalcButton value={'M+'} onClick={memoryHandler} />
              <CalcButton value={'MR'} onClick={memoryHandler} />
              <CalcButton value={'MC'} onClick={memoryHandler} />
            </div>
            <div className="row">
              <CalcButton value={1} onClick={numberHandler} />
              <CalcButton value={2} onClick={numberHandler} />
              <CalcButton value={3} onClick={numberHandler} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={numberHandler} />
              <CalcButton value={5} onClick={numberHandler} />
              <CalcButton value={6} onClick={numberHandler} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={numberHandler} />
              <CalcButton value={8} onClick={numberHandler} />
              <CalcButton value={9} onClick={numberHandler} />
            </div>
            <div className="row">
              <CalcButton value={'+'} onClick={operationHandler} />
              <CalcButton value={0} onClick={numberHandler} />
              <CalcButton value={'-'} onClick={operationHandler} />
            </div>
            <div className="row">
              <CalcButton value={'*'} onClick={operationHandler} />
              <CalcButton value={'/'} onClick={operationHandler} />
              <CalcButton value={'CE'} onClick={clearHandler} />
            </div>

            <div className="row eq_button">
              <CalcButton value={'='} onClick={equalsHandler} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
