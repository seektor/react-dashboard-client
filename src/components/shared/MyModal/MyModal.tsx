import { AnimatePresence, motion } from "framer-motion";
import React, { FunctionComponent } from "react";
import S from "./MyModal.styled";

interface MyModalProps {
  open: boolean;
  onHide: () => void;
  layoutId: string;
}

const MyModal: FunctionComponent<MyModalProps> = ({
  open,
  onHide,
  layoutId,
  children,
}) => {
  return (
    <AnimatePresence>
      {open && (
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
      )}
    </AnimatePresence>
  );
};

export default MyModal;
