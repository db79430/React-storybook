import React from "react";

type ItemsType = {
    title: string
    value: any
}
export type AccordionPropsType = {
    collapsed: boolean
    titleValue: string
    onChange: () => void
    items: Array<ItemsType>
    onClick: (value: any) => void


}



export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle collapsed={true}  onChange={props.onChange} title={props.titleValue}/>
            {props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>} {/*//{!props.collapsed  && <AccordionBody/> }*/}
        </div>
    )


}

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    onChange: () => void

}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div onClick={ (e) =>
            props.onChange()
        }>
            {props.title}
        </div>
    )
}
type AccordionBodyPropsType = {
    items: Array<ItemsType>
    onClick: (value: any) => void
}
function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <>
            <ul>
                {props.items.map( (i, index) => <li onClick={() => {props.onClick(i.value)}} key={index}>{i.title}</li>)}


            </ul>

        </>
    )
}