import React, {useState} from "react";


type OnOffPropsType = {
    on: boolean
    onChange: (on: boolean) => void
}

 export function OnOff (props:OnOffPropsType) {
    console.log ("on " + props.on)
    const onStyle = {
        width: '30px',
        high: '30px',
        border: '5px solid',
        margin: '5px',
        display: 'inline-block',
        backgroundColor: props.on ? 'green': 'white'

    }
    const ofStyle = {
        width: '30px',
        high: '30px',
        border: '5px solid',
        margin: '5px',
        display: 'inline-block',
        backgroundColor: props.on ? 'red': 'white'
    }
    const indicatorStyle = {
        width: '50px',
        high: '50px',
        borderRadius: '5px',
        borderColor: 'red',
        border: '5px solid',
        display: 'inline-block',
        alignItems: 'center',
        backgroundColor: props.on ? 'yellow': 'white'
    }
    let [on]=useState(false)
        console.log('on ' + on)

    return (
        <div>
            <div style={indicatorStyle} >


            </div>
            <div style={onStyle}  onClick={() => {props.onChange(true)}}>On</div>
            <div style={ofStyle} onClick={() => {props.onChange (false)}}>Off</div>

        </div>

    )

}