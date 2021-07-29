import React, {ChangeEvent, useState} from "react";

import {FormControl, MenuItem, Select} from "@material-ui/core";

type ItemsType = {
    title: string
    value: any
}
export type SelectType = {
    value: any
    onChange: (value: any) => void
    items: Array<ItemsType>

}


export function SelectValue(props: SelectType) {
    const [select, setSelect] = useState('')
    const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelect(e.currentTarget.value)
    }

    return (
        <div>
            <FormControl>
                <Select>
                    {props.items.map((i) => <MenuItem onChange={() => {
                        props.onChange(i.value)
                    }} key={i.value} >{i.title}</MenuItem>)}
                </Select>
            </FormControl>


        </div>


    )
}


