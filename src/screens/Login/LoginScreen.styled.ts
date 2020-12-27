import { motion } from "framer-motion";
import styled from "styled-components/macro";
import { COLOR } from "../../styles/color.styled";

const ContainerMotion = styled(motion.div)`
  height: 100%;
  width: 100%;
  background-color: ${COLOR.AliceBlue};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 4px 0 ${COLOR.WildBlueYonder};
  border-radius: 0.5rem;
  background-color: ${COLOR.White};
  width: 20rem;
  padding: 0.5rem 1.5rem 1rem 1.5rem;
  margin-bottom: 1.5rem;
`;

const FormHeader = styled.h2`
  color: ${COLOR.DarkCornflowerBlue};
  text-align: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const BottomInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  padding: 1rem 1.5rem;
  background-color: ${COLOR.White};
  box-shadow: 2px 2px 4px 0 ${COLOR.WildBlueYonder};
  width: 20rem;
`;

const S = {
  ContainerMotion,
  FormContainer,
  FormHeader,
  StyledForm,
  BottomInfoContainer,
};

export default S;
