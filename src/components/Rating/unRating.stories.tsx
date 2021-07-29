import React from "react";
import { UncontrolledRating } from "./unRating";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Rating Stories',
    component: UncontrolledRating,

};
const callback = action('clicked')

export const EmptyRating1 = () => <UncontrolledRating defaultValue={1} onChange={callback}/>
export const EmptyRating2 = () => <UncontrolledRating defaultValue={2} onChange={callback}/>
export const EmptyRating3 = () => <UncontrolledRating defaultValue={3} onChange={callback}/>



