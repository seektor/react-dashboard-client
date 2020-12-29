import Axios, { AxiosResponse } from "axios";
import { API_SALES_METADATA } from "../../../../constants/api.constants";

const fetchSalesMetadata = (): Promise<
  AxiosResponse<{
    salesCount: number;
  }>
> =>
  Axios.get<{
    salesCount: number;
  }>(`${API_SALES_METADATA}`);

const SalesCountDisplayApi = { fetchSalesMetadata };

export default SalesCountDisplayApi;
