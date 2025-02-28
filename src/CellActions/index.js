import React from "react";
import {
  ChangeActiveCellProperties,
  CopyCell,
  CutCell,
  PasteCell,
  AddDependentCell,
  ReevaluateFormula,
} from "../reducer";
import "./CellActions.css";
import {
  ContentCopy,
  ContentCut,
  ContentPaste,
  FormatAlignCenter,
  FormatAlignLeft,
  FormatAlignRight,
  FormatBold,
  FormatColorFill,
  FormatColorText,
  FormatItalic,
  FormatUnderlined,
} from "@mui/icons-material";

/**
 * This component is used to change cell styles like - bold, alignment, etc.
 * It used the activeCell info from main state and uses dispatch to send updates styles.
 *
 */
const CellActions = ({ activeCell, dispatch, currentSheet, clipBoardCell }) => {
  if (!activeCell) activeCell = {};

  const handlePropertyChange = (property, value) => {
    dispatch(
      ChangeActiveCellProperties(activeCell.id, currentSheet, property, value)
    );
  };

  const handleCopy = () => {
    dispatch(CopyCell(activeCell, currentSheet));
  };

  const handleCut = () => {
    dispatch(CutCell(activeCell, currentSheet));
  };

  const handlePaste = () => {
    dispatch(PasteCell(activeCell.id, currentSheet));
    if (clipBoardCell) {
      dispatch(
        AddDependentCell(activeCell.id, clipBoardCell.formula, currentSheet)
      );
      dispatch(ReevaluateFormula(activeCell.id, currentSheet));
    }
  };

  return (
    <div className="cell-actions-container">
      <ContentCopy
        className="cell-actions"
        onClick={() => activeCell && activeCell.id && handleCopy()}
      />
      <ContentCut
        className="cell-actions"
        onClick={() => activeCell && activeCell.id && handleCut()}
      />
      <ContentPaste
        className="cell-actions"
        onClick={() => activeCell && activeCell.id && handlePaste()}
      />
      <select
        className="cell-actions font-dropdown"
        value={activeCell && activeCell.fontFamily}
        onClick={(e) =>
          activeCell && activeCell.id && handlePropertyChange("fontFamily", e.target.value)
        }
        disabled={activeCell && activeCell.id ? false : true}
      >
        <option value="Montserrat">Montserrat</option>
        <option value="Raleway">Raleway</option>
        <option value="Roboto">Roboto</option>
        <option value="san-serif">San Serif</option>
        <option value="arial">Arial</option>
      </select>
      <select
        className="cell-actions font-dropdown"
        value={activeCell.fontSize}
        onClick={(e) =>
          activeCell && activeCell.id && handlePropertyChange("fontSize", e.target.value)
        }
        disabled={activeCell && activeCell.id ? false : true}
      >
        <option value="10">10</option>
        <option value="12">12</option>
        <option value="14">14</option>
        <option value="16">16</option>
        <option value="18">18</option>
        <option value="20">20</option>
        <option value="22">22</option>
        <option value="24">24</option>
        <option value="26">26</option>
        <option value="28">28</option>
      </select>
      <FormatBold
        className={`cell-actions ${
          activeCell.bold ? "cell-action-selected" : ""
        }`}
        onClick={() => activeCell && activeCell.id && handlePropertyChange("bold", !activeCell.bold)}
      />
      <FormatItalic
        className={`cell-actions ${
          activeCell.italic ? "cell-action-selected" : ""
        }`}
        onClick={() => activeCell && activeCell.id && handlePropertyChange("italic", !activeCell.italic)}
      />
      <FormatUnderlined
        className={`cell-actions ${
          activeCell.underline ? "cell-action-selected" : ""
        }`}
        name="underline"
        onClick={() => activeCell && activeCell.id && handlePropertyChange("underline", !activeCell.underline)}
      />
      <FormatAlignLeft
        className={`cell-actions ${
          activeCell.alignment === "left" ? "cell-action-selected" : ""
        }`}
        onClick={() => activeCell && activeCell.id && handlePropertyChange("alignment", "left")}
      />
      <FormatAlignCenter
        className={`cell-actions ${
          activeCell.alignment === "center" ? "cell-action-selected" : ""
        }`}
        onClick={() => activeCell && activeCell.id && handlePropertyChange("alignment", "center")}
      />
      <FormatAlignRight
        className={`cell-actions ${
          activeCell.alignment === "right" ? "cell-action-selected" : ""
        }`}
        onClick={() => activeCell && activeCell.id && handlePropertyChange("alignment", "right")}
      />
      <div className="cell-actions cell-action-choose">
        <FormatColorText />
        <input
          type="color"
          className="hidden-input"
          onChange={(e) => handlePropertyChange("color", e.target.value)}
          value={activeCell.color || "black"}
          disabled={activeCell && activeCell.id ? false : true}
        />
      </div>
      <div className="cell-actions cell-action-choose">
        <FormatColorFill />
        <input
          type="color"
          className="hidden-input"
          onChange={(e) => handlePropertyChange("backgroundColor", e.target.value)}
          value={activeCell.backgroundColor || "white"}
          disabled={activeCell && activeCell.id ? false : true}
        />
      </div>
    </div>
  );
};

export default CellActions;
