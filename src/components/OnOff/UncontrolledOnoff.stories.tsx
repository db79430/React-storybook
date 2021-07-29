import React, {useState} from "react";
import {UncontrolledOnOff} from "./UncontrolledOnoff";

export default {
    title: 'Rating Stories',
    component: UncontrolledOnOff,

};

export const OnMode = () => <UncontrolledOnOff defaultValue={true}  on={true} onChange={x=>x}/>
export const OffMode = () => <UncontrolledOnOff  defaultValue={false} on={false} onChange={x=>x}/>



export const ChangeRating = () => {
    let [switchOn, setSwitchONOff] = useState<boolean>(false)
    return <UncontrolledOnOff defaultValue={switchOn}   on={switchOn} onChange={setSwitchONOff}/>
}


