import React, {useState} from "react";

export type UncontrolledOnOffType = {
    on: boolean
    onChange: (on: boolean) => void
    defaultValue: boolean
}

export function UncontrolledOnOff(props: UncontrolledOnOffType) {
    const
        onStyle = {
        width: '30px',
        high: '30px',
        border: '5px solid',
        margin: '5px',
        display: 'inline-block',
        backgroundColor: props.on ? 'green' : 'white'

    }
    const ofStyle = {
        width: '30px',
        high: '30px',
        border: '5px solid',
        margin: '5px',
        display: 'inline-block',
        backgroundColor: props.on ? 'red' : 'white'
    }
    const indicatorStyle = {
        width: '50px',
        high: '50px',
        borderRadius: '5px',
        borderColor: 'red',
        border: '5px solid',
        display: 'inline-block',
        alignItems: 'center',
        backgroundColor: props.on ? 'yellow' : 'white'
    }
    let [on, onSet] = useState(props.defaultValue ? props.defaultValue: false )
    console.log('on ' + on)

    const onClicked =
    () => {
        onSet(true)
        props.onChange(true)
    }
    const offClicked = () => {
        onSet(false)
        props.onChange(false)
    }


    return (
        <div>
            <div style={indicatorStyle}> //


            </div>
            <div style={onStyle} onClick={onClicked}>On
            </div>
            <div style={ofStyle} onClick={offClicked}>Off
            </div>

        </div>

    )

}