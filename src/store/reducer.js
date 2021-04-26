import { combineReducers } from "redux";

import AmountTableReducer from './amount-table/reducer';

export default combineReducers({ amountTable: AmountTableReducer });
