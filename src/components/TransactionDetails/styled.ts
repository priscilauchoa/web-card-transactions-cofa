import styled from "@emotion/styled";

interface TransactionProps {
  primary: boolean;
}

export const TransactionContainer = styled.li<TransactionProps>`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin: 18px 0px;
  border-radius: 8px;
  color: black;
  background-color: ${(props) => (props.primary ? "#ECECEC" : "#C7EDFF")};
`;
