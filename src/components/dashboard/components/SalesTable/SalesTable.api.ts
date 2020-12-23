import Axios from "axios";
import { SaleDTO } from "../../../../types/dto/SaleDTO";
import { PaginationData } from "../../../../types/PaginationData";

const fetchSales = async (): Promise<{
  data: SaleDTO[];
  pagination: PaginationData;
}> => {
  const response = await Axios.get<{
    data: SaleDTO[];
    pagination: PaginationData;
  }>("http://localhost:8000/api/sales?pageIndex=0&pageSize=10");
  return response.data;
};

const SalesTableApi = { fetchSales };

export default SalesTableApi;
