import styled, { css } from 'styled-components';

export const ExplorerForm = styled.form`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding: 0.5rem;
  background-color: #ffffff;
  border: 1px solid #ccccccdd;
  border-radius: 10px;

  span {
    font-size: 18px;
    padding: 0.3rem;
    margin-right: 5px;
  }
`;

export const ControlsContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 0.5rem;
  background-color: #001e5edf;
  border-radius: 10px;
  color: #ffffff;
  font-size: 16px;
`;

export const ControlSelectInput = styled.div`
  display: flex;

  label {
    margin-right: 3px;
  }
`;

export const ControlButton = styled.button<{ disabled: boolean }>`
  color: #ffffff;
  width: 50px;
  background-color: hsla(120, 82%, 39%, 0.8);
  border-radius: 10px;
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
