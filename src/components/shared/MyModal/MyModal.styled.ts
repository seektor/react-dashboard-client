import { motion } from "framer-motion";
import styled from "styled-components/macro";

const MotionDivContainer = styled(motion.div)`
  background-color: white;
  border-radius: 0.28571429rem;

  @media (max-width: 767px) {
    width: 95%;
  }

  @media (min-width: 768px) {
    width: 88%;
  }

  @media (min-width: 992px) {
    width: 850px;
  }

  @media (min-width: 1200px) {
    width: 900px;
  }
`;

const S = { MotionDivContainer };

export default S;
