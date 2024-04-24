import styled from "@emotion/styled";

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 45vw;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    width: 80vw;
  }
`;
