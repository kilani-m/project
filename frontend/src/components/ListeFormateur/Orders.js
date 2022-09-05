import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import { useDispatch, useSelector } from "react-redux";
import { deleteFormateur } from "../../JS/actions/userActions";
import { Button } from "@mui/material";

// Generate Order Data
/*function createData(id, fullName, dateNais, email, role, isBanned) {
  return { id, fullName, dateNais, email, role, isBanned };
}*/

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  const rows = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch()
  return (
    <React.Fragment>
      <Title>Liste formateur</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Date naissance</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>IsBanned</TableCell>
            <TableCell align="right">Role</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow row={row} key={row._id}>
              <TableCell>{row.fullName}</TableCell>
              <TableCell>{row.dateNais}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{(row.isBanned)?"true":"false"}</TableCell>
              <TableCell align="right">{row.role}</TableCell>
              <TableCell align="right"><Button size="small" variant="outlined" color="error" onClick={()=> dispatch(deleteFormateur(row._id))}>delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}
