import React from 'react';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


  const columns = [
    { id: 'name', label: 'Event', minWidth: 170 },
    { id: 'date', label: 'Date', minWidth: 100 },
    {
      id: 'time',
      label: 'Time',
      minWidth: 170,
      align: 'left',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'location',
      label: 'Location',
      minWidth: 170,
      align: 'left',
      format: (value) => value.toLocaleString('en-US'),
    },
  ];
  

const ThreatList = ({ threats }) => (

    <>
    
    
      <TableContainer className="tableContainer">
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow>
              {columns.map((column, key) => (
                <TableCell
                  key={key}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {threats.map((row,key) => {
              return (
                <TableRow hover tabIndex={-1} key={key}>
                        {/* <Link key={key} to={`/threat/${threat.name}`} > */}
                  {columns.map((column, key) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={key} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

    
    
    </>
);


export default ThreatList;