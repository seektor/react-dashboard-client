const { REACT_APP_API_ENDPOINT } = process.env;

export const API_REGISTER_USER = `${REACT_APP_API_ENDPOINT}/register`;
export const API_LOGIN_USER = `${REACT_APP_API_ENDPOINT}/login`;

const API_SALES_AGGREGATES = `${REACT_APP_API_ENDPOINT}/salesAggregates`;

export { API_SALES_AGGREGATES };
