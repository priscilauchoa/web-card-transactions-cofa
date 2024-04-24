import styled from "@emotion/styled";

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 45vw;
  @media (max-width: 768px) {
    width: 80vw;
  }
`;
