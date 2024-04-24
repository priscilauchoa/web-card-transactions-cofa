import styled from "@emotion/styled";

interface CardContainerProps {
  primary: boolean;
}

const CardContainer = styled.div<CardContainerProps>`
  width: 35%;
  height: 130px;
  color: black;
  cursor: pointer;
  margin-bottom: 20px;
  padding: 0 20px;
  text-align: start;
  border-radius: 8px;
  background-color: ${(props) => (props.primary ? "#ECECEC" : "#C7EDFF")};
  &:hover {
    outline: 0.5px solid gray;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default CardContainer;
