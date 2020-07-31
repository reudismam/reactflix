import React, { ChangeEvent } from 'react';
import { callbackify } from 'util';

type EventCallBack = (n: ChangeEvent<HTMLInputElement>) => void;

interface Props {
    value: string,
    onChange: EventCallBack
    name: string
    type: string
    label: string
}

export default function FormField({value, onChange, name, type, label}: Props) {
    return (
        <div>
          <label>
            {label}
            <input
              type={type}
              name={name}
              value= {value}
              onChange={onChange}
            />
          </label>
         </div>
    );
}