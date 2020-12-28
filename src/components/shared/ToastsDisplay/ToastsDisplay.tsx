import { AnimatePresence, motion } from "framer-motion";
import React, { FunctionComponent, useMemo } from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/rootReducer";
import Alert from "../Alert/Alert";
import { AlertType } from "../Alert/Alert.types";
import S from "./ToastsDisplay.styled";

const ToastsManager: FunctionComponent = () => {
  const toasts = useSelector((state: RootState) => state.toastsSlice);
  const rootElement = useMemo(() => document.getElementById("root"), []);

  return (
    rootElement &&
    ReactDOM.createPortal(
      <S.Container>
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: -100, scale: 0.3 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.5 }}
              style={{ marginBottom: "0.5rem" }}
            >
              <Alert
                title={toast.type === AlertType.Success ? "Success" : "Error"}
                type={toast.type}
              >
                {toast.msg}
              </Alert>
            </motion.div>
          ))}
        </AnimatePresence>
      </S.Container>,
      rootElement
    )
  );
};

export default ToastsManager;
