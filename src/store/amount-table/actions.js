import { ADD_ROW, DELETE_ROW, CREATE_TABLE, INCREMENT_CELL_AMOUNT, HIGHlIGHT_RELATED_CELLS } from "./actions-types";

import store from '../store';

import { createAmountObject } from '../../services/amount.service';


const findClosest = function (x, arr) {
    var indexArr = arr.map(function(k) { return Math.abs(k - x) })
    var min = Math.min.apply(Math, indexArr)
    return arr[indexArr.indexOf(min)]
  }




export const addRow = () => {
  const columns = store.getState().amountTable.columns;

  const row = [];

  for (let j = 0; j < columns; j += 1) {
    const amountObject = createAmountObject();

    row.push(amountObject); 
  }     

  return {
    type: ADD_ROW,
    payload: { row },
  };
};

export const deleteRow = (id) => {

  return {
    type: DELETE_ROW,
    payload: { id },
  };
};

export const createTable = ({ rows, columns, cellsHighlighted }) => {
   const table = [];

   for (let i = 0; i < rows; i += 1) {
        const row = [];

        for (let j = 0; j < columns; j += 1) {
            const amountObject = createAmountObject();

            row.push(amountObject); 
        }     

        table.push(row);
   }

  return {
    type: CREATE_TABLE,
    payload: { rows, columns, cellsHighlighted, table },
  };
};


export const incrementCellAmount = (id) => {
    return {
        type: INCREMENT_CELL_AMOUNT,
        payload: { id }
    }
}

export const highlighRelatedAmountCells = (amount) => {
    const table = store.getState().amountTable.table;
    const ids = [];

    return {
        type: HIGHlIGHT_RELATED_CELLS,
        payload: ids,
    }
};