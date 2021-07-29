import React, {ChangeEvent, useRef, useState} from 'react';


import { Button, ButtonProps } from './Button';
import {Meta, Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";

export default {
  title: 'input',
  /*component: input*/

  };


export const Uncontrolled = () => <input/>
export  const TrackValueOffUncontrollInput = () => {
  const [value, setValue] = useState('')
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const actualValue= e.currentTarget.value
    setValue(actualValue);

  }
  return <><input onChange={onChange}/> - {value} </>
}

export const GetValueOfUncontrollInput = () => {

  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null);
  const save = () =>
  {
    const el/*: HTMLInputElement*/ = inputRef.current as HTMLInputElement
    setValue (el.value)
  }
  return <> <input id={'inputId'}/> <button onClick={save}>save</button> - actual save value : {value}</>
}

export const ControlledInputFixedValue = () => <input value={'it-incubator'}/>

export const  ControlledInput = () => {
  const [parentValue, setParentValue] = useState('')
  const onChange = (event: ChangeEvent<HTMLInputElement>) => setParentValue(event.currentTarget.value)
  return  <input value={parentValue} onChange={onChange}/>

}

export const  ControlledCheckbox = () => {
  const [parentValue, setParentValue] = useState(true)
  const onChange = (event: ChangeEvent<HTMLInputElement>) => setParentValue(event.currentTarget.checked)
  return  <input type="checkbox" checked={parentValue}  onChange={onChange}/>

}

export const  ControlledSelect = () => {
  const [parentValue, setParentValue] = useState<string|undefined>(undefined)
  const onChange = (event: ChangeEvent<HTMLSelectElement>) => setParentValue(event.currentTarget.value)
  return <select value={parentValue} onChange={onChange}>
    <option>none</option>
    <option value={'1'}>Minsk</option>
    <option value={'2'}>Moscow</option>
    <option value={'3'}>Kiev</option>

  </select>


}
