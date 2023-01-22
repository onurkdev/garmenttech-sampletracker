import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button, Icon } from '@mui/material';
import Title from './Title';
import { ArrowForwardIos, PlayCircle } from '@mui/icons-material';

// Generate Order Data
function createData(id, sampleCode, sampleName, styleCode, sampleStage, sampleStatus) {
  return { id, sampleCode, sampleName, styleCode ,sampleStage, sampleStatus };
}

const rows = [
  createData(
    0,
    'NLK-14232',
    'Gingham Check Shirt',
    '678876567',
    'Development',
    'Pending'
  ),

];

function preventDefault(event) {
  event.preventDefault();
}

export default function Samples() {
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Style Code</TableCell>
            <TableCell>Style Name</TableCell>
            <TableCell>Sample Code</TableCell>
            <TableCell>Sample Stage</TableCell>
            <TableCell>Sample Status</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.sampleCode}</TableCell>
              <TableCell>{row.sampleName}</TableCell>
              <TableCell>{row.styleCode}</TableCell>
              <TableCell>{row.sampleStage}</TableCell>
              <TableCell>{row.sampleStatus}</TableCell>
              <TableCell align="right">
                <Button variant="contained" endIcon={<ArrowForwardIos/>}>
                    Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button variant='contained'>
        Load More
      </Button>
    </React.Fragment>
  );
}