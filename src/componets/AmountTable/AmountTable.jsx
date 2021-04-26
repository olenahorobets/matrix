import React, { useState } from "react";

import {
  Paper,
  IconButton,
  TableRow,
  TableContainer,
  TableCell,
  TableBody,
  Table,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import { useSelector } from "react-redux";
import { getAmountTableState } from "../../store/amount-table/selector";

const findRelatedArray = (array, goal, limit) => {
  const results = [];

  while (results.length < (+limit + 1)) {
    let closest = array[0];

    for (const value of array) {
      const aleadyInResults = results.some((v) => v.id === value.id);

      if (
        Math.abs(goal - value.amount) < Math.abs(goal - closest.amount) &&
        !aleadyInResults
      ) {
        closest = value;
      }

      if (results.some((v) => v.id === closest.id)) {
          closest = value;
      }

    }

    results.push(closest);
  }

  console.log(results)

  return results.slice(1, results.length);
};

function AmountTable({ onDelete, onCellClick }) {
  const { table, cellsHighlighted } = useSelector(getAmountTableState);

  const [hoverIndex, setHoverIndex] = useState(null);
  const [highlighted, setHighlighted] = useState([]);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {table.map((row, index) => {
            const summary = row.map((c) => c.amount).reduce((a, b) => a + b, 0);

            return (
              <TableRow key={index}>
                {row.map((cell) => {
                  const value =
                    hoverIndex === index
                      ? Math.round((cell.amount * 100) / summary)
                      : cell.amount;

                  return (
                    <TableCell
                      style={{
                        cursor: "pointer",
                        background:
                          hoverIndex === index
                            ? `linear-gradient(0deg, #6666ff ${value}%, #fff 0)`
                            : "initial",
                      }}
                      onClick={() => onCellClick(cell)}
                      onMouseEnter={() => {
                        setHighlighted(
                          findRelatedArray(
                            [...table].flat(Infinity),
                            cell.amount,
                            cellsHighlighted
                          )
                        );
                      }}
                      onMouseLeave={() => {
                        setHighlighted([]);
                      }}
                      key={cell.id}
                      component="th"
                      scope="row"
                    >
                      {value}
                    </TableCell>
                  );
                })}
                <TableCell
                  onMouseEnter={() => {
                    setHoverIndex(index);
                  }}
                  onMouseLeave={() => {
                    setHoverIndex(null);
                  }}
                  component="th"
                  scope="row"
                >
                  {summary}
                </TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => onDelete(index)}
                    aria-label="delete"
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
          <TableRow>
            {table[0].map((_, index) => {
              return (
                <TableCell key={"test" + index} component="th" scope="row">
                  {Math.floor(
                    table
                      .map((row) => row[index].amount)
                      .reduce((a, b) => a + b, 0) / table.length
                  )}
                </TableCell>
              );
            })}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default AmountTable;
