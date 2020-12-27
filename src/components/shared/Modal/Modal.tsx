import { motion } from "framer-motion";
import React, { FunctionComponent } from "react";
import S from "./Modal.styled";

interface ModalProps {
  onHide: () => void;
  layoutId: string;
}

const Modal: FunctionComponent<ModalProps> = ({
  onHide,
  layoutId,
  children,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onHide}
      style={{
        position: "fixed",
        height: "100vh",
        width: "100vw",
        backgroundColor: "rgba(0,0,0,.85)",
        left: 0,
        top: 0,
        zIndex: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <S.MotionDivContainer layoutId={layoutId}>
        {children}
      </S.MotionDivContainer>
    </motion.div>
  );
};

export default Modal;
