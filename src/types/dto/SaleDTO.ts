export interface SaleDTO {
  id: number;
  region: string;
  country: string;
  itemType: string;
  salesChannel: string;
  orderPriority: string;
  orderDate: string;
  shipDate: string;
  unitsSold: number;
  unitPrice: number;
  unitCost: number;
  totalRevenue: number;
  totalCost: number;
  totalProfit: number;
}
