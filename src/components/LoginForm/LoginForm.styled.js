import styled from 'styled-components';
import { Field, Form as FormikForm } from 'formik';

export const Form = styled(FormikForm)`
  margin-top: 20px;
  width: 300px;
  margin: 0 auto;
  box-shadow: 0 0 0 2px #cbc3e3, 8px 8px 0 0 #cbc3e3;
`;

export const Label = styled.label`
  padding: 0 5px;
  opacity: 0.8;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: end;
  padding: 20px 20px 0;
  justify-content: baseline;
  gap: 15px;
`;

export const StyledField = styled(Field)`
  margin-left: 5px;
  padding: 8px;
  background: transparent;
  border: 2px solid #e5e0ff;
  border-radius: 5px;
  font-size: 16px;
  max-width: 190px;

  :focus {
    outline: 1px solid #7286d3;
  }

  &.error {
    border-color: tomato;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 30px;
  margin: 0 auto 20px;
  font-size: 16px;
  color: white;
  border: none;
  border-radius: 5px;
  background-color: #8ea7e9;
  cursor: pointer;
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    background-color: #7286d3;
  }
`;

export const LabelContainer = styled.div`
  position: relative;
`;

export const Error = styled.span`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  color: tomato;
  text-align: start;
  width: 230px;
  font-size: 16px;
  gap: 5px;
  width: 100%;
`;
