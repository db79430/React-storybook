import React, {ChangeEvent, useState} from "react";
import {SelectValue} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select Stories',
    component: SelectValue,

};

export const EmptySelect = () => <SelectValue value={1} onChange={action('Value Changed')} items={[{title: 'Apple', value:1},{title: 'Orange', value:2}, {title: 'Bananas', value:3}]}/>

export const ChangeSelect = () => {
    const [select, setSelect] = useState<string|undefined>('')
    const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelect(e.currentTarget.value)
    }
    return <SelectValue value={select} onChange={onChangeSelect}
                        items={[{title: 'Apple', value:1},{title: 'Orange', value:2}, {title: 'Bananas', value:3}]}/>
}







