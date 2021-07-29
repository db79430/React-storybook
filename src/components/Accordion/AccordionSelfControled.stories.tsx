import React, {useState} from "react";

import {UnAccordion} from "./AccordionSelfControled";


export default {
    title: 'UnAccordion Stories',
    component: UnAccordion,

};


export const CollapsedMode= () => <UnAccordion titleValue={"Cписок пользователей"}/>


export const ChangeRating = () => {

    return <UnAccordion titleValue={'Users'}/>
}


