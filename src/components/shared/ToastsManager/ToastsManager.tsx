// import { AnimatePresence, motion } from "framer-motion";
// import React, { FunctionComponent, useMemo } from "react";
// import ReactDOM from "react-dom";
// import { useSelector } from "react-redux";
// import { RootState } from "../../../store/rootReducer";
// import { ToastType } from "../../../types/ToastType";
// import S from "./ToastsManager.styled";

// const ToastsManager: FunctionComponent = () => {
//   const toasts = useSelector((state: RootState) => state.toastsSlice);
//   const rootElement = useMemo(() => document.getElementById("root"), []);

//   return (
//     rootElement &&
//     ReactDOM.createPortal(
//       <S.Container>
//         <AnimatePresence>
//           {toasts.map((toast) => (
//             <motion.div
//               key={toast.id}
//               initial={{ opacity: 0, y: -100, scale: 0.3 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               exit={{ opacity: 0, y: -50, scale: 0.5 }}
//             >
//               <S.StyledMessage
//                 color={toast.type === ToastType.Success ? "green" : "orange"}
//                 header="SOMETHING LONGER"
//               />
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </S.Container>,
//       rootElement
//     )
//   );
// };

// export default ToastsManager;
export {};
