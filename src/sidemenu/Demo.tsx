import React from 'react';
// import { render } from 'react-dom';
import 'carbon-components/css/carbon-components.min.css';
import {
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell
} from 'carbon-components-react';
import { headerData, rowData } from './SampleData';
type done = {
  rows: any;
  headers: any;
};
const Demo = (props: done) => {
  return (
    <>
      <DataTable rows={rowData} headers={headerData}>
        {({ rows, headers, getHeaderProps, getTableProps }: any) => (
          <TableContainer title="TIme Sheets Managements">
            <Table {...getTableProps()}>
              <TableHead>
                <TableRow>
                  {headers.map((header: any) => (
                    <TableHeader {...getHeaderProps({ header })}>{header.header}</TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row: any) => (
                  <TableRow key={row.id}>
                    {row.cells.map((cell: any) => (
                      <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </DataTable>
    </>
  );
};
export default Demo;
