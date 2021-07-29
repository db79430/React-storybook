import React, {useReducer, useState} from "react";

type AccordionPropsType = {

    titleValue: string

}

type ActionType = {
    type: string
}

const reducer = (state: boolean, action: ActionType) => {

    /*switch (action.type) {
        case 'TOGGLE-COLLAPSED':
            return !state
        default: return state;

    }*/
    if (action.type === 'TOGGLE-COLLAPSED'){
        return !state
    }

    return state;
}

export function UnAccordion(props: AccordionPropsType) {
    /*const  [collapsed, setCollapsed] = useState(false)*/

    const [collapsed, dispatch] = useReducer(reducer, false)
    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} onClick={() => {
                setCollapsed(!collapsed)
            }}/>*/}
            <AccordionTitle title={props.titleValue} onClick={() => dispatch({type: 'TOGGLE-COLLAPSED'})}/>

            {!collapsed && <AccordionBody/>} {/*//{!props.collapsed  && <AccordionBody/> }*/}
        </div>
    )


}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div onClick={() => {
            props.onClick()
        }}>
            {props.title}
        </div>
    )
}

function AccordionBody() {
    return (
        <>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>


            </ul>

        </>
    )
}