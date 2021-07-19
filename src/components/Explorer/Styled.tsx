import styled, { css } from "styled-components";

export const ExplorerForm = styled.form`
  display: flex;
  padding: 0.5rem;
  background-color: #ffffff;
  border: 1px solid #ccccccdd;
  border-radius: 10px;

  span {
    padding: 0.3rem;
    margin-right: 5px;
  }
`;

export const ControlsContainer = styled.div`
  width: auto;
  padding: 0.3rem 0.5rem;
  background-color: #0237acdf;
  border-radius: 10px;
  color: #ffffff;
`;

export const ControlButton = styled.button<{ disabled: boolean }>`
  color: #ffffff;
  width: 50px;
  background-color: hsla(120, 82%, 39%, 0.8);
  padding: 0.3rem;
  cursor: pointer;
  transition: all 0.1s ease;

  ${({ disabled }) =>
    disabled
      ? css`
          background-color: hsla(110, 20%, 40%, 0.7);
          cursor: not-allowed;
        `
      : css``};

  :hover {
    background-color: hsla(120, 82%, 70%, 0.8);
  }
`;
