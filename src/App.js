import { useReducer, useState, useEffect } from "react";
import CellActions from "./CellActions";
import FormulaActions from "./FormulaActions";
import Grid from "./Grid";
import "./App.css";
import Sheetbar from "./SheetBar";
import reducer, { CreateSheetAction } from "./reducer";
import { produce, enableMapSet } from "immer";

enableMapSet();

function App() {
  const [state, dispatch] = useReducer(produce(reducer), {});
  const [currentSheet, switchSheet] = useState(null);

  useEffect(() => {
    if (Object.keys(state).length === 0) {
      dispatch(CreateSheetAction());
    } else if (!currentSheet) {
      switchSheet(Object.keys(state)[0]);
    }
  }, [state, currentSheet, dispatch]);

  const activeCellId =
    state && state[currentSheet] && state[currentSheet]["activeCell"];
  const activeCellRow =
    activeCellId && state[currentSheet]["activeCell"].slice(1);
  const activeCellCol = activeCellId && state[currentSheet]["activeCell"][0];

  return (
    <div className="main-container">
      <CellActions
        activeCell={
          activeCellId && state[currentSheet][activeCellRow][activeCellCol]
        }
        dispatch={dispatch}
        currentSheet={currentSheet}
        clipBoardCell={
          currentSheet &&
          state[currentSheet] &&
          state[currentSheet]["clipboardCell"]
        }
      />
      <FormulaActions
        activeCellId={
          state && state[currentSheet] && state[currentSheet]["activeCell"]
        }
        currentSheet={currentSheet}
        sheet={state && state[currentSheet]}
        dispatch={dispatch}
      />
      <Grid
        state={currentSheet && state[currentSheet]}
        dispatch={dispatch}
        currentSheet={currentSheet}
      />
      <Sheetbar
        switchSheet={switchSheet}
        sheets={state && Object.keys(state) && Object.keys(state)}
        dispatch={dispatch}
        currentSheet={currentSheet}
      />
    </div>
  );
}

export default App;
