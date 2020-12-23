import React, { FunctionComponent, useEffect, useState } from "react";
import { useTable } from "react-table";
import { SaleDTO } from "../../../../types/dto/SaleDTO";
import SalesAPi from "./SalesTable.api";
import { SALES_TABLE_COLUMNS } from "./SalesTable.constants";

const SalesTable: FunctionComponent = () => {
  const [salesData, setSalesData] = useState<SaleDTO[]>([]);
  const tableInstance = useTable({
    columns: SALES_TABLE_COLUMNS,
    data: salesData,
  });
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  useEffect(() => {
    SalesAPi.fetchSales().then((data) => setSalesData(data.data));
  }, []);

  return (
    <div
      style={{
        overflow: "auto",
        width: "100%",
        height: "100%",
        backgroundColor: "white",
      }}
    >
      {/* apply the table props */}
      <table {...getTableProps()}>
        <thead>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup) => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column) => (
                    // Apply the header cell props
                    <th {...column.getHeaderProps()}>
                      {
                        // Render the header
                        column.render("Header")
                      }
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            rows.map((row) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <tr {...row.getRowProps()}>
                  {
                    // Loop over the rows cells
                    row.cells.map((cell) => {
                      // Apply the cell props
                      return (
                        <td {...cell.getCellProps()}>
                          {
                            // Render the cell contents
                            cell.render("Cell")
                          }
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;
