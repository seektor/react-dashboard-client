import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { useTable } from "react-table";
import useDebounce from "../../../../hooks/useDebounce";
import { DataWithRowNumber } from "../../../../types/DataWithRowNumber";
import { SaleDTO } from "../../../../types/dto/SaleDTO";
import { PaginationData } from "../../../../types/PaginationData";
import Alert from "../../../shared/Alert/Alert";
import { AlertType } from "../../../shared/Alert/Alert.types";
import { ButtonSize, ButtonType } from "../../../shared/Button/Button.types";
import SalesTableApi from "./SalesTable.api";
import { SALES_PAGE_SIZE, SALES_TABLE_COLUMNS } from "./SalesTable.constants";
import S from "./SalesTable.styled";

const SalesTable: FunctionComponent = () => {
  const [loadingData, setLoadingData] = useState<boolean>(false);
  const [salesData, setSalesData] = useState<DataWithRowNumber<SaleDTO>[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [pagination, setPagination] = useState<PaginationData>({
    pageCount: 0,
    pageIndex: 0,
    pageSize: SALES_PAGE_SIZE,
  });
  const paginationRef = useRef<PaginationData>(pagination);
  const [inputPageIndex, setInputPageIndex] = useState<number>(1);
  const debouncedPageIndex = useDebounce<number>(inputPageIndex, 1000);
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

  const fetchData = async (pageIndex: number, pageSize: number) => {
    try {
      setLoadingData(true);
      setErrorMessage(null);
      const response = await SalesTableApi.fetchSales(pageIndex, pageSize);
      paginationRef.current = response.data.pagination;
      setPagination(response.data.pagination);
      const processedData: DataWithRowNumber<SaleDTO>[] = response.data.data.map(
        (row, rowIndex) => ({
          ...row,
          rowNumber: pageIndex * pageSize + rowIndex + 1,
        })
      );
      setSalesData(processedData);
    } catch (error) {
      setErrorMessage(error.response?.data.message || error.message);
    }
    setLoadingData(false);
  };

  const goToPage = (pageIndex: number) => {
    fetchData(pageIndex, pagination.pageSize);
  };

  const canPreviousPage = pagination.pageIndex > 0;
  const canNextPage = pagination.pageIndex < pagination.pageCount;

  useEffect(() => {
    fetchData(0, SALES_PAGE_SIZE);
  }, []);

  useEffect(() => {
    const validIndex = Math.max(
      0,
      Math.min(paginationRef.current.pageCount, debouncedPageIndex - 1)
    );
    if (validIndex !== paginationRef.current.pageIndex) {
      fetchData(validIndex, SALES_PAGE_SIZE);
    }
  }, [debouncedPageIndex]);

  return (
    <S.Container>
      <S.Header>Sales</S.Header>
      <S.ContainerBody>
        {errorMessage && (
          <Alert type={AlertType.Error} title="Error">
            {errorMessage}
          </Alert>
        )}
        {!errorMessage && (
          <>
            <S.TableContainer>
              <S.StyledTable {...getTableProps()}>
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>
                          {column.render("Header")}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {rows.map((row) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <td {...cell.getCellProps()}>
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </S.StyledTable>
            </S.TableContainer>

            <S.PaginationContainer>
              <S.PaginationRow>
                {loadingData
                  ? "Loading..."
                  : `Showing ${pagination.pageSize} of ~
              ${pagination.pageCount * pagination.pageSize} results`}
              </S.PaginationRow>
              <S.PaginationRow>
                <S.PaginationButton
                  buttonSize={ButtonSize.Small}
                  buttonType={ButtonType.Secondary}
                  onClick={() => goToPage(0)}
                  disabled={!canPreviousPage || loadingData}
                >
                  {"<<"}
                </S.PaginationButton>
                <S.PaginationButton
                  buttonSize={ButtonSize.Small}
                  buttonType={ButtonType.Secondary}
                  onClick={() => goToPage(pagination.pageIndex - 1)}
                  disabled={!canPreviousPage || loadingData}
                >
                  {"<"}
                </S.PaginationButton>
                <S.PaginationButton
                  buttonSize={ButtonSize.Small}
                  buttonType={ButtonType.Secondary}
                  onClick={() => goToPage(pagination.pageIndex + 1)}
                  disabled={!canNextPage || loadingData}
                >
                  {">"}
                </S.PaginationButton>
                <S.PaginationButton
                  buttonSize={ButtonSize.Small}
                  buttonType={ButtonType.Secondary}
                  onClick={() => goToPage(pagination.pageCount - 1)}
                  disabled={!canNextPage || loadingData}
                >
                  {">>"}
                </S.PaginationButton>
                <span>
                  Page{" "}
                  <strong>
                    {pagination.pageIndex + 1} of {pagination.pageCount}
                  </strong>
                </span>
                <span>&nbsp;| Go to page:&nbsp;</span>
                <S.PaginationInput
                  type="number"
                  value={inputPageIndex}
                  min={1}
                  onChange={(e) =>
                    setInputPageIndex(
                      e.target.value ? Number(e.target.value) : 0
                    )
                  }
                />
              </S.PaginationRow>
            </S.PaginationContainer>
          </>
        )}
      </S.ContainerBody>
    </S.Container>
  );
};

export default SalesTable;
