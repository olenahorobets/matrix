import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { useDispatch } from 'react-redux';

import {
  Paper,
  TextField,
  Button,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";

import { createTable } from "../../store/amount-table/actions";


const useStyles = makeStyles(() => ({
  container: {
    padding: 20,
  },
}));

function CreateTableForm() {
  const { handleSubmit, register } = useForm();
  const history = useHistory();
  const dispatch = useDispatch();


  const onSubmit = (data) => {
    dispatch(createTable(data));
    history.push('/table');
  };

  const classes = useStyles();

  return (
    <Paper className={classes.container} elevation={3}>
      <Typography variant="h4">Create Amount table</Typography>
      <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
        <Grid container direction="column" spacing={2}>
          <Grid item container justify="center">
            <TextField
              label="Rows"
              variant="outlined"
              InputProps={{
                ...register("rows"),
              }}
            />
          </Grid>
          <Grid item container justify="center">
            <TextField
              label="Colums"
              variant="outlined"
              InputProps={{
                ...register("columns"),
              }}
            />
          </Grid>
          <Grid item container justify="center">
            <TextField
              label="Number of cells to be highlighted"
              variant="outlined"
              InputProps={{
                ...register("cellsHighlighted"),
              }}
            />
          </Grid>
          <Grid item container justify="center">
            <Button type="submit" variant="contained">
              Create
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

export default CreateTableForm;
