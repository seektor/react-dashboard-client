export type DataWithRowNumber<T extends Object> = T & {
  rowNumber: number;
};
