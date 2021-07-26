import styled from "styled-components";

export const FeedbackOptionsStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;

  padding: 25px 15px;

  width: 400px;

  .btnAdd {
    display: block;

    padding: 3px 5px;
    border-radius: 6px;
    cursor: pointer;
    background-color: transparent;
    &:hover {
      background-color: cornflowerblue;
    }
  }
`;
