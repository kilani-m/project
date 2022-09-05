import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import {deleteCourses} from "../../JS/actions/coursesActions"

// Generate ManageCourses Data

function preventDefault(event) {
  event.preventDefault();
}

export default function ListeCourses() {
  const rows = useSelector((state) => state.coursesReducer.courses);
  console.log(rows);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Title>Recent Liste Couses</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Former</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Courses</TableCell>
            <TableCell align="right">Amount (DT)</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.former}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.courses}</TableCell>
              <TableCell align="right">{row.ammount}</TableCell>
              <TableCell align="right">
                <Button
                  variant="outlined"
                  color="error"
                  startIcon={<DeleteIcon />}
                  onClick={()=> dispatch(deleteCourses(row._id))}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more courses
      </Link>
    </React.Fragment>
  );
}
