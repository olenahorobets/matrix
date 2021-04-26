import React from "react";

import { Container, Button, Grid, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";

import AmountTable from "../componets/AmountTable/AmountTable";
import {
  addRow,
  deleteRow,
  incrementCellAmount,
} from "../store/amount-table/actions";

function AmountTablePage() {
  const dispatch = useDispatch();

  const handleAddRow = () => {
    dispatch(addRow());
  };

  const handleDelete = (index) => {
    dispatch(deleteRow(index));
  };

  const handleAmountIncrement = (cell) => {
    dispatch(incrementCellAmount(cell.id));
  };

  return (
    <Container>
      <Paper>
        <Grid>
          <Button onClick={handleAddRow} variant="contained" color="primary">
            Add row
          </Button>
        </Grid>
      </Paper>
      <AmountTable
        onCellClick={handleAmountIncrement}
        onDelete={handleDelete}
      />
    </Container>
  );
}

export default AmountTablePage;
