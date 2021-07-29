import React, {useState} from 'react';
import {OnOff} from "./Onoff";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Rating Stories',
    component: OnOff,

};

export const OnMode = () => <OnOff on={true} onChange={x=>x}/>
export const OffMode = () => <OnOff on={false} onChange={x=>x}/>






export const ChangeRating = () => {
    let [ratingValue, setRatingValue] = useState<boolean>(false)
    return <OnOff on={ratingValue} onChange={setRatingValue}/>
}
