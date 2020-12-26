import Axios, { AxiosResponse } from "axios";
import { API_SALES } from "../../../../constants/api.constants";
import { SaleDTO } from "../../../../types/dto/SaleDTO";
import { PaginationData } from "../../../../types/PaginationData";

const fetchSales = (
  pageIndex: number,
  pageSize: number
): Promise<
  AxiosResponse<{
    data: SaleDTO[];
    pagination: PaginationData;
  }>
> =>
  Axios.get<{
    data: SaleDTO[];
    pagination: PaginationData;
  }>(`${API_SALES}?pageIndex=${pageIndex}&pageSize=${pageSize}`);

const SalesTableApi = { fetchSales };

export default SalesTableApi;
