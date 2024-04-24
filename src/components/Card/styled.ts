import styled from "@emotion/styled";

interface CardContainerProps {
  primary: boolean;
}

const CardContainer = styled.div<CardContainerProps>`
  width: 35%;
  height: 116px;
  color: black;
  padding: 0 20px;
  text-align: start;
  border-radius: 8px;
  background-color: ${(props) => (props.primary ? "#ECECEC" : "#C7EDFF")};
  &:hover {
    color: black;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
`;

export default CardContainer;
