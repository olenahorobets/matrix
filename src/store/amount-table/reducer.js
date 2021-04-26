import {
  ADD_ROW,
  DELETE_ROW,
  CREATE_TABLE,
  INCREMENT_CELL_AMOUNT,
} from "./actions-types";

const initialState = {
  rows: 0,
  columns: 0,
  cellsHighlighted: 0,
  relatedCells: [],
  table: [],
};

function AmountTableReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_TABLE:
      return { ...state, ...action.payload };
    case ADD_ROW:
      return { ...state, table: [...state.table, action.payload.row] };
    case DELETE_ROW:
      return {
        ...state,
        table: state.table.filter((_, index) => index !== action.payload.id),
      };
    case INCREMENT_CELL_AMOUNT:
      return {
        ...state,
        table: state.table.map((row) => {
          return row.map(({ id, amount }) => {
            return {
                id,
                amount: id === action.payload.id ? +amount + 1 : amount
            };
          });
        }),
      };
    default:
      return state;
  }
}

export default AmountTableReducer;
