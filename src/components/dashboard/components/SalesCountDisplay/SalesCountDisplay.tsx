import React, { FunctionComponent, useEffect, useState } from "react";
import { showToast } from "../../../../store/slices/toasts/toastsSlice";
import { useAppDispatch } from "../../../../store/store";
import { AlertType } from "../../../shared/Alert/Alert.types";
import SalesCountDisplayApi from "./SalesCountDisplay.api";
import S from "./SalesCountDisplay.styled";

const SalesCountDisplay: FunctionComponent = () => {
  const dispatch = useAppDispatch();

  const [salesCount, setSalesCount] = useState<number>(0);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await SalesCountDisplayApi.fetchSalesMetadata();
        setSalesCount(response.data.salesCount);
      } catch (error) {
        dispatch(
          showToast({
            message: error.response?.data.message || error.message,
            type: AlertType.Error,
          })
        );
      }
    };
    loadData();
  }, [dispatch]);

  return (
    <S.Container>
      <S.HeaderTitle>Sales count</S.HeaderTitle>
      <S.Value>{salesCount}</S.Value>
    </S.Container>
  );
};

export default React.memo(SalesCountDisplay);
