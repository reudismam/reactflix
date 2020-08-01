import React, { ChangeEvent } from 'react';
import { callbackify } from 'util';

import styled from 'styled-components';

const FormFieldWrapper = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 56px;
  }
`;

const Label = styled.label``;

const LabelText = styled.span`
  color: #E5E5E5;
  height: 57px;
  position: absolute;
  top: 0;
  left: 16px;
  
  display: flex;
  align-items: center;
  
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  
  transition: .1s ease-in-out;
`;


const Input = styled.input`
  background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;
  
  padding: 16px 16px;
  margin-bottom: 45px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;
  
  &:focus {
    border-bottom-color: var(--primary);
  }
  &:focus:not([type='color']) + ${Label.Text} {
    transform: scale(.6) translateY(-10px);
  }
`;

type EventCallBack = (n: ChangeEvent<HTMLInputElement>) => void;

interface Props {
    value: string,
    onChange: EventCallBack
    name: string
    type: string
    label: string
    suggestions: string[]
}

export default function FormField({value, onChange, name, type, label, suggestions}: Props) {
  const fieldId = `id_${name}`  
  const tag = type === 'textarea' ? 'textarea' : 'input'

  const hasValue = Boolean(value.length);
  const hasSuggestions = Boolean(suggestions.length)
  return (
        <FormFieldWrapper>
          <Label
            htmlFor={fieldId}
          >
            <Input
              id={fieldId}
              type={type}
              name={name}
              value= {value}
              onChange={onChange}
              autoComplete={hasSuggestions ? 'off' : 'on'}
              list={hasSuggestions ? `suggestionFor_${fieldId}`: undefined}
            />
            <LabelText>
            {label}
            </LabelText>   
            {hasSuggestions && 
            <datalist id={`suggestionFor_option${fieldId}`}>
              {
                suggestions.map((suggestion) => {
                  return(
                    <option value={suggestion} key={`suggestionFor_option${fieldId}`}>
                      {suggestion}
                    </option>
                  );
                })
              }
              
            </datalist>}
          </Label>
         </FormFieldWrapper>
    );
}