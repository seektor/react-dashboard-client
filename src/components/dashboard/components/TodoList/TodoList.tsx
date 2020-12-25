// import { AnimateSharedLayout, motion } from "framer-motion";
// import React, { FunctionComponent } from "react";
// import { Button, Loader } from "semantic-ui-react";
// import { useAppDispatch } from "../../../../store/store";
// import MyModal from "../../../shared/MyModal/MyModal";
// import TodoCreateForm from "./TodoCreateForm/TodoCreateForm";
// import TodoItem from "./TodoItem/TodoItem";
// import S from "./TodoList.styled";

// const TodoList: FunctionComponent = () => {
//   const dispatch = useAppDispatch();
//   const [open, setOpen] = React.useState(false);

//   return (
//     <S.Container>
//       <S.HeaderContainer>
//         <S.StyledHeader as="h3">Todo</S.StyledHeader>
//         <Loader active={true} inline size="small" />

//         <AnimateSharedLayout type="switch">
//           <motion.div layoutId="add-todo" layout={false}>
//             <Button primary size="tiny" onClick={() => setOpen(true)}>
//               Add
//             </Button>
//           </motion.div>

//           <MyModal
//             layoutId="add-todo"
//             open={open}
//             onHide={() => setOpen(false)}
//           >
//             <TodoCreateForm onCancel={() => setOpen(false)} />
//           </MyModal>
//         </AnimateSharedLayout>
//       </S.HeaderContainer>

//       <S.TodoList>
//         <TodoItem />
//       </S.TodoList>
//     </S.Container>
//   );
// };

// export default TodoList;
export {};
