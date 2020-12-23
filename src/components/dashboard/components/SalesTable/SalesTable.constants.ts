import { Column } from "react-table";
import { SaleDTO } from "../../../../types/dto/SaleDTO";

export const SALES_TABLE_COLUMNS: Column<SaleDTO>[] = [
  { Header: "Id", accessor: "id" },
  { Header: "Region", accessor: "region" },
  { Header: "Country", accessor: "country" },
  { Header: "Item Type", accessor: "itemType" },
  { Header: "Sales Channel", accessor: "salesChannel" },
  { Header: "Order Priority", accessor: "orderPriority" },
  { Header: "Order Date", accessor: "orderDate" },
  { Header: "Ship Date", accessor: "shipDate" },
  { Header: "Units Sold", accessor: "unitsSold" },
  { Header: "Unit Price", accessor: "unitPrice" },
  { Header: "Unit Cost", accessor: "unitCost" },
  { Header: "Total Revenue", accessor: "totalRevenue" },
  { Header: "Total Cost", accessor: "totalCost" },
  { Header: "Total Profit", accessor: "totalProfit" },
];
