export function getCellValuesInPostfix(postfixArray, cellId, sheet) {
  const output = [];
  const dependentOn = new Set();

  for (let token of postfixArray) {
    if (isCellReference(token)) {
      const value = getCellValue(token, sheet);
      output.push(value);
      dependentOn.add(token);
    } else if (isRangeReference(token)) {
      const rangeValues = getRangeValues(token, sheet);
      output.push(rangeValues);
      for (let cell of rangeValues) {
        dependentOn.add(cell.id);
      }
    } else {
      output.push(token);
    }
  }

  return [output, Array.from(dependentOn), null];
}

function isCellReference(token) {
  return /^[A-Z][0-9]+$/.test(token);
}

function isRangeReference(token) {
  return /^[A-Z][0-9]+:[A-Z][0-9]+$/.test(token);
}

function getCellValue(cellId, sheet) {
  const row = cellId.slice(1);
  const col = cellId[0];
  return sheet[row][col].content;
}

function getRangeValues(range, sheet) {
  const [start, end] = range.split(":");
  const startRow = parseInt(start.slice(1));
  const endRow = parseInt(end.slice(1));
  const startCol = start[0];
  const endCol = end[0];

  const values = [];
  for (let row = startRow; row <= endRow; row++) {
    for (let col = startCol.charCodeAt(0); col <= endCol.charCodeAt(0); col++) {
      const cellId = String.fromCharCode(col) + row;
      values.push(getCellValue(cellId, sheet));
    }
  }

  return values;
}
